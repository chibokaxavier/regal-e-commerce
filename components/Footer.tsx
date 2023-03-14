import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/90 w-full p-4 text-white ">
      <div className="flex justify-between h-[300px] mx-[100px]">
        <div className="text-white ">
          <img
            className="h-[200px] w-[200px]"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/10-3.jpg"
            alt=""
          />
          <p className="py-4">Your best choice for your wears.</p>
        </div>
        <div>
          <div className="text-[20px] mb-10 font-semibold cursor-pointer">
            SUPPORT
          </div>
          <div className="mb-4 cursor-pointer hover:text-gray-600 transition">
            FAQS
          </div>
          <div className="cursor-pointer hover:text-gray-600 transition">
            Contact Us
          </div>
        </div>
        <div>
          <div>COMPANY</div>
          <div>About Us</div>
          <div> Privacy Policy</div>
          <div> Terms & Conditions</div>
          <div>Refunds & Return Policy</div>
        </div>
        <div>
          <div>CONTACT</div>
          <div>+234 703 916 3331</div>
          <div>chibokaxavier@gmail.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
