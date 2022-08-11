<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Restaurant::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Restaurant::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getProducts($id)
    {
        return response()->json(Restaurant::find($id)->products);
    }

    public static function getCityIdByCityUrl($cityUrl)
    {
        $cityId = City::where('city_url', $cityUrl)->first()['id'];

        return $cityId;
    }

    public function getRestaurantsByCity(Request $request, $cityUrl)
    {
        $cityId = self::getCityIdByCityUrl($cityUrl);
        $search = ($request->search !== 'null' && $request->search !== '') ? $request->search : null;
        $categoryId = ($request->category !== 'null' && $request->category !== '') ? $request->category : null;

        $restaurants = Restaurant::where('city_id', $cityId)
            ->where(function ($query) use ($search) {
                if ($search) {
                    $query->where('name', 'like', "%$search%");
                }
            })
            ->where(function ($query) use ($categoryId) {
                if ($categoryId) {
                    $query->where('restaurant_category_id', '=', $categoryId);
                }
            })
            ->get();

        return response()->json($restaurants);
    }
}
