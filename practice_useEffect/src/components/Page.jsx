import React, { useContext, useEffect, experimental_useEffectEvent as useEffectEvent } from 'react'
import logVisit from '../utils/logVisit';
import ShoppingCartContext from '../contexts/shoppingCartContext';

export default function Page({url,onPageChange,onAddItems}) {
  const items = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

const onVisit =useEffectEvent((url)=>{
  logVisit(url,numberOfItems);
})

  useEffect(()=>{

    onVisit(url);
  },[url])
  return (
    <div>
      <div>
        <div>This is a Home Page</div>

      <button onClick={onPageChange}>ChangePage</button>
      <button onClick={onAddItems}>Add Items</button>
      </div>
      <div>
        Total Items in the Cart {numberOfItems}
      </div>
    </div>
  )
}
