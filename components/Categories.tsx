
import AOS from "aos";
import "aos/dist/aos.css";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";

const Categories = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="" data-aos="fade-left">
        <div className="font-semibold   text-[20px] lg:text-[30px] pt-[50px] flex items-center justify-center">
          {" "}
          CATEGORIES
        </div>
        <div className="text-gray-400 flex items-center justify-center py-4">
          Checkout the products in our most popular categories.
        </div>

        <div className="lg:flex  px-10  lg:justify-around w-full pt-10">
          <div className="h-[600px]   lg:w-[384px] cursor-pointer pb-10 relative">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/10-3.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute text-white bottom-[20px] h-[40px]  bg-gray-600 w-full ">
              <span className="flex items-center justify-center pt-2">
                CLOTHES
              </span>
            </div>
          </div>

          <div className="h-[600px] lg:w-[384px] cursor-pointer pb-10 relative">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/10-3.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute text-white bottom-[20px] h-[40px]  bg-gray-600 w-full ">
              <span className="flex items-center justify-center pt-2">
                FOOT-WEARS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
