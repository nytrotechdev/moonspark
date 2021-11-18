<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return "";
    }

    public function update(Request $request){
        $user = $request->user();

        $request->validate([
            "name" => "required",
        ]);


        $data = $request->all();

        if(!(strpos($request->image,'http') > -1)) {
            $data['image'] = $this->upload($request);

        }
        else
            unset($data['image']);

        if($request->password)
            $data['password'] = Hash::make($request->password);

        $user->fill($data);

        $user->save();

        return response()->json(["message" => "Profile updated successfully"]);
    }    


    public function upload(Request $request){
        $image_64 = $request->image;  // your base64 encoded

        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf

        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $image = str_replace($replace, '', $image_64); 
      
       $image = str_replace(' ', '+', $image); 
      
       $imageName = Str::random(10).'.'.$extension;
      
       Storage::disk('public')->put($imageName, base64_decode($image));

       return "$imageName";
    }


}
