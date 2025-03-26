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
import Image from "next/image";
import Link from "next/link";
import { css } from "@panda/css";
import {
  menuItemStyles,
  menuItemFrameStyles,
  menuWrapperStyles,
} from "./Header.recipe";

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
          <span>MENU</span>
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

const MenuArea: FC<{ isOpen: boolean | null; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
  const menuWrapperClass = menuWrapperStyles({
    state: isOpen ? "open" : "closed",
  });
  switch (isOpen) {
    default:
      return exhaustiveMatchingGuard(isOpen);
    case null:
      return null;
    case true:
    case false:
      return (
        <div className={menuWrapperClass}>
          <div className={css(menuItemFrameStyles, { paddingTop: "4" })}>
            <Link
              href="/general-info"
              onClick={toggleMenu}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "1st",
              })}
            >
              GENERAL INFO
            </Link>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "2nd",
              })}
            >
              FOOD MENU
            </div>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "3rd",
              })}
            >
              WHAT IS NORIHAMA-LOU?
            </div>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "4th",
              })}
            >
              制作秘話
            </div>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "5th",
              })}
            >
              BONUS TIPS
            </div>
          </div>
        </div>
      );
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
      <div className="w-full h-[calc(5lvh)] fixed top-0 bg-gradient-to-r to-white via-[rgba(208,33,26,255)] from-[rgba(208,33,26,255)]">
        <div className="flex h-full justify-between gap-2 items-center px-2">
          <p className="text-[rgba(246,230,208,255)] text-3xl">{"乘濵楼"}</p>
          {/* <span className="text-white font-extrabold text-xl">
            <Image
              className="h-[calc(5lvh)] w-[calc(5lvh)]"
              src="/icon.png"
              width={500}
              height={500}
              alt="Norihama-lou icon"
            />
          </span> */}
          <MenuTrigger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <MenuArea isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* <UseAnimations animation={Menu2} size={20} strokeColor="#000" />
      <h1>Mapo Tofu</h1> */}
    </div>
  );
};
