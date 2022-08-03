<?php

namespace App\Http\Controllers;

use App\Models\State;

class StateController extends Controller
{
    public function index()
    {
        return response()->json(State::all());
    }

    public function getCitiesByState($stateId)
    {
        $state = State::find($stateId);

        return response()->json($state->cities);
    }
}
