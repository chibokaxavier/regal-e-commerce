import { any } from "prop-types";
import React, { useEffect, useState, useContext, createContext } from "react";
interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext({ addToCart: any });

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState([]);
  const addToCart = (products, id) => {
    const newItem = { ...products, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  useEffect(()=>{
    console.log(cart)
  },[addToCart])
 
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
