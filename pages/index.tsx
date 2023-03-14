import Head from "next/head";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";
import Product from "@/components/Product";
import menu from "@/data";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Image from "next/legacy/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Regal</title>
      </Head>
      <div className=" ">
        <div className=" h-[250px] w-[100vw] ml-0 absolute">
<Image src="https://cdn.pixabay.com/photo/2020/12/27/14/37/woman-5864279__340.jpg" height={100} width={100}  layout="fill" objectFit="cover" alt=""/>
        </div>
        <section className="py-16 ml-10">
          <div className="mt-[50px]">
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
