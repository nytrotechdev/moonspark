<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;

class PaymentController extends Controller
{

    /**
     * index
     *
     * @return void
     */
    public function index(){
        return Payment::with('paymentable', 'booking.doctor')->latest()->get();
    }
}
