<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('project_name');
            $table->string('project_ticker');
            $table->text('logo')->nullable();
            $table->longText('project_detail')->nullable();
            $table->string('fund_raised_todate')->nullable();
            $table->string('total_raised_todate')->nullable();
            $table->string('smart_contract_audited')->nullable();
            $table->string('smart_contract_audited_text')->nullable();
            $table->string('project_type')->nullable();
            $table->text('token_usecase')->nullable();
            $table->text('website')->nullable();
            $table->text('medium')->nullable();
            $table->text('twitter')->nullable();
            $table->text('telegram')->nullable();
            $table->text('tg_handle')->nullable();
            $table->string('email')->nullable();
            $table->string('name_of_ceo')->nullable();
            $table->string('name_of_cto')->nullable();
            $table->longText('bio_of_ceo')->nullable();
            $table->longText('bio_of_cto')->nullable();
            $table->text('short_video')->nullable();
            $table->string('project_business_incorporated')->nullable();
            $table->string('project_business_incorporated_where')->nullable();
            $table->string('project_business_lic')->nullable();
            $table->string('project_business_lic_list')->nullable();
            $table->string('project_business_lic_plan')->nullable();
            $table->text('tokenomics_detail')->nullable();
            $table->text('project_business_model')->nullable();
            $table->text('legal_opinion')->nullable();
            $table->text('market_cape')->nullable();
            $table->text('diluted_market_cape')->nullable();
            $table->text('summary')->nullable();
            $table->text('core_team')->nullable();
            $table->text('mvp')->nullable();
            $table->text('whitepaper_link')->nullable();
            $table->text('total_follower')->nullable();
            $table->text('youtube_link')->nullable();
            $table->text('partnership')->nullable();
            $table->text('core_developer')->nullable();
            $table->text('security_concerns')->nullable();
            $table->text('split')->nullable();
            $table->text('relevant_info')->nullable();
            $table->text('contract')->nullable();
            $table->text('contract_link')->nullable();
            $table->text('decimal')->nullable();
            $table->text('no_of_token')->nullable();
            $table->text('max_no_of_token')->nullable();
            $table->tinyInteger('status')->default(0);
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
        Schema::dropIfExists('projects');
    }
}
