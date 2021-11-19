<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->tinyInteger('type')->default(0);
            $table->string('project_id');
            $table->longText('from_address');
            $table->longText('to_address');
            $table->longText('token')->nullable();
            $table->longText('amount')->nullable();
            $table->longText('receipt')->nullable();
            $table->longText('transaction_hash')->nullable();
            $table->longText('screenshot')->nullable();
            $table->longText('reason')->nullable();
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
