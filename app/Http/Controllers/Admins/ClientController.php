<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Mail\WelcomeEmail;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ClientController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(){
        return User::withCount('projects')->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required",
            "email" => "required",
            "password" => "required",
            "phone" => "required",
            "country" => "required",            
        ]);

        $user = new User();
        $password = $request->password;
        // $password = rand(1000, 10000);
        // $password = 12345678;
        $data = $request->only($user->getFillable());
        $data['password'] = bcrypt($password);
        $data['status'] = 1;
        $user->fill($data);
        $user->save();
        try{
            Mail::to($user->email)->send(new WelcomeEmail($user, $password));
        }
        catch(Exception $e){
            return response()->json(['message' => 'User is added successfully but mail is not sent, Please check the mailing credentials']);
        }
        return response()->json(['message' => 'User is added successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  User $user
     * @return UserResource
     */
    public function show($user)
    {
        return User::find($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $data = $request->only($user->getFillable());
        if($request->password)
            $data['password'] = bcrypt($request->password);
        unset($data['email']);
        $user->fill($data);
        $user->save();
        return response()->json(['message' => 'User is updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->status = !$user->status;
        $user->save();
        return response(['message' => 'User has been ' . ($user->status? 'activated': "blocked")]);
    }

    /**
     * updateCover
     *
     * @param  mixed $request
     * @return void
     */
    public function updateCover(Request $request, User $user){

        $path = $request->file('cover')->store('public/profile_covers');
        $path = str_replace('public/','',$path);
        $user->cover = $path;
        $user->save();

        return $this->responseSuccess("Profile cover is updated successfully");
    }

    /**
     * updateProfilePic
     *
     * @param  mixed $request
     * @return void
     */
    public function updateProfilePic(Request $request, User $user){
        $path = $request->file('image')->store('public/profile_pictures');
        $path = str_replace('public/','',$path);
        $user->image = $path;
        $user->save();

        return $this->responseSuccess("Profile photo is updated successfully");
    }    

    /**
     * changePassword
     *
     * @param  mixed $request
     * @return void
     */
    public function changePassword(Request $request, User $user){
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        extract($request->all());

        $user->password = Hash::make($password);
        $user->save();

        return $this->responseSuccess(Lang::get("passwords.reset"));

    }

}
