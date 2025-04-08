import FrontendConfig from "@/components/frontendconfig/FrontendConfig";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from '@/types';

import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";



export default function Category({...props}) {
    const {category,Isedit}=props
     const {data, setData, post, processing, errors, put, reset}= useForm({
           name: category?.name || "",

       })

    const save=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(Isedit){
            put(route('category.update',category?.id),{
                onSuccess:()=>reset()
            })
        }else{
            post(route('category.store'),{
                onSuccess:()=>reset()
            })
        }

    }
    return (

        <FrontendConfig
        navigation={true}
        >
            <Head
            title="Category"
            />
            <div>
                <form onSubmit={save} className="flex justify-center flex-col mt-10 mb-10 mx-auto [width:50%] gap-1 shadow-2xl p-10 border-r-8  ">

                    <input value={data.name} onChange={(e)=>setData("name",e.target.value)} className="bg-gray-50  p-3 mb-5 outline-0" placeholder="Category name" />
                    {Isedit? (
                        <button className="bg-blue-200 p-0.5 border-0 text-2xl hover:bg-blue-500 cursor-pointer">Edit</button>
                    ):(
                        <button className="bg-blue-200 p-0.5 border-0 text-2xl hover:bg-blue-500 cursor-pointer">Save</button>
                    )}

                </form>
            </div>
        </FrontendConfig>


    );
}
