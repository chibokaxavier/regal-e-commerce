import React from "react";
import Image from "next/legacy/image";
// import "@/styles/input.css";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className=" bg-slate-600 lg:h-[86vh] lg:w-[100vw]  w-[100vw] h-[200px] ml-0 bg-image">
          {/* <Image
            src="https://images.pexels.com/photos/3189024/pexels-photo-3189024.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            layout="fill"
            objectFit="cover"
            height={100}
            width={100}
          /> */}
          <style jsx>{`
            .bg-image {
              background-image: url(../images/model-image.jpg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: top;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Banner;
