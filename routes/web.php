<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$admin_namespace = "";


//Admin Routes


// Route::name('admins.')->group(['prefix' => 'admin', 'name' => 'admins.',  'namespace' => 'App\Http\Controllers\Admins' ], function(){

Route::prefix('admin')->name('admins.')->namespace('App\Http\Controllers\Admins')->group(function(){

    Auth::routes(['register' => false]);

    Route::get('logout',function(){ Auth::guard('admin')->logout(); return redirect(url('/admin/login')); });

    Route::view('/{home?}','layouts/admin')->middleware('auth:admin')->where('home', '.*');

});



Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('logout',function(){ Auth::logout(); return redirect(url('/login')); });

Route::view('/{home?}','layouts/app')->where('home', '.*')->name('landing');
