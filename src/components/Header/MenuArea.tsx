import React, { FC } from "react";
import { exhaustiveMatchingGuard } from "@/types/guard";
import Link from "next/link";
import {
  menuItemStyles,
  menuItemFrameStyles,
  menuWrapperStyles,
  mediaIconStyles,
} from "./MenuArea.recipe";
import { css } from "@panda/css";
import { RiInstagramLine, RiTwitterXLine } from "@remixicon/react";
import { scrollToSection } from "../ScrollPlugin/ScrollPlugin";

export const MenuArea: FC<{
  isOpen: boolean | null;
  toggleMenu: () => void;
}> = ({ isOpen, toggleMenu }) => {
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
          <div className={menuItemFrameStyles({ order: "1st" })}>
            <button
              // href="#menu"
              onClick={() => {
                toggleMenu();
                scrollToSection("menu");
              }}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "1st",
              })}
            >
              FOOD / DRINK
            </button>
          </div>
          <div className={menuItemFrameStyles({})}>
            <button
              // href="#access"
              onClick={() => {
                toggleMenu();
                scrollToSection("access");
              }}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "2nd",
              })}
            >
              ACCESS
            </button>
          </div>
          <div className={menuItemFrameStyles({})}>
            <button
              // href="#about-us"
              onClick={() => {
                toggleMenu();
                scrollToSection("about-us");
              }}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "3rd",
              })}
            >
              ABOUT US
            </button>
          </div>
          <div className={menuItemFrameStyles({})}>
            <button
              // href="#blog"
              onClick={() => {
                toggleMenu();
                scrollToSection("blog");
              }}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "4th",
              })}
            >
              BLOG
            </button>
          </div>
          <div className={menuItemFrameStyles({})}>
            <button
              // href="#tips"
              onClick={() => {
                toggleMenu();
                scrollToSection("tips");
              }}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "5th",
              })}
            >
              TIPS
            </button>
          </div>
          <div className={menuItemFrameStyles({})}>
            <div
              className={mediaIconStyles({ state: isOpen ? "open" : "closed" })}
            >
              <Link href="https://www.instagram.com/norihamaro">
                <RiInstagramLine
                  className={css({
                    width: "2rem",
                    height: "2rem",
                  })}
                />
              </Link>
              <Link href="https://x.com/Norihamaro">
                <RiTwitterXLine
                  className={css({
                    width: "2rem",
                    height: "2rem",
                  })}
                />
              </Link>
            </div>
          </div>
        </div>
      );
  }
};
