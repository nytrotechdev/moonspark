<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = "transactions";

    protected $fillable = [
        "user_id",
        "type",
        "project_id",
        "to_address",
        "to_address",
        "token",
        "amount",
        "receipt",
        "transaction_hash",
        "screenshot",
        "reason",
        "status",
    ];


    protected $appends = ['created_date', 'trim_sender', 'trim_reciever'];

    public function getTrimSenderAttribute(){
        return substr($this->from_address, 0, 5)."...".substr($this->from_address, -5);
    }

    public function getTrimRecieverAttribute(){
        return substr($this->to_address, 0, 5)."...".substr($this->to_address, -5);
    }

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }
    
    public function project(){
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function client(){
        return $this->belongsTo(User::class, 'user_id')->select('id', 'name', 'created_at');
    }


}
