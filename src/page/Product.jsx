import React from 'react'
import { Link } from 'react-router-dom'

function Product({products}) {
  return (
    <div>
      <h3 className='text-center text-3xl font-bold my-10'>Product list</h3>

      <div className='grid grid-cols-4 gap-3'>
        {products.map((product) => (
          <div key={product.id} className='p-2 bg-gray-200 rounded-lg'>
            <div className='w-full h-52 flex justify-center'>
              <img className='h-full' src={product.image} alt="" />
            </div>
            <div className='flex flex-col gap-3 mt-3'>
              <div className='flex justify-between items-center'>
                <p>Price: {product.price}</p>
                <p>Price: {product.code}</p>
              </div>
              <p>{product.name}</p>

              <Link 
                to={`/admin/product/${product.code}`} 
                className='w-full bg-green-700 rounded-full py-2 flex justify-center text-gray-100'>Views</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product