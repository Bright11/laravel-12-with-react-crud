import React from 'react'
import FrontendConfig from "@/components/frontendconfig/FrontendConfig";
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import Blog from '../Blog/Blog';


// Define the Category type
interface Category {
    name: string;
    id: number;
  }

  // Define the Product type for better type safety
  interface Product {
    name: string;
    price: string;
    description: string;
    category_id: string | number;
    feature_image?: File | null;
    id: number;
  }

  // Props for the form
  interface ProductFormProps {
    category: Category[];
    Isedit: boolean;
    product?: Product; // Optional in case it's not passed in create mode
  }


function ProductForm({ category, Isedit,product }: ProductFormProps) {

    if (Isedit && !product) return <div>Loading...</div>;
    const { data, setData, post, processing,put, errors, reset } = useForm({
      name:product?.name || '',
      price:product?.price || '',
      description:product?.description || '',
      category_id: '',
      feature_image: null as File | null,


    });

    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (Isedit && product) {
        put(route("product.update", product.id),{

            onSuccess: () => console.log("form submitted"),
          });
    }else{
        post(route("product.store"), {
            onSuccess: () => console.log("form submitted"),
          });
    }
    };
console.log('product', product)
    return (
      <FrontendConfig navigation={true}>
        <Head title="Category" />
        <div>
          <form
            onSubmit={onsubmit}
            method='post'
            className="flex justify-center flex-col mt-10 mb-10 mx-auto [width:50%] gap-1 shadow-2xl p-10 border-r-8"
            encType='multipart/form-data'
          >
             <Blog/>
            <input
              name="name"
              value={data?.name}
              onChange={(e) => setData('name', e.target.value)}
              type='text'
              className="bg-gray-50 p-3 mb-5 outline-0"
              placeholder="product name"
            />
            <InputError message={errors.name} />

            <input
              name='price'
              value={data?.price}
              onChange={(e) => setData("price", e.target.value)}
              type='number'
              className="bg-gray-50 p-3 mb-5 outline-0"
              placeholder="product price"
            />

            <input
              name='description'
              value={data?.description}
              onChange={(e) => setData("description", e.target.value)}
              type="text"
              className="bg-gray-50 p-3 mb-5 outline-0"
              placeholder="product description"
            />

            <select
              name="category_id"
              onChange={(e) => setData("category_id", e.target.value)}
              className="bg-gray-50 p-3 mb-5 outline-0"
            >
              <option>--Select Category</option>
              {category.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>

            <input
              onChange={(e) => setData('feature_image', e.target.files?.[0] || null)}
              name='feature_image'
              type="file"
              className="bg-gray-50 p-3 mb-5 outline-0"
            />

            <button className="bg-blue-200 p-0.5 border-0 text-2xl hover:bg-blue-500 cursor-pointer">
              {Isedit ? "Edit" : "Save"}
            </button>
          </form>
        </div>
      </FrontendConfig>
    );
  }

export default ProductForm
