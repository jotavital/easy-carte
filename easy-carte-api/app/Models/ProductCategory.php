<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductCategory extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $appends = ['products_count'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function getProductsCountAttribute()
    {
        return count($this->products);
    }
}
