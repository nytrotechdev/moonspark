<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('get-latest-projects', [ProjectController::class, 'latestProject']);
Route::get('projects/{project}', [ProjectController::class, 'show']);

Route::group(['middleware' => 'auth:api'], function(){

    ///get Admin wallet address;
    Route::get('get-receiver-address', [HomeController::class, 'adminAddress']);


    // Profile
    Route::get('profile', function(){ return request()->user(); });
    Route::post('update', [HomeController::class, 'update']);
    // Projets
    Route::get('projects', [ProjectController::class, 'index']);
    Route::post('projects', [ProjectController::class, 'store']);
    Route::post('projects/{project}', [ProjectController::class, 'update']);
    Route::post('projects/{project}/set-rate', [ProjectController::class, 'setRate']);
    
    // Transaction
    Route::get('transaction', [TransactionController::class, 'index']);
    Route::post('transaction/{project}/deposit', [TransactionController::class, 'deposit']);

});

