"use client";
import React, { FC, useRef, useState, useEffect } from "react";
// const ICON = require("./assets/lock.json");
import UseAnimations from "react-useanimations";
import Menu2 from "react-useanimations/lib/menu";
import Lottie, { LottieRef } from "lottie-react";
import Menu from "../menu.json";
import Close from "../close.json";
import Crown from "../../assets/lewtedlh.json";
import { Player } from "@lordicon/react";

type Props = {};

// export default function PlayOnce() {
//   const playerRef = useRef<Player>(null);

//   useEffect(() => {
//     playerRef.current?.playFromBeginning();
//   }, []);

//   return <Player ref={playerRef} icon={ICON} />;
// }

export const Header: FC<Props> = (props) => {
  const lottieRef = useRef(null) as LottieRef;
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  const pause = () => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header>
      <div className="w-full h-[calc(5lvh)] fixed top-0 bg-gradient-to-r from-red-500 to-white rounded-lg">
        <div className="flex h-full justify-between gap-2 items-center px-2">
          <span className="text-white font-extrabold text-xl">
            Norihama-Lou
          </span>

          {isMenuOpen ? (
            <button className="flex gap-2" onClick={closeMenu}>
              <span>Close</span>
              {/* <Player ref={playerRef} icon={Crown} /> */}
              <Lottie
                lottieRef={lottieRef}
                animationData={Close}
                loop={0}
                className="w-6 h-6"
              />
            </button>
          ) : (
            <button className="flex gap-2" onClick={openMenu}>
              <span>Menu</span>
              <Lottie
                lottieRef={lottieRef}
                animationData={Menu}
                loop={true}
                className="w-6 h-6"
              />
            </button>
          )}
        </div>
      </div>

      {/* <UseAnimations animation={Menu2} size={20} strokeColor="#000" />
      <h1>Mapo Tofu</h1> */}
    </header>
  );
};
