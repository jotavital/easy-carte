<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Restaurant extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $appends = ['logo_url', 'opening_hours', 'is_open', 'formatted_address'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function category()
    {
        return $this->belongsTo(RestaurantCategory::class, 'restaurant_category_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function productCategories()
    {
        return $this->hasMany(ProductCategory::class);
    }

    public function getFormattedAddressAttribute()
    {
        return "$this->street, $this->number, $this->neighborhood - " . $this->city->name . " - " .
            $this->city->state->initials . ", " . $this->zip_code;
    }

    public function getIsOpenAttribute()
    {
        $now = Carbon::now();

        if ($now >= Carbon::parse($this->opening_time) && $now < Carbon::parse($this->closing_time)) {
            return true;
        }

        return false;
    }

    public function getOpeningHoursAttribute()
    {
        $formattedOpeningTime = ($this->opening_time) ? (Carbon::parse($this->opening_time))->format('H:i') : null;
        $formattedClosingTime = ($this->closing_time) ? (Carbon::parse($this->closing_time))->format('H:i') : null;

        if (!$formattedOpeningTime && !$formattedClosingTime) {
            return null;
        }

        return $formattedOpeningTime . " às " . $formattedClosingTime;
    }

    public function getLogoUrlAttribute()
    {
        return "/img/" . $this->logo;
    }
}
