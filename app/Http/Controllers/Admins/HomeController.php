<?php

namespace App\Http\Controllers\Admins;

use App\Doctor;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Providers\RouteServiceProvider;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;

class HomeController extends Controller
{

    public function index(Request $request){
        $month = Carbon::now()->month;
        $year = Carbon::now()->year;

        $appointment_graph = $user_graph = $doctor_graph = initValuesForGraph();

        $appointment_graph = (new Booking())->getByYear($year, $month, $appointment_graph);
        $user_graph = (new User())->getByYear($year, $month, $user_graph);
        $doctor_graph = (new Doctor())->getByYear($year, $month, $doctor_graph);

        $stats = [
            'user' => User::count(),
            'doctor' => Doctor::count(),
            'clinic' => 0,
            'hospital' => 0,
            'appointment_graph' => $appointment_graph,
            'user_graph' => $user_graph,
            'doctor_graph' => $doctor_graph,
        ];

        return $stats;
    }

    public function profile(Request $request){
        return $request->user();
    }

    public function getSkills(){
        return config('app.doctors.skills');
    }


    public function update(Request $request){

        $user = $request->user();

        $data = $request->only($user->getFillable());

        unset($data['email']);

        $user->fill($data);

        $user->save();

        return response()->json(['message' => 'User is updated successfully']);

    }

    public function changePassword(Request $request){
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'old_password' => ['required'],
        ]);

        extract($request->all());

        $user = $request->user();

        if(Hash::check($old_password, $user->password)){
            $user->password = Hash::make($password);
            $user->save();

            return $this->responseSuccess(Lang::get("passwords.reset"));
        }

        return $this->responseWithError(['password' => Lang::get("validation.password_match")]);
    }

    public function emailExist(Request $request){
        $doctor = Doctor::whereEmail($request->email)->first();

        if(!$doctor) return $this->responseWithError(['error' => Lang::get('passwords.user'), "exist" => false]);

        return $this->responseSuccess("", ["exist" => true]);
    }


    public function checkIfCodeExist(Request $request){
        $request->validate(['email' => 'required', 'code' => 'required']);

        $doctor = Doctor::whereEmail($request->email)->whereResetCode($request->code)->first();

        if(!$doctor) return $this->responseWithError(["code" => Lang::get('passwords.token')]);

        return $this->responseSuccess(Lang::get('passwords.code_matched'), [
            'code' => $doctor->reset_code,
            'token' => $doctor->plain_token
        ]);

    }


    public function doLogout(){
        Auth::guard('doctor')->logout();
        return redirect(url(RouteServiceProvider::DOCTORHOME));
    }
}
