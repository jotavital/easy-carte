<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class OrderProductController extends Controller
{
    public function store(Request $request)
    {
        $orderId = Order::find();
        $orderProduct = new OrderProduct();

        $orderProduct->order_id = $orderId;
        $orderProduct->product_id = $request->product_id;
        $orderProduct->quantity = $request->quantity;

        if ($orderProduct->save()) {
            return response()->json(true, 200);
        } else {
            return response()->json(false, 500);
        }
    }
}
