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
            <Link
              href="/menu"
              onClick={toggleMenu}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "1st",
              })}
            >
              FOOD / DRINK
            </Link>
          </div>
          <div className={menuItemFrameStyles({})}>
            <Link
              href="/access"
              onClick={toggleMenu}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "2nd",
              })}
            >
              ACCESS
            </Link>
          </div>
          <div className={menuItemFrameStyles({})}>
            <Link
              href="/about-us"
              onClick={toggleMenu}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "3rd",
              })}
            >
              ABOUT US
            </Link>
          </div>
          <div className={menuItemFrameStyles({})}>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "4th",
              })}
            >
              BLOG
            </Link>
          </div>
          <div className={menuItemFrameStyles({})}>
            <Link
              href="/tips"
              onClick={toggleMenu}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "5th",
              })}
            >
              TIPS
            </Link>
          </div>
          <div className={menuItemFrameStyles({})}>
            <div
              className={mediaIconStyles({ state: isOpen ? "open" : "closed" })}
            >
              {/* <RiInstagramLine
                className={css({
                  width: "2rem",
                  height: "2rem",
                })}
              /> */}
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
