<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function store()
    {
        $order = new Order();
        $order->user_id = Auth::user()->id;
        $order->hash = time() . $order->user_id;

        try {
            if ($order->save()) {
                return response()->json(true);
            }
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }

    public function index()
    {
        try {
            $user = Auth::user();
            $openOrder = $user->openOrder();
            $orderProducts = [];

            if ($openOrder) {
                $orderProducts = $user->openOrder()->orderProducts()->with('product', 'order')->get();
            }

            return response()->json($orderProducts, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }

    public function unpaidOrders()
    {
        try {
            $orders = Auth::user()->orders->where('is_paid', 0)->values();

            return response()->json($orders, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }

    public function finishedOrders()
    {
        try {
            $orders = Auth::user()->orders->where('is_paid', 1)->values();

            return response()->json($orders, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }

    public function close($orderId)
    {
        try {
            $order = Order::find($orderId);
            $order->is_open = 0;

            if ($order->save()) {
                return response()->json(true, 200);
            }
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }
}
