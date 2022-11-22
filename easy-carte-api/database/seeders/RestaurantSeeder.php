<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Restaurant::factory(env('COUNT_RESTAURANTS_TO_SEED'))->create();

        DB::table('restaurants')->insert([
            'name' => 'Cozinha do Zé',
            'description' => "Um dos melhores restaurantes que você vai encontrar na cidade, agora no cardápio digital!",
            'logo' => 'https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-design-de-chef-de-cozinha_568621-22.jpg',
            'opening_time' => "08:30:00",
            'closing_time' => "12:00:00",
            'restaurant_category_id' => 1,
            'city_id' => 3168606,
            'zip_code' => '39802-047',
            'street' => 'Av. Luiz Boali Porto Salman',
            'neighborhood' => 'Manoel Pimenta',
            'number' => 1730,
            'code' => mt_rand(1111, 9999),
            'settings' => json_encode([
                'show_on_catalog' => 1,
                'show_products_price' => rand(0, 1)
            ])
        ]);
        DB::table('restaurants')->insert([
            'name' => 'Fogão a lenha',
            'description' => "Um dos melhores restaurantes que você vai encontrar na cidade, agora no cardápio digital!",
            'logo' => 'https://png.pngtree.com/png-vector/20190830/ourlarge/pngtree-firewood-oven-logo-designs-inspiration-isolated-on-white-backgro-png-image_1716433.jpg',
            'opening_time' => "07:30:00",
            'closing_time' => "15:00:00",
            'restaurant_category_id' => 3,
            'city_id' => 3168606,
            'zip_code' => '39802-047',
            'street' => 'Av. Amazonas',
            'neighborhood' => 'Manoel Pimenta',
            'number' => 1730,
            'code' => mt_rand(1111, 9999),
            'settings' => json_encode([
                'show_on_catalog' => 1,
                'show_products_price' => rand(0, 1)
            ])
        ]);
        DB::table('restaurants')->insert([
            'name' => 'Panela de ferro',
            'description' => "Um dos melhores restaurantes que você vai encontrar na cidade, agora no cardápio digital!",
            'logo' => 'https://static.vecteezy.com/ti/vetor-gratis/p1/3703647-cooking-pot-logo-design-for-business-and-company-vetor.jpg',
            'opening_time' => "07:30:00",
            'closing_time' => "17:00:00",
            'restaurant_category_id' => 4,
            'city_id' => 3168606,
            'zip_code' => '39802-047',
            'street' => 'Av. Dos Tupis',
            'neighborhood' => 'Colégio Batista',
            'number' => 1730,
            'code' => mt_rand(1111, 9999),
            'settings' => json_encode([
                'show_on_catalog' => 1,
                'show_products_price' => rand(0, 1)
            ])
        ]);
        DB::table('restaurants')->insert([
            'name' => 'Delícias na panela',
            'description' => "Um dos melhores restaurantes que você vai encontrar na cidade, agora no cardápio digital!",
            'logo' => 'https://i.pinimg.com/236x/f0/cf/fd/f0cffda25c5db9680bb733dea51a52e0.jpg',
            'opening_time' => "07:30:00",
            'closing_time' => "17:00:00",
            'restaurant_category_id' => 1,
            'city_id' => 3168606,
            'zip_code' => '39802-047',
            'street' => 'Av. Dos Legais',
            'neighborhood' => 'Floresta',
            'number' => 1730,
            'code' => mt_rand(1111, 9999),
            'settings' => json_encode([
                'show_on_catalog' => 1,
                'show_products_price' => rand(0, 1)
            ])
        ]);
        DB::table('restaurants')->insert([
            'name' => 'Soveteria Top 10',
            'description' => "Um dos melhores restaurantes que você vai encontrar na cidade, agora no cardápio digital!",
            'logo' => 'https://i.pinimg.com/736x/31/7d/b3/317db3b039dd64a0832f27a78d85f043.jpg',
            'opening_time' => "07:30:00",
            'closing_time' => "17:00:00",
            'restaurant_category_id' => 5,
            'city_id' => 3168606,
            'zip_code' => '39802-047',
            'street' => 'Av. Dos Legais',
            'neighborhood' => 'Floresta',
            'number' => 1730,
            'code' => mt_rand(1111, 9999),
            'settings' => json_encode([
                'show_on_catalog' => 1,
                'show_products_price' => rand(0, 1)
            ])
        ]);
        DB::table('restaurants')->insert([
            'name' => 'Fogão de casa',
            'description' => "Um dos melhores restaurantes que você vai encontrar na cidade, agora no cardápio digital!",
            'logo' => 'https://thumbs.dreamstime.com/b/logo-do-fog%C3%A3o-modelo-vetor-de-estoque-logotipo-stove-215669989.jpg',
            'opening_time' => "07:30:00",
            'closing_time' => "17:00:00",
            'restaurant_category_id' => 1,
            'city_id' => 3168606,
            'zip_code' => '39802-047',
            'street' => 'Av. Dos Legais',
            'neighborhood' => 'Floresta',
            'number' => 1730,
            'code' => mt_rand(1111, 9999),
            'settings' => json_encode([
                'show_on_catalog' => 1,
                'show_products_price' => rand(0, 1)
            ])
        ]);
        DB::table('restaurants')->insert([
            'name' => 'Bom de garfo',
            'description' => "Um dos melhores restaurantes que você vai encontrar na cidade, agora no cardápio digital!",
            'logo' => 'https://st2.depositphotos.com/3623347/7936/v/600/depositphotos_79364992-stock-illustration-fork-and-knife-icon-with.jpg',
            'opening_time' => "07:30:00",
            'closing_time' => "22:00:00",
            'restaurant_category_id' => 2,
            'city_id' => 3168606,
            'zip_code' => '39802-047',
            'street' => 'Av. Dos Legais',
            'neighborhood' => 'Floresta',
            'number' => 1730,
            'code' => mt_rand(1111, 9999),
            'settings' => json_encode([
                'show_on_catalog' => 1,
                'show_products_price' => rand(0, 1)
            ])
        ]);
    }
}
