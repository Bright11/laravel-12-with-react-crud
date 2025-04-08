import React from "react";
import FrontendConfig from "@/components/frontendconfig/FrontendConfig";
import { Link } from "@inertiajs/react";
import Blog from "../Blog/Blog";

interface Category{
    id:number,
    name:string,
    created_at:string
}

const CategoryTable = ({...props}:{category:Category[]}) => {
  const {category}=props

  return (
   <FrontendConfig
   navigation={true}
   >
     <div className="overflow-x-auto w-full">
     <Blog/>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th className="py-3 px-4 border-b">ID</th>
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Created At</th>
            <th className="py-3 px-4 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item,index) => (
            <tr key={item.id} className="hover:bg-gray-50">
                 <td className="py-3 px-4 border-b">{item.id}</td>
              <td className="py-3 px-4 border-b">{item.name}</td>
              <td className="py-3 px-4 border-b">
                {item?.created_at}
              </td>
              <td className="py-3 px-4 border-b">
              <Link as="button" className="bg-blue-300 p-2 hover:to-blue-400 cursor-pointer border rounded-lg " href={route('category.show', item.id)}>View</Link>
              </td>

              <td className="py-3 px-4 border-b">
              <Link as="button" className="bg-blue-300 p-2 hover:to-blue-400 cursor-pointer border rounded-lg " href={route('category.edit', item.id)}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </FrontendConfig>
  );
};

export default CategoryTable;
