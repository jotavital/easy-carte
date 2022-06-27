<?php

namespace App\Http\Controllers;

use App\Models\City;

class CityController extends Controller
{
    public function show($idOrUrl)
    {
        $city = City::where('id', $idOrUrl)->orWhere('city_url', $idOrUrl)->first();

        return response()->json($city);
    }
}
