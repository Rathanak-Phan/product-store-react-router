import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../../data/products';

function ProductDetails() {
  const { id } = useParams();

  const productDetails = products.find((product) => product.code == id);

  if (!productDetails){
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <h2>Product not found</h2>
      </div>
    )
  }

  if (productDetails) {
    return (
      <div>
        <h2>ProductDetails</h2>

        <div className='flex'>
          {/* image */}
          <div className='w-1/2'>
            <img src={productDetails.image} alt="" />
          </div>

          {/* Description */}
          <div>
            <h3>{productDetails.name}</h3>
            <p>{productDetails.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails