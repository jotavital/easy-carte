<?php

namespace App\Http\Controllers;

use App\Models\RestaurantCategory;
use Illuminate\Http\Request;

class RestaurantCategoryController extends Controller
{
    public function index()
    {
        return response()->json(RestaurantCategory::all());
    }
}
