<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applys', function (Blueprint $table) {
            $table->increments('id');
            $table->text('aoverview');
            $table->string('afileurl');
            $table->string('astatus');
            $table->boolean('pflag');
            $table->integer('user_id')->unsigned();
            $table->integer('job_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('applys', function(Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('restrict')
                ->onUpdate('restrict');
        });

        Schema::table('applys', function(Blueprint $table) {
            $table->foreign('job_id')->references('id')->on('jobs')
                ->onDelete('restrict')
                ->onUpdate('restrict');
        });
    }

    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('applys', function(Blueprint $table) {
            $table->dropForeign('applys_user_id_foreign');
        });

        Schema::table('applys', function(Blueprint $table) {
            $table->dropForeign('applys_job_id_foreign');
        });

        Schema::drop('applys');
    }
}
