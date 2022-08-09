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
            'name' => 'Geral',
            'icon' => 'star'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Sorveteria',
            'icon' => 'local_pizza'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Japonês',
            'icon' => 'local_pizza'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Italiano',
            'icon' => 'local_pizza'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Tradicional',
            'icon' => 'local_pizza'
        ]);
    }
}
