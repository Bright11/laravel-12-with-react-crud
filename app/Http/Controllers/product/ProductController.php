<?php

namespace App\Http\Controllers\product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use PhpParser\Node\Stmt\TryCatch;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $product=Product::latest()->get()->map(fn($product)=>[
            'name'=>$product->name,
            'price'=>$product->price,
            'feature_image'=>$product->feature_image,
            'category'=>$product->category->name,
            'created_at'=>$product->created_at->format('d M Y'),
            'id'=>$product->id
        ]);
        return Inertia::render('product/ProductTable',[
            'product'=>$product
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $category=Category::all();
        return Inertia::render('product/ProductForm',[
            'category'=>$category
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
             'name'=>'required',
            'price'=>'required',
            'description'=>'required',
            'category_id'=>'required',
            'feature_image'=>'image|mimes:jpeg,jpg,png,gif'
        ]);
        //
       // dd($request->all());
       try {
        $featureImage=null;
        $featureImage_originalName=null;
        if($request->file('feature_image')){
            $featureImage=$request->file('feature_image');
            $featureImage_originalName=$featureImage->getClientOriginalName();
            $featureImage= $featureImage->store('products','public');
           // $proimg=$request->file('feature_image')->store('products', 'public');

        }
        // dd($request->all());
        // dd($request->name);

       $product=Product::create([
        'name'=>$request->name,
        'price'=>$request->price,
        'description'=>$request->description,
        'category_id'=>$request->category_id,
       'feature_image'=>$featureImage,
       'feature_image_original_name'=>$featureImage_originalName,

       ]);
       //dd($request->all());
       if($product){
        return redirect()->route('product.index')->with('success',"product created");
       }else{
        return redirect()->route('product.index')->with('error',"Error creating product");

       }
//dd($request->all());
       } catch (Exception $e) {
        //throw $th;
        //dd($request->all());
        Log::error('Product creation failed' . $e->getMessage());
       }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
        //dd($product);
        $category=Category::all();
    return Inertia::render('product/ProductForm',[
        'product'=>$product,
        'Isedit'=>true,
        'category'=>$category
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
        if($request->category_id){
            $product->category_id=$request->category_id;
        }

        if($request->file('feature_image')){
            $featureImage=$request->file('feature_image');
            $featureImage_originalName=$featureImage->getClientOriginalName();
            $featureImage= $featureImage->store('products','public');
           // $proimg=$request->file('feature_image')->store('products', 'public');
           $product->feature_image=$featureImage;
           $product->feature_image_original_name=$featureImage_originalName;

        }
        $product->name=$request->name;
        $product->price=$request->price;
        $product->description=$request->description;

        $product->save();
        return redirect()->route('product.index')->with('success',"product updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
