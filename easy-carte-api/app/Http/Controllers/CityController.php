<?php

namespace App\Http\Controllers;

use App\Models\City;

class CityController extends Controller
{
    public function show($id)
    {
        $city = City::find($id)->first();

        return response()->json($city);
    }
}
