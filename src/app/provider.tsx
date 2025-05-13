"use client";

import { useState } from "react";
import { createContext, useContext } from "react";

type MenuProviderProps = {
  isOpen: boolean | null;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuProviderProps>({
  isOpen: false,
  toggleMenu: () => { },
});

export const useMenuContext = () => useContext(MenuContext);

type HeroAreaProviderProps = {
  inView: boolean;
  setInView: (inView: boolean) => void;
};

const HeroAreaContext = createContext<HeroAreaProviderProps>({
  inView: true,
  setInView: () => { },
});

export const useHeroAreaContext = () => useContext(HeroAreaContext);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [inView, setInView] = useState<boolean>(true);

  const toggleMenu = () => {
    if (isOpen === null) {
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      <HeroAreaContext.Provider value={{ inView, setInView }}>
        {children}
      </HeroAreaContext.Provider>
    </MenuContext.Provider>
  );
};
