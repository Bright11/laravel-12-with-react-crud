
import { Link } from '@inertiajs/react'
import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='flex justify-between bg-amber-700 p-1.5 '>
     
      <div className='[width:10%] bg-red-50'>Chika Nwazuo</div>
      <ul className='bg-blue-300 justify-between flex p-0.5 [width:80%]'>
      <li><Link href='/'>Home</Link></li>
        <li><Link href="/product/create">Add Product</Link></li>
        <li><Link href='/category/create'>Create Cetegory</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
