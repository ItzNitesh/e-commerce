import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : []
  })

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cartItem))
  },[cartItem]);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};