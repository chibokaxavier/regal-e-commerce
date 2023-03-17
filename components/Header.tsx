import { CartContext } from "@/contexts/CartContext";
import { SidebarContext } from "@/contexts/SidebarContext";
import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <>
      <header className="bg-white shadow-md fixed z-30 w-full">
        <div className="flex justify-between items-center h-full px-8 ">
          <Link href="/">
            {" "}
            <div className="lg:p-2 cursor-pointer lg:container flex justify-center items-center p-2">
              <img
                className="lg:h-[75px] lg:w-[150px] h-[40px] w-[80px] "
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/10-3.jpg"
                alt=""
              />
            </div>
          </Link>
          <div className="header">ALL PRODUCTS</div>
          <div className="header">BARGAIN SHOP </div>
          <div className="header">SAHSES X HIDES LAGOS</div>
          <div className="header">KIDS</div>
          <div className="header">ABOUT</div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer flex relative max-w-[50px]"
          >
            {/* <div className=""> CART</div> */}
            <BsBag className="h-7 w-7" />
            <div className="bg-black absolute -right-2 -bottom-2 text-[12px] h-[18px] w-[18px] rounded-full  text-white flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
