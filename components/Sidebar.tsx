import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import Cartitem from "./Cartitem";
import { SidebarContext } from "@/contexts/SidebarContext";
import { CartContext } from "@/contexts/CartContext";
import { uuid } from "uuidv4";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, addToCart, clearCart, total, itemAmount } =
    useContext(CartContext);
  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"
        } w-[95vw] h-full bg-white top-0 fixed shadow-2xl md:w-[50vw] xl:max-w-[30vw] duration-700 z-50 px-8 lg:w-[40vw] xl:w-[35vw] `}
    >
      <div className="flex items-center justify-between py-4 border-b ">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ({itemAmount})
        </div>
        <div
          className="cursor-pointer w-8  h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward />
        </div>
      </div>
      <div className="h-[600px] lg:h-[480px] flex flex-col overflow-y-auto scrollbar-hide ">
        {cart.map((item) => {
          return <Cartitem item={item} key={uuid()} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 ">
        <div className=" flex w-full justify-between font-bold">
          <div className="uppercase font-bold">
            <span>Subtotal:</span>
          </div>
           &#8358;{total}
          {/* <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12  flex justify-center items-center text-xl  "
          >
            <FiTrash2 />
          </div> */}
        </div>
        <div className="flex cursor-pointer justify-center items-center border-2  border-black font-semibold p-2">
          VIEW CART
        </div>
        <div className="flex cursor-pointer justify-center items-center border-2 p-2 font-semibold bg-black text-white">
          ORDER VIA WHATSAPP
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
