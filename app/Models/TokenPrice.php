<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TokenPrice extends Model
{
    use HasFactory;

    protected $table = "tokens_price";

    protected $fillable = [
        'amount', 'currency', 'active', 'project_id'
    ];
}
