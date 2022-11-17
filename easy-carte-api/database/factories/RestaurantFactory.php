<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RestaurantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName(),
            'description' => $this->faker->text(150),
            'logo' => 'default_logo.png',
            'opening_time' => fake()->time('H:i'),
            'closing_time' => fake()->time('H:i'),
            'restaurant_category_id' => rand(1, 5),
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
        ];
    }
}
