<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Product;
use App\Models\ProductCategory;
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Restaurant::with('category')->find($id));
    }

    public function getProducts(Request $request, $id)
    {
        $categoryId = ($request->category !== 'null' && $request->category !== '') ? $request->category : null;

        if ($categoryId) {
            return response()->json(
                ProductCategory::find($categoryId)->products
                    ->where('restaurant_id', $request->id)
                    ->values()
            );
        }

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
            ->where('settings->show_on_catalog', 1)
            ->get();

        return response()->json($restaurants);
    }

    public function getProductCategories($id)
    {
        $categories = Restaurant::find($id)->productCategories->where('products_count', '>', 0)->values();

        return response()->json($categories);
    }

    public function checkRestaurantCode($code)
    {
        $restaurant = Restaurant::where('code', $code)
            ->first('id');

        if (!$restaurant) {
            return response()->json(false);
        }

        return response()->json(['id' => $restaurant->id]);
    }
}
