import React, { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";

const Product = ({ products, key }) => {
  const { id, title, img, price, category, desc } = products;
  const {addToCart}= useContext(CartContext)
  return (
    <>
      <Link href={"/products/" + id }>
        <div>
          <div className="border-2 border-gray-200 lg:w-[20vw] md:w-[40vw] w-[80vw] h-[300px] mb-4 relative overflow-hidden group transition">
            <div className="w-full h-full flex justify-center items-center ">
              {/* image */}
              <div className="w-full  flex items-center justify-center">
                <img
                  src={img}
                  alt=""
                  srcSet=""
                  className=" w-full h-[300px] group-hover:scale-110  transition duration-300"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm capitalize text-gray-500 ">
              {category}
            </div>
            <h2 className="font-semibold capitalize text-[18px]">{title}</h2>
            <h1></h1>
            <div className="font-semibold text-gray-500" > &#8358; {price} </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
