<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('states')->insertOrIgnore([
            'id' => 31,
            'name' => 'Minas Gerais',
            'initials' => 'MG'
        ]);
    }
}
