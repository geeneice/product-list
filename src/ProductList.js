import React from 'react'
import ProductItem from './ProductItem'

const products = [
    {id: 1, name: "Google pixel 8 pro", price: 999, stock: false },
    {id: 2, name: "PS 5", price: 699, stock: true },
    {id: 3, name: "iphone 16", price: 1099, stock: false },
    {id: 4, name: "Alienware M15", price: 2999, stock: true }
]

const ProductList = () => {
  return (
    <>
    {products.map(product => (<ProductItem product ={product}/>))}
    </>
  )
}

export default ProductList