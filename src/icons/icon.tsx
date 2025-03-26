"use client";
import { JSX } from "react";
import Lottie from "lottie-react";
import Menu from "@/icons/menu.json";
import Close from "@/icons/close.json";

export const MenuIcon = () => {
  return <Lottie animationData={Menu} />;
};

export const CloseIcon = () => {
  return <Lottie animationData={Close} />;
};

type IconMember = {
  Close: JSX.Element;
  Menu: JSX.Element;
};
export default function Icons(): IconMember {
  return {
    Close: <Lottie animationData={Close} />,
    Menu: <Lottie animationData={Menu} />,
  };
}
