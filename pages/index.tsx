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
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Instashop from "@/components/Instashop";
import AOS from "aos";
import "aos/dist/aos.css";
import { uuid } from "uuidv4";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Regal</title>
      </Head>

      <div className="font-serif ">
        <div className="lg:pt-[95px] pt-[56px] relative">
          <Banner />
        </div>
        <Categories />
        <section className="py-16 ">
          <div className="mt-[50px] ml-10" data-aos="zoom-in-down">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm  md:max-w-none md:mx-0 ">
              {menu.map((product) => {
                return <Product products={product} key={uuid()} />;
              })}
            </div>
          </div>
        </section>
        {/* <Instashop/> */}
      </div>
      <Sidebar />
    </>
  );
}
