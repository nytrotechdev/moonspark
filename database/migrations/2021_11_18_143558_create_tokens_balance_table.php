<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTokensBalanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tokens_price', function (Blueprint $table) {
            $table->id();
            $table->string('project_id');
            $table->string('amount');
            $table->string('currency')->default('usd');
            $table->string('active')->default(1);
            $table->timestamps();
        });


        Schema::table('projects', function (Blueprint $table) {
            $table->string('available_balance')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tokens_price');

        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('available_balance');
        });        
    }
}
