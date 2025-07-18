<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'price',
        'description',
        'category',
        'image',
        'rating',
        'fake_store_id'
    ];

    protected $casts = [
        'rating' => 'array',
        'price' => 'decimal:2'
    ];
}
