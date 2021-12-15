<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Project;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class TransactionController extends Controller
{

    public function index(Request $request){
        return Transaction::with('project', 'client')->latest()->get();
    }

    public function show(Request $request, $transaction){
        return Transaction::with('project', 'client')->find($transaction);
    }

    public function update(Request $request, $transaction){

        $tr = Transaction::find($transaction);

        $user = User::whereId($tr->user_id)->get();

        $project = Project::find($tr->project_id);

        $tr->status = $request->status;
        $tr->reason = $request->reason;
        $tr->save();

        if($request->status == 1) $status = "confirmed";

        else $status = "rejected";

        $this->notify([
            "name" => $user->name,
            "title" => "Your Transaction is $status for {$project->project_name}",
            "text" => "Your Transaction is $status for {$project->project_name}",
            "transaction_id" => $tr->id,
            "transaction_type" => get_class($tr),
        ], $user, 'transaction_status');

        return $this->responseSuccess("Status has been updated successfully");
    }

    public function store(Request $request){
        $request->validate([
            'project_id' => "required",
            'client_id' => "required",
            'from_address' => "required",
            'to_address' => "required",
            'token' => "required",
            'amount' => "required",
            'transaction_hash' => "required",
            'ss' => "required",
            'status' => "required",
        ]);

        $project = Project::find($request->project_id);
        $sspath = null;
        if($request->file('ss')){
            $path = $request->file('ss')->store("public/project/{$project->id}/transactions");
            $sspath = str_replace('public/','',$path);
        }

        $user = User::whereId($project->user_id)->get();

        $tr = Transaction::create([
            "user_id" => $request->client_id,
            "project_id" => $project->id,
            "from_address" => $request->from_address,
            "to_address" => $request->to_address,
            "token" => $request->token,
            "amount" => $request->amount,
            "transaction_hash" => @$request->transaction_hash,
            "screenshot" => $sspath,
            "reciept_url" => null,
            "status" => $request->status,
            "type" => 1,
            "reason" => null,
            "payload" => null,
        ]);

        $this->notify([
            "name" => $user->name,
            "title" => "Admin has transfer token to your wallet for {$project->project_name}",
            "text" => "Admin has transfer token to your wallet for {$project->project_name}",
            "transaction_id" => $tr->id,
            "transaction_type" => get_class($tr),
        ], $user, 'transaction_status');
        
        return $this->responseSuccess("Transfer has been done successfully");
    }
}
