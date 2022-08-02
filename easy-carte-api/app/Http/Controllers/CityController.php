<?php

namespace App\Http\Controllers;

use App\Models\City;

class CityController extends Controller
{
    public function index()
    {
        return response()->json(City::all());
    }

    public function show($idOrUrl)
    {
        $city = City::where('id', $idOrUrl)->orWhere('city_url', $idOrUrl)->first();

        if (!$city) {
            return response(null, 400);
        }

        return response()->json($city);
    }
}
