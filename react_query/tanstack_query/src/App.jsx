import React, { useState } from 'react'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import { AddProduct } from './components/AddProduct';

export default function App() {
  const [viewedProducts, setViewedProducts] = useState([]);
const handleProductClick = (productId) => {
    if (!viewedProducts.includes(productId)) {
      setViewedProducts([...viewedProducts, productId]);
    }
  };

  return (
    <div className='flex m-2'>
         <AddProduct />
    <ProductsList onProductClick={handleProductClick} />
    <ProductDetails id={viewedProducts[viewedProducts.length - 1]} />
 
    </div>
  )
}


 