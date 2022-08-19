<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show(Request $request, $productId)
    {
        if ($request->query('withimages') === "1") {
            return response()->json(Product::with('images')->find($productId));
        }

        return response()->json(Product::find($productId));
    }
}
