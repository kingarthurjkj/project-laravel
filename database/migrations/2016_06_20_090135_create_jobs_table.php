<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('jtitle');
            $table->date('jclosingtime');
            $table->integer('jsalary');
            $table->string('jtype');
            $table->string('jlocation');
            $table->string('jcategory');
            $table->string('jcountry');
            $table->integer('user_id')->unsigned();
            $table->string('fileurl');
            $table->text('joverview');
            $table->timestamps();
        });

        Schema::table('jobs', function(Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')
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
        Schema::table('jobs', function(Blueprint $table) {
            $table->dropForeign('jobs_user_id_foreign');
        });

        Schema::drop('jobs');
    }
}
