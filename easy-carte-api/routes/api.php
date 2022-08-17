<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RestaurantCategoriesController;
use App\Http\Controllers\RestaurantCategoryController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(
    function () {
        Route::resource('users', UserController::class)->except(['store']);
    }
);

Route::post('/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout']);
Route::get('/auth/check', [UserController::class, 'checkIfUserAuthenticated']);

// !! user routes
Route::post('/users', [UserController::class, 'store']);

// !! restaurant routes
Route::resource('restaurants', RestaurantController::class);
Route::get('cities/{cityUrl}/restaurants', [RestaurantController::class, 'getRestaurantsByCity']);
Route::prefix('restaurants')->group(
    function () {
        Route::get('/{id}/products', [RestaurantController::class, 'getProducts']);
        Route::get('/{id}/product-categories', [RestaurantController::class, 'getProductCategories']);
    }
);

// !! product routes
Route::resource('products', ProductController::class);

// !! restaurant categories routes
Route::resource('/restaurant-categories', RestaurantCategoryController::class);

// !! city routes
Route::get('/cities', [CityController::class, 'index']);
Route::get('/cities/{idOrUrl}', [CityController::class, 'show']);

// !! state routes
Route::get('/states', [StateController::class, 'index']);
Route::get('/states/{stateId}/cities', [StateController::class, 'getCitiesByState']);
