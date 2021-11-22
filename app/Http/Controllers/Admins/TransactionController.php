<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Project;
use App\Models\Transaction;
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

        $tr->status = $request->status;
        $tr->reason = $request->reason;
        $tr->save();

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

        Transaction::create([
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

        return $this->responseSuccess("Transfer has been done successfully");
    }
}
