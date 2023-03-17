import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/router";
import menu from "@/data";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();
  const mainId: any = router.query.id;
  const products = menu.find((item) => {
    return item.id === parseInt(mainId);
  });
  const product = { ...products };
  const id = product.id;
  const image = product.img;
  const title = product.title;
  const price = product.price;
  const desc = product.desc;
  return (
    <>
      <Head>
        <title className="capitalize">Regal/{title}</title>
      </Head>
      <div className="h-screen   lg:pb-32 pb-12 pt-[50px] flex items-center justify-center px-10 font-serif">
        <div className="flex flex-col  lg:flex-row items-center justify-between pt-[100px] lg:pt-[180px]">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 h-[500px] ">
            <img src={image} alt="" className="max-w-[200px] h-full lg:max-w-sm" />
          </div>

          <div className="flex-col flex h-[500px] lg:block  justify-center items-center space-y-8 lg:text-left lg:ml-[200px] lg:pt-0">
            <div>
            <h1 className="text-[26px] font-light  max-w-[450px] uppercase">
              {title}
            </h1>
            </div>
          
            <div className="text-xl font-medium  mb-6">
               &#8358; {price}
            </div>
            <p className="font-serif">{desc}</p>
            <div className="p-4 text-green-500 border-2 w-[250px] flex items-center justify-center text-sm cursor-pointer">ORDER VIA WHATSAPP</div>
            <div className="">
              <button
                onClick={() => {
                  addToCart(products, id);
                }}
                className="p-4 w-[250px] bg-black text-white font-semibold"
              >
                {" "}
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <Sidebar />
    </>
  );
};

export default ProductDetails;
