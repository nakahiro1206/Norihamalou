"use client";
import React, { FC, useRef, useState, useEffect } from "react";
// const ICON = require("./assets/lock.json");
import UseAnimations from "react-useanimations";
import Menu2 from "react-useanimations/lib/menu";
import Lottie, { LottieRef } from "lottie-react";
import Menu from "@/icons/menu.json";
import Close from "@/icons/close.json";
import Crown from "@/icons/lewtedlh.json";
import { Player } from "@lordicon/react";
import { useMenuContext } from "@/app/provider";
import { exhaustiveMatchingGuard } from "@/types/guard";
import { cn } from "@/lib/utils";

type Props = {};

// export default function PlayOnce() {
//   const playerRef = useRef<Player>(null);

//   useEffect(() => {
//     playerRef.current?.playFromBeginning();
//   }, []);

//   return <Player ref={playerRef} icon={ICON} />;
// }
//

const MenuTrigger: FC<{ isOpen: boolean | null; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
  const lottieRef = useRef(null) as LottieRef;
  const pause = () => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  };

  switch (isOpen) {
    case false:
      return (
        <button className="flex gap-2" onClick={toggleMenu}>
          <span>Menu</span>
          <Lottie
            lottieRef={lottieRef}
            animationData={Menu}
            loop={true}
            className="w-6 h-6"
          />
        </button>
      );
    case null:
      return (
        <button className="flex gap-2" onClick={toggleMenu}>
          <span>Menu</span>
          <Lottie
            lottieRef={lottieRef}
            animationData={Menu}
            loop={true}
            className="w-6 h-6"
          />
        </button>
      );
    case true:
      return (
        <button className="flex gap-2" onClick={toggleMenu}>
          <span>Close</span>
          {/* <Player ref={playerRef} icon={Crown} /> */}
          <Lottie
            lottieRef={lottieRef}
            animationData={Close}
            loop={0}
            className="w-6 h-6"
          />
        </button>
      );
    default:
      return exhaustiveMatchingGuard(isOpen);
  }
};

const MenuArea: FC<{ isOpen: boolean | null }> = ({ isOpen }) => {
  const baseClasses = "w-full fixed top-[calc(5lvh)] rounded-b-lg bg-white";
  switch (isOpen) {
    case null:
      return null;
    case true:
      return (
        <div className={cn(baseClasses, "animate-expand-down")}>
          Collapsible Menu here
        </div>
      );
    case false:
      return (
        <div className={cn(baseClasses, "animate-collapse")}>
          Collapsible Menu here
        </div>
      );
    default:
      return exhaustiveMatchingGuard(isOpen);
  }
};

export const Header: FC<Props> = (props) => {
  const { isOpen, toggleMenu } = useMenuContext();

  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div className="w-full h-[calc(5lvh)]">
      <div className="w-full h-[calc(5lvh)] fixed top-0 bg-gradient-to-r from-red-500 to-white">
        <div className="flex h-full justify-between gap-2 items-center px-2">
          <span className="text-white font-extrabold text-xl">
            Norihama-Lou
          </span>
          <MenuTrigger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <MenuArea isOpen={isOpen} />
      </div>

      {/* <UseAnimations animation={Menu2} size={20} strokeColor="#000" />
      <h1>Mapo Tofu</h1> */}
    </div>
  );
};
