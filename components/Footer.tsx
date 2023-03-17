import React from "react";
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black/90 w-full p-4 pt-10  text-white ">
      <div className="lg:flex lg:justify-between  h-fit lg:mx-[100px] ">
        <div className="py-4">
          <img
            className="lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/10-3.jpg"
            alt=""
          />
          <p className="py-4">Your best choice for your wears.</p>
          <div className="flex">
            <div className="cursor-pointer mx-4">
              <a href="https://www.instagram.com/regalbysylvia/" target='_blank'>  <BsInstagram /> </a>
            
            </div>
            <div className="cursor-pointer mx-4">
              <BsTwitter />
            </div>
            <div className="cursor-pointer mx-4">
              <BsFacebook />
            </div>
            <div className="cursor-pointer mx-4">
              <BsWhatsapp/>
            </div>
          </div>
        </div>

        <div className="py-4">
          <div className="text-[20px] lg:mb-10 mb-6 font-semibold cursor-pointer">
            SUPPORT
          </div>
          <div className="lg:mb-4 mb-2 cursor-pointer hover:text-gray-600 transition">
            FAQS
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            Contact Us
          </div>
        </div>

        <div className="py-4">
          <div className="text-[20px] lg:mb-10 mb-6 font-semibold cursor-pointer">
            COMPANY
          </div>
          <div className="lg:mb-4 mb-2 cursor-pointer hover:text-gray-600 transition">
            About Us
          </div>
          <div className="lg:mb-4 mb-2 cursor-pointer hover:text-gray-600 transition">
            {" "}
            Privacy Policy
          </div>
          <div className="lg:mb-4 mb-2 cursor-pointer hover:text-gray-600 transition">
            {" "}
            Terms & Conditions
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            Refunds & Return Policy
          </div>
        </div>

        <div className="py-4">
          <div className="text-[20px] lg:mb-10 mb-6 font-semibold cursor-pointer">
            CONTACT
          </div>
          <div className="lg:mb-4 mb-2 cursor-pointer hover:text-gray-600 transition">
            +234 703 916 3331
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            chibokaxavier@gmail.com
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center p-6 text-sm">
        <div className="pr-10">Copyright <span>&#169;</span> 2023 Regal</div>
      </div>
    </footer>
  );
};

export default Footer;
