import React from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { BsTrash } from "react-icons/bs";

const Cartitem = ({ item }) => {
  const { id, title, desc, category, price, img, amount } = item;
  return (
    <>
      <div className="flex max-h-[300px] group mt-4 hover:bg-gray-100 hover:shadow-2xl transition duration-500 p-4">
        <div>
          <img src={img} className="max-h-[150px] max-w-[150px]" alt="" />
        </div>
        <div className="flex relative w-full">
          <div className=" ml-2">
            <div className=" uppercase font-normal text-[18px]">{title}</div>
            <div className="flex gap-x-2 h-[36px]">
              <div className="text-[13px] flex flex-1 max-w-[100px]  opacity-0 h-[30px] border items-center group-hover:opacity-100">
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer px-2">
                  <IoMdRemove />{" "}
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer px-2">
                  <IoMdAdd />
                </div>
              </div>
              <div className="text-[16px] font-semibold"># {price}</div>
              <div className="text-[16px] font-semibold"> {`$ ${item.price * amount}`}</div>
            </div>
          </div>
          <div className="absolute right-0 top-2 group-hover:opacity-100 opacity-0 transition ">
            <BsTrash className="hover:text-red-700 transition cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
