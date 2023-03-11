import { any } from "prop-types";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";

interface Props {
  children: React.ReactNode;
}
interface ISideBar {
  isOpen: boolean;
  handleClose: any;
  setIsOpen: any;
}

export const SidebarContext = createContext<ISideBar>({
  isOpen: false,
  setIsOpen: false,
  handleClose: any,
});
const SidebarProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const memoedValue = useMemo(
    () => ({ isOpen, setIsOpen, handleClose }),
    [isOpen, setIsOpen, handleClose]
  );
  return (
    <SidebarContext.Provider value={memoedValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
