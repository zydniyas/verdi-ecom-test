<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ImportProducts extends Command
{
    protected $signature = 'import:products';
    protected $description = 'Import products from FakeStore API';

    public function handle()
    {
        $this->info('Starting product import...');

        try {
            $response = Http::withoutVerifying()->get('https://fakestoreapi.com/products');


            if ($response->successful()) {
                $products = $response->json();

                foreach ($products as $productData) {
                    Product::updateOrCreate(
                        ['fake_store_id' => $productData['id']],
                        [
                            'title' => $productData['title'],
                            'price' => $productData['price'],
                            'description' => $productData['description'],
                            'category' => $productData['category'],
                            'image' => $productData['image'],
                            'rating' => $productData['rating'],
                        ]
                    );
                }

                $this->info('Products imported successfully!');
            } else {
                $this->error('Failed to fetch products from API');
            }
        } catch (\Exception $e) {
            $this->error('Error importing products: ' . $e->getMessage());
        }
    }
}
