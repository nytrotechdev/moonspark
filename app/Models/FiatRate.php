<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FiatRate extends Model
{
    use HasFactory;

    protected $table = "fiat_rates";

    protected $fillable = [
        "native",
        "eth",
        "bnb",
    ];
}
