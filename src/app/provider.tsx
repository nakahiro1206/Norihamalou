"use client";

import { useState } from "react";
import { createContext, useContext } from "react";

type MenuProviderProps = {
  isOpen: boolean | null;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuProviderProps>({
  isOpen: false,
  toggleMenu: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const toggleMenu = () => {
    if (isOpen === null) {
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
