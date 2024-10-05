import React from 'react'
import './Product-name.css'

const ProductItem = ({product}) => {
  return (
    
        <>
        <h2 className='Product-name'>{product.name}</h2>
        <p>Price: {product.price}</p>
        {product.stock ? <p>Product in stock</p>: <p className='out-of-stock'>Product out of stock</p>} 
        
        </>
  )
}

export default ProductItem