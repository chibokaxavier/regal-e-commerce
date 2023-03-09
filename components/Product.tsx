import React from "react";
import Link from "next/link";

const Product = ({ products, key }) => {
  const { id, title, img, price, category } = products;
  return (
    <>
      <Link href={"/products/" + id}>
        <div>
          <div className="border-2 border-gray-200 lg:w-[20vw] md:w-[40vw] w-[80vw] h-[300px] mb-4 relative overflow-hidden group transition">
            <div className="w-full h-full flex justify-center items-center ">
              {/* image */}
              <div className="w-[200px]  flex items-center justify-center">
                <img
                  src={img}
                  alt=""
                  srcSet=""
                  className="max-h-[160px] group-hover:scale-110 transition duration-300"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm capitalize text-gray-500 ">
              {category}
            </div>
            <h2 className="font-semibold mb-1">{title}</h2>
            <div className="font-semibold "># {price} </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
