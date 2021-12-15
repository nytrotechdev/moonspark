<?php

use App\Http\Controllers\Admins\PageController;
use App\Http\Controllers\Admins\ClientController;
use App\Http\Controllers\Admins\DashboardController;
use App\Http\Controllers\Admins\ProjectController;
use App\Http\Controllers\Admins\TransactionController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:admin_api'], function(){

    // Dashboard
    Route::apiResource('dashboard', DashboardController::class);

    // Notifications
    Route::get('get-notifications', [DashboardController::class, 'getNotifications']);
    Route::get('my-notifications', [DashboardController::class, 'myNotifications']);
    Route::get('send-notifications', [DashboardController::class, 'sendNotifications']);
    Route::get('clear-notifications', [DashboardController::class, 'clearNotifications']);

    Route::get('profile', [DashboardController::class, 'profile']);
    Route::post('profile', [DashboardController::class, 'updateProfile']);

    // Project
    Route::apiResource('project', ProjectController::class);
    Route::post('project/{project}', [ProjectController::class, 'update']);
    Route::post('project/{project}/update-status', [ProjectController::class, 'updateStatus']);

    // Client
    Route::apiResource('user', ClientController::class);
    Route::post('user/{user}', [ClientController::class, 'update']);
    Route::post('user/{user}/update-password', [ClientController::class, 'changePassword']);
 
    // Page
    Route::apiResource('pages', PageController::class);

    //Transactions
    Route::apiResource('transactions', TransactionController::class);
    Route::post('transactions/{transactions}', [TransactionController::class, 'update']);


});
