<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->sentence(),
            'price' => random_int(500, 7000),
            'ingredients' => fake()->word . ", " . fake()->word . ", " . fake()->word . ", " . fake()->word . ", " .
                fake()->word . ", " . fake()->word . ", " . fake()->word . ", " . fake()->word . ", " . fake()->word,
            'notes' => fake()->sentence(),
            'main_image' => 'https://via.placeholder.com/500',
            'restaurant_id' => rand(1, 24),
            'product_category_id' => rand(1, env('COUNT_PRODUCT_CATEGORIES_TO_SEED'))
        ];
    }
}
