<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $appends = ['formatted_price'];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function getFormattedPriceAttribute()
    {
        return formatCurrencyToReal($this->price);
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }
}
