"use client";
import React, { FC } from "react";
import { useMenuContext } from "@/app/provider";
import { css } from "@panda/css";

type Props = {
  children: React.ReactNode;
};

export const FreezeWhileMenuOpen: FC<Props> = ({ children }) => {
  const { isOpen } = useMenuContext();
  return (
    <div
      className={css({
        height: "full",
        width: "full",
        // position: isOpen ? "fixed" : "relative",
        overflow: isOpen ? "hidden" : "scroll",
      })}
    >
      {children}
    </div>
  );
};
