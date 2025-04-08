<?php

namespace App\Http\Controllers\product;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $category=Category::latest()->get()->map(fn($category)=>[
            'name'=>$category->name,
            'id'=>$category->id,
            'created_at'=>$category->created_at->format('d M Y')
        ]);
        return Inertia::render('Category/CategoryTable',[
            'category'=>$category
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Category/Category');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
       $request->validate([
        'name'=>'required'
       ]);
       try {
       $category=Category::create([
        'name'=>$request->name
       ]);
       if($category){
        return redirect()->route('category.index')->with('success','Category created');
       }else{
        return redirect()->route('category.create')->with('error','Category creation failed');

       }
    } catch (Exception $e) {
        //throw $th;
        //dd($request->all());
        Log::error('Product creation failed' . $e->getMessage());
       }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //


       return Inertia::render('Category/ViewCategory',[
       // 'category'=>$category->name
        'category'=>[
            'name'=>$category->name,
            'id'=>$category->id,
            'created_at'=>$category->created_at->format('d M Y')
        ],
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
        return Inertia::render('Category/Category',[
            'category'=>$category,
            'Isedit'=>true

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
       if($category){
        $category->name=$request->name;
       }
       $category->save();
       return redirect()->route('category.index')->with('success','Category updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
