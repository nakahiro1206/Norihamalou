"use client";
import React, { FC } from "react";
import { useMenuContext } from "@/app/provider";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

export const FreezeWhenOverlapped: FC<Props> = ({ children }) => {
  const { isOpen } = useMenuContext();
  const baseClasses = cn("h-full");
  const attribute = isOpen ? "overflow-hidden" : "overflow-scroll";
  return <div className={cn(baseClasses, attribute)}>{children}</div>;
};
