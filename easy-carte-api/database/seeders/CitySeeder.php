<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->insertOrIgnore([
            'id' => 3168606,
            'name' => 'Teófilo Otoni',
            'city_url' => 'teofilo-otoni'
        ]);
    }
}
