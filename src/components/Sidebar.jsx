import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col bg-gray-400 h-screen'>
        <div className='px-2 py-5 text-2xl text-center'>Admin</div>

        <div className='px-2 py-5 bg-gray-300'>
            <Link to="/admin">Overviews</Link>
        </div>
        <div className='px-2 py-5 bg-gray-300'>
            <Link to="/admin/products">Product</Link>
        </div>
    </div>
  )
}

export default Sidebar