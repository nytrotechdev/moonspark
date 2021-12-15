<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Project;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{

    public function index(Request $request){
        return Transaction::with('project', 'client')->where('user_id', $request->user()->id)->latest()->get();
    }

    public function adminAddress(Request $request){
        $admin = Admin::first();

        if(!$admin || !$admin->wallet_address) return $this->responseWithError(['message' => "Reciever address is not set, contact support"]);

        return $admin->wallet_address;
    }

    public function deposit(Request $request, $project) {
        $request->validate([
            'receiver_address' => "required",
            'amount' => "required|numeric",
            "transaction_hash" => "required",
            "ss" => "required",
            "sender" => "required",
        ],[
            'ss.required' => "Screenshot is required",
            'transaction_hash.required' => "Transaction Hash is required",
        ]);

        $project = Project::find($project);

        $path = $request->file('ss')->store("public/project/{$project->id}/transactions");

        $transaction = Transaction::create([
            "user_id" => $request->user()->id,
            "project_id" => $project->id,
            "from_address" => $request->sender,
            "to_address" => $this->adminAddress($request),
            "token" => null,
            "amount" => $request->amount,
            "transaction_hash" => $request->transaction_hash,
            "screenshot" => str_replace('public/','',$path),
            "reciept_url" => null,
            "status" => 0,
            "reason" => null,
        ]);

        $this->notify([
            'name' => "Admin",
            "title" => "Tokens Deposit for {$project->project_name}",
            "text" => $request->user()->name." has deposited {$request->amount} Tokens for Project - {$project->project_name} on Moonspark.finance ",
            "transaction_id" => $transaction->id,
            "transaction_type" => get_class($transaction),
        ], Admin::all(), 'token_deposit');

        

        $this->responseSuccess("Token has been deposit successfully, Please wait for its confirmation");

        // Transaction
    }

    public function transfer(Request $request, $project){
        $request->validate([
            'receiver_address' => "required",
            'amount' => "required|numeric",
            "sender" => "required",
        ]);

        $project = Project::find($project);

        $transaction = Transaction::create([
            "user_id" => $request->user()->id,
            "project_id" => $project->id,
            "from_address" => $request->sender,
            "to_address" => $request->receiver_address ? $this->receiver_address : $this->adminAddress($request),
            "token" => null,
            "amount" => $request->amount,
            "transaction_hash" => @$request->transaction_hash,
            "screenshot" => null,
            "reciept_url" => null,
            "status" => 0,
            "type" => 1,
            "reason" => null,
            "payload" => $request->payload,
        ]);

        $this->notify([
            'name' => "Admin",
            "title" => "Tokens Transfered for {$project->project_name}",
            "text" => $request->user()->name." has deposited {$request->amount} Tokens for Project - {$project->project_name} on Moonspark.finance ",
            "transaction_id" => $transaction->id,
            "transaction_type" => get_class($transaction),
        ], Admin::all(), 'token_deposit');


        $this->responseSuccess("Token has been transfered successfully, Please wait for its confirmation");
    }

}
