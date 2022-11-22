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
            'name' => 'Tradicional',
            'icon' => 'restaurant_menu'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Fast Food',
            'icon' => 'lunch_dining'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Japonês',
            'icon' => 'ramen_dining'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Italiano',
            'icon' => 'local_pizza'
        ]);
        DB::table('restaurant_categories')->insertOrIgnore([
            'name' => 'Sorveteria',
            'icon' => 'icecream'
        ]);
    }
}
