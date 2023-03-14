import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { CartContext } from "@/contexts/CartContext";

const Cartitem = ({ item }) => {
  const { id, title, desc, category, price, img, amount } = item;
  const {removeItem,increaseItem,decreaseItem} = useContext(CartContext)
  return (
    <>
      <div className="flex max-h-[300px] w-full group mt-4  border-gray-300 border-b transition duration-500 p-4 lg:px-6">
        <div>
          <img src={img} className="max-h-[150px] max-w-[150px]" alt="" />
        </div>
        <div className="flex relative w-full">
          <div className=" ml-2">
            <div className=" uppercase font-normal lg:text-[15px] text-[10px]">
              {title}
            </div>
            <div className="lg:flex h-[36px] lg:mt-12 mt-4 ">
              <div className="text-[13px] flex flex-1 max-w-[100px] lg:mt-1  h-[25px] border items-center ">
                <div  onClick={()=>{decreaseItem(id)}} className="flex-1 h-full flex justify-center items-center cursor-pointer px-2">
                  <IoMdRemove />{" "}
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                <div onClick={()=>{increaseItem(id)}} className="flex-1 h-full flex justify-center items-center cursor-pointer px-2">
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex lg:block lg:mt-0 mt-4 justify-between">
                <div className="text-[13px] font-semibold lg:mt-2 lg:flex lg:items-center lg:justify-center text-gray-500 ml-2">
                  # {price}
                </div>
                <div className="text-[13px] w-[10%] font-semibold pr-4 lg:absolute lg:right-0 lg:bottom-2 lg:pl-0">
                  #{`${item.price * amount}`}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1 lg:group-hover:opacity-100 lg:opacity-0 transition ">
            <BsTrash onClick={()=>removeItem(id)} className="hover:text-red-700 transition cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
