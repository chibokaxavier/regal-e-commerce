import { any } from "prop-types";
import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useMemo,
  useRef,
} from "react";
interface Props {
  children: React.ReactNode;
}

interface IContext {
  addToCart:(products:{}, id:number) =>[],
  cart: [],
  removeItem(id:number): [],
  clearCart():  [],
  increaseItem(id:number):  [],
  decreaseItem(id:number):  [],
}

import menu from "@/data";

export const CartContext = createContext<IContext>({
  addToCart:()=>[],
  cart: [],
  removeItem:()=>[],
  clearCart:()=>[],
  increaseItem:()=>[],
  decreaseItem:()=>[],
});

const CartProvider = ({ children }: Props) => {
  const initialRender = useRef(true);
  const localStoragekey = "cart";
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(localStoragekey))) {
      const storedCartItems = JSON.parse(localStorage.getItem(localStoragekey));
      setCart([...cart, ...storedCartItems]);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    window.localStorage.setItem(localStoragekey, JSON.stringify(cart));
  }, [cart]);
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
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const increaseItem = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };
  const decreaseItem = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeItem(id);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  const memoedValue = useMemo(
    () => ({
      addToCart,
      cart,
      removeItem,
      clearCart,
      increaseItem,
      decreaseItem,
    }),
    [cart, addToCart, removeItem, clearCart, increaseItem, decreaseItem]
  );
  return (
    <CartContext.Provider value={memoedValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
