<?php

use App\Http\Controllers\Admins\PageController;
use App\Http\Controllers\Admins\ClientController;
use App\Http\Controllers\Admins\DashboardController;
use App\Http\Controllers\Admins\ProjectController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:admin_api'], function(){

    // Dashboard
    Route::apiResource('dashboard', DashboardController::class);

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

});
