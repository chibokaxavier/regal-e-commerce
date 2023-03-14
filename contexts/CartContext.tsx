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
  addToCart(products:{}, id:number):[],
  cart: [],
  removeItem(id:number): [],
  clearCart():  [],
  increaseItem(id:number):  [],
  decreaseItem(id:number):  [],
  itemAmount:number,
  total:number
}

export const CartContext = createContext({
  addToCart:(products:{},id:number)=> {[]},
  cart: [],
  removeItem:(id)=>{[]},
  clearCart:(id)=>{[]},
  increaseItem:(id)=>{[]},
  decreaseItem:(id)=>{[]},
  itemAmount: null,
  total:null
});

const CartProvider = ({ children }: Props) => {
  const initialRender = useRef(true);
  const localStoragekey = "cart";
  const [cart, setCart] = useState([]);
  const [itemAmount,setItemAmount] = useState(0)
  const [total,setTotal] = useState(0)


  useEffect(()=>{
    if (cart) {
      const total = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.price *currentItem.amount
      },0)
      setTotal(total)
    }
      },[cart])

  useEffect(()=>{
if (cart) {
  const amount = cart.reduce((accumulator,currentItem)=>{
    return accumulator + currentItem.amount
  },0)
  setItemAmount(amount)
}
  },[cart])


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
      itemAmount,
      total
    }),
    [cart, addToCart, removeItem, clearCart, increaseItem, decreaseItem,itemAmount,total]
  );
  return (
    <CartContext.Provider value={memoedValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
