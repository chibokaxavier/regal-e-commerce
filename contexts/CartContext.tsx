import { any } from "prop-types";
import React, { useEffect, useState, useContext, createContext,useMemo } from "react";
interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext({ addToCart: any,cart:[] });

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
  const memoedValue = useMemo(
    () => ({ addToCart,cart }),
    [cart,addToCart]
  );
  return (
    <CartContext.Provider value={memoedValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
