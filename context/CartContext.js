"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [shippingAddress, setShippingAddress] = useState({});

  return (
    <CartContext.Provider value={{ shippingAddress, setShippingAddress }}>
      {children}
    </CartContext.Provider>
  );
}