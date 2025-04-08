import React from "react";
import FrontendConfig from "@/components/frontendconfig/FrontendConfig";
import { Head, Link, usePage } from "@inertiajs/react";
import { CreditCard } from "lucide-react";
import Blog from "../Blog/Blog";

interface Product{
    name:string,
    id:number,
    price:number,
    feature_image:string,
    category:string,
    created_at:string
}

const ProductTable = ({...props}:{product:Product[]}) => {
    const {product} =props
    console.log("pro", product)
  console.log(usePage())
//   const data = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
//     { id: 3, name: "Michael Johnson", email: "michael@example.com", role: "User" },
//   ];

  return (
   <FrontendConfig
   navigation={true}
   >
    <Head
    title="Product display"
    />
    <Blog/>
     <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th className="py-3 px-4 border-b">ID</th>
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Price</th>
            <th className="py-3 px-4 border-b">Category</th>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
                 <td className="py-3 px-4 border-b">{item.name}</td>
                 <td className="py-3 px-4 border-b">{item.price}</td>
                 <td className="py-3 px-4 border-b">
                    <img width={100} height={100} src={`/storage/${item?.feature_image}`} alt="image"/>
                 </td>
                 <td className="py-3 px-4 border-b">{item?.category}</td>
                 <td className="py-3 px-4 border-b">{item?.created_at}</td>
                 <td className="py-3 px-4 border-b">
                    <Link className="cursor-pointer hover:bg-blue-400 p-1.5" as="button" href={route('product.edit', item?.id)}><CreditCard/></Link>
                 </td>
              {/* <td className="py-3 px-4 border-b">{user.id}</td>
              {/* <td className="py-3 px-4 border-b">{user.name}</td>
              <td className="py-3 px-4 border-b">{user.email}</td>
              <td className="py-3 px-4 border-b">{user.role}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </FrontendConfig>
  );
};

export default ProductTable;
