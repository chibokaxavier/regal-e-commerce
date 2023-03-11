import { SidebarContext } from "@/contexts/SidebarContext";
import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <>
      <header className="bg-white shadow-2xl z-50">
        <div>Header</div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer"
        >
          <BsBag />
        </div>
      </header>
    </>
  );
};

export default Header;
