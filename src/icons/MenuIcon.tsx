"use client";
import Lottie, { LottieRef } from "lottie-react";
import Menu from "@/icons/menu.json";

type Props = {
  lottieRef?: LottieRef;
  loop?: number | boolean;
  className?: string;
};

export default function MenuIcon({ lottieRef, loop, className }: Props) {
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={Menu}
      loop={loop}
      className={className}
    />
  );
}
