"use client";
import Lottie, { LottieRef } from "lottie-react";
import Close from "@/icons/close.json";

type Props = {
  lottieRef?: LottieRef;
  loop?: number | boolean;
  className?: string;
};

export default function CloseIcon({ lottieRef, loop = 0, className }: Props) {
  return (
    <Lottie
      animationData={Close}
      lottieRef={lottieRef}
      loop={loop}
      className={className}
    />
  );
}
