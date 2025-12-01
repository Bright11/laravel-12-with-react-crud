<?php

namespace App\Providers\count;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Schema;

class CountProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
        // View::composer('*', function($view){
        //     $view->with('count', Category::count());
        // });

        Inertia::share([
            'count' => Schema::hasTable('categories') ? Category::count() : 0,
        ]);

        Inertia::share([
            'countpro' => Schema::hasTable('products') ? Product::count() : 0,
        ]);
    }
}
