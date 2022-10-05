<?php

namespace Database\Seeders;

use App\Models\ProductImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= env('COUNT_PRODUCTS_TO_SEED'); $i++) {
            for ($j = 1; $j <= 3; $j++) {
                ProductImage::factory(1)->create([
                    'product_id' => $i
                ]);
            }
        }
    }
}
