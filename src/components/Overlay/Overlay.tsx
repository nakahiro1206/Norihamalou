"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { overlayStyles } from "./Overlay.recipe";

export const Overlay: FC = () => {
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<"enter" | "leave">("enter");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMode("leave");
      setTimeout(() => {
        setVisible(false);
      }, 500); // 0.5 seconds
    }, 700); // 0.7 second

    return () => clearTimeout(timer);
  }, []);

  const classes = overlayStyles({ mode: mode });

  if (!visible) return null;

  return (
    <div className={classes.background}>
      <Image
        className={classes.image}
        src="/icon.png"
        width={500}
        height={500}
        alt="Norihama-lou icon"
      />
    </div>
  );
};
