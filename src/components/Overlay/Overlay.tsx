"use client";
import { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { overlayStyles } from "./Overlay.recipe";

export const Overlay: FC = () => {
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<"enter" | "leave">("enter");

  const classes = overlayStyles({ mode: mode });

  if (!visible) return null;

  return (
    <div className={classes.background}>
      <Image
        onLoad={() => {
          const timer = setTimeout(() => {
            setMode("leave");
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }, 700);

          return () => clearTimeout(timer);
        }}
        className={classes.image}
        src="/icon.png"
        width={500}
        height={500}
        alt="Norihama-lou icon"
      />
    </div>
  );
};
