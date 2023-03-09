import Head from "next/head";
import Image from "next/image";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";
// import { ProductContext } from "@/contexts/ProductContext";
import Product from "@/components/Product";
import menu from "@/data";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  console.log(menu)
  // const { products } = useContext(ProductContext);
  // const filteredProducts = products.filter((item) => {
  //   return item.category.name === "Clothes";
  // });
  return (
    <>
      <Head>
        <title>Regal</title>
      </Head>

      <div className="ml-10">
        <section className="py-16">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm  md:max-w-none md:mx-0 ">
              {menu.map((product) => {
                return <Product products={product} key={product.id} />;
              })}
            </div>
          </div>
        </section>
      </div>
      <Sidebar/>
    </>
  );
}
