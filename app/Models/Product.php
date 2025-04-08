<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable=[
        'name',
        'price',
        'description',
        'category_id',
        'feature_image',
        'feature_image_original_name'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
