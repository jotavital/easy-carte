<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
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

    public function show($id)
    {
        try {
            $order = Order::where("id", $id)->with('orderProducts.product')->first();

            return response()->json($order, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }

    public function unpaidOrders()
    {
        try {
            $orders = Order::where("user_id", Auth::user()->id)
                ->with('orderProducts.product')
                ->where('is_paid', 0)
                ->where('is_open', 0)
                ->get();

            return response()->json($orders, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }

    public function finishedOrders()
    {
        try {
            $orders = Order::where("user_id", Auth::user()->id)
                ->with('orderProducts.product')->where('is_paid', 1)->get();

            return response()->json($orders, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }

    public function close($orderId, Request $request)
    {
        try {
            $order = Order::find($orderId);
            $order->is_open = 0;
            $order->table = $request->table;
            $order->status = 'sent_to_kitchen';

            if ($order->save()) {
                return response()->json(true, 200);
            }
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }
}
