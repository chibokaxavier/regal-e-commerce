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
  const mainId = router.query.id;
  const products = menu.find((item) => {
    return item.id === parseInt(mainId);
  });
  const product = { ...products };
  const id = product.id;
  const image = product.img;
  const title = product.title;
  const price = product.price
  return (
    <>
      <Head>
        <title className="capitalize">Regal/{title}</title>
      </Head>

      <div
        onClick={() => {
          addToCart(products, id, title,image,price);
        }}
      >
        {/* <Image src={image} width={100} height={100} className="relative"/> */}
        <img src={image} alt="" />
      </div>
      <Sidebar />
    </>
  );
};

export default ProductDetails;
