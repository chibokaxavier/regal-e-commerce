import React from "react";
import Image from "next/legacy/image";
// import "@/styles/input.css";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className=" bg-slate-600 lg:h-[86vh] lg:w-[100vw]  w-[full] h-[200px] ml-0 ">
          <Image
            src="https://images.pexels.com/photos/3189024/pexels-photo-3189024.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            layout="fill"
            objectFit="cover"
            height={100}
            width={100}
          />
          {/* <img src="https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full'  /> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
