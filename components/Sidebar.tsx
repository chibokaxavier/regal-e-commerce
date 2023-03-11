import React, { useContext } from "react";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import Cartitem from "./Cartitem";
import { SidebarContext } from "@/contexts/SidebarContext";
import { CartContext } from "@/contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart} = useContext(CartContext)
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full bg-white top-0 fixed shadow-2xl md:w-[35vw] xl:max-w-[30vw] duration-300 z-30 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div
          className="cursor-pointer w-8  h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward />
        </div>
      </div>
      <div>
        {cart.map((item)=>{
          return <Cartitem item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
};

export default Sidebar;
