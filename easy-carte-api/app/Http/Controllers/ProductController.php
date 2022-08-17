<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show($productId)
    {
        return response()->json(Product::find($productId));
    }
}
