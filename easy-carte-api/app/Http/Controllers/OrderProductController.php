<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderProductController extends Controller
{
    public function store(Request $request)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(false, 401);
        }

        $order = $user->openOrder();
        $orderProduct = new OrderProduct();

        try {
            if (!$order) {
                $order = new Order();
                $order->user_id = Auth::user()->id;
                $order->hash = time();
                $order->amount = Product::find($request->product_id)->first()->price * $request->quantity;

                $order->save();
            }

            $orderProduct->order_id = $order->id;
            $orderProduct->product_id = $request->product_id;
            $orderProduct->quantity = $request->quantity;

            if ($orderProduct->save()) {
                return response()->json(true);
            }
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }
}
