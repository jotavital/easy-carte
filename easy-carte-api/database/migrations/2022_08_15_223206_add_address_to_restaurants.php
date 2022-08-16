<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('restaurants', function (Blueprint $table) {
            $table->string('zip_code')->after('closing_time')->nullable()->default(null);
            $table->string('street')->after('zip_code')->nullable()->default(null);
            $table->string('neighborhood')->after('street')->nullable()->default(null);
            $table->string('number')->after('neighborhood')->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('restaurants', function (Blueprint $table) {
            $table->dropColumn('zip_code');
            $table->dropColumn('street');
            $table->dropColumn('neighborhood');
            $table->dropColumn('number');
        });
    }
};
