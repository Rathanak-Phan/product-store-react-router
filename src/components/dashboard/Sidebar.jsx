import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col bg-gray-400 h-screen fixed w-80'>
        <div className='px-2 py-5 text-2xl text-center'>Admin</div>

        <Link
          className='px-2 py-5 bg-gray-300 hover:bg-gray-200'
          to="/admin">Overviews</Link>
        <Link 
          to="/admin/products"
          className='px-2 py-5 bg-gray-300 hover:bg-gray-200'>Product</Link>
    </div>
  )
}

export default Sidebar