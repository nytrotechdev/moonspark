<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Referral;
use App\Models\Task;
use Illuminate\Http\Request;
use App\Models\AdminReminder as Reminder;
use App\Models\Project;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $project = Project::latest()->get();

        $transaction = Transaction::latest()->get();

        return [
            'user' => $user,
            'users' => User::count(),
            'projects' => count($project),
            'active_project' => $project->where('status', 0)->count(),
            'pending_project' => $project->where('status', 1)->count(),
            'active_tran' => $transaction->where('status', 0)->count(),
            'pending_tran' => $transaction->where('status', 1)->count(),
            'rejected_tran' => $transaction->where('status', 2)->count(),
            'latest_project' => Project::whereDate('created_at', Carbon::now())->latest()->get(),
            'latest_transaction' => Transaction::whereDate('created_at', Carbon::now())->latest()->get(),
        ];

    }

    public function profile(Request $request){
        return $request->user();
    }

    public function updateProfile(Request $request, $id)
    {
        $user = Admin::find($id);
        $data = $request->only($user->getFillable());
        if($request->password)
            $data['password'] = bcrypt($request->password);
        unset($data['email']);
        $user->fill($data);
        $user->save();
        return response()->json(['message' => 'Profile updated successfully']);
    }



}
