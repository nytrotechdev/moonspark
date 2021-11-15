<?php

namespace Database\Seeders;

use App\Models\Admin;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Admin::firstOrCreate([
            'email' => "admin@gmail.com",
        ],[
            "name" => "Admin",
            "email" => "admin@gmail.com",
            "password" => Hash::make('admin123'),
            'status' => 1,
            'created_at' => Carbon::now(),
        ]);
        // \App\Models\User::factory(10)->create();
    }
}
