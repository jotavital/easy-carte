<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RestaurantCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('restaurant_categories')->insertOrIgnore([
            'id' => 1,
            'name' => 'Geral'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Sorveteria'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Japonês'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Italiano'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Tradicional'
        ]);
    }
}
