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
      <div className="h-screen lg:pt-[100px]  lg:pb-32 pb-12 pt-[50px] flex items-center justify-center px-10">
        <div className="flex flex-col  lg:flex-row items-center justify-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={image} alt="" className="max-w-[200px] lg:max-w-sm" />
          </div>

          <div className="flex-col flex items-center justify-center  lg:text-left lg:ml-10">
            <h1 className="text-[26px] font-medium  mb-2  max-w-[450px] uppercase">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium  mb-6">
              # {price}
            </div>
            <p>{desc}</p>
            <div className="pt-7">
              <button
                onClick={() => {
                  addToCart(products, id);
                }}
                className="p-4 bg-black text-white font-semibold"
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
