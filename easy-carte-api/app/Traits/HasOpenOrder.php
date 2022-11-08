<?php

namespace App\Traits;

trait HasOpenOrder
{
    public function openOrder()
    {
        return $this->orders->where('is_open', 1)->first();
    }
}
