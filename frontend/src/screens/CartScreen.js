import React from 'react'
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartItems);
  return (
    <>
      {
        cart.cartItems.map(item => (
          <div>{item.brand}</div>
        ))
      }
    </>
  )
}

export default CartScreen;