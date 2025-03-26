"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import { Player } from "@lordicon/react";
import { useMenuContext } from "@/app/provider";
import { exhaustiveMatchingGuard } from "@/types/guard";
import Link from "next/link";
import { css } from "@panda/css";
import dynamic from "next/dynamic";
import {
  menuItemStyles,
  menuItemFrameStyles,
  menuWrapperStyles,
} from "./Header.recipe";

const MenuIcon = dynamic(() => import("@/icons/MenuIcon"), { ssr: false });
const CloseIcon = dynamic(() => import("@/icons/CloseIcon"), { ssr: false });

const MenuTrigger: FC<{ isOpen: boolean | null; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
  switch (isOpen) {
    case false:
    case null:
      return (
        <button
          className={css({
            display: "flex",
            gap: "0.5rem",
            textAlign: "end",
          })}
          onClick={toggleMenu}
        >
          <span>MENU</span>
          <MenuIcon
            loop={true}
            className={css({
              width: "1.5rem",
              height: "1.5rem",
            })}
          />
        </button>
      );
    case true:
      return (
        <button
          className={css({
            display: "flex",
            gap: "0.5rem",
            textAlign: "end",
          })}
          onClick={toggleMenu}
        >
          <span>CLOSE</span>
          <CloseIcon
            loop={0}
            className={css({
              width: "1.5rem",
              height: "1.5rem",
            })}
          />
        </button>
      );
    default:
      return exhaustiveMatchingGuard(isOpen);
  }
};

const MenuArea: FC<{ isOpen: boolean | null; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
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
          <div className={css(menuItemFrameStyles, { paddingTop: "4" })}>
            <Link
              href="/general-info"
              onClick={toggleMenu}
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "1st",
              })}
            >
              GENERAL INFO
            </Link>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "2nd",
              })}
            >
              FOOD MENU
            </div>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "3rd",
              })}
            >
              WHAT IS NORIHAMA-LOU?
            </div>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "4th",
              })}
            >
              制作秘話
            </div>
          </div>
          <div className={css(menuItemFrameStyles)}>
            <div
              className={menuItemStyles({
                state: isOpen ? "open" : "closed",
                order: "5th",
              })}
            >
              BONUS TIPS
            </div>
          </div>
        </div>
      );
  }
};

export const Header: FC = () => {
  const { isOpen, toggleMenu } = useMenuContext();

  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div
      className={css({
        width: "full",
        height: "5lvh",
      })}
    >
      <div
        className={css({
          width: "full",
          height: "5lvh",
          position: "fixed",
          top: 0,
          backgroundGradient: "to-r",
          gradientTo: "white",
          gradientVia: "primary",
          gradientFrom: "primary",
        })}
      >
        <div
          className={css({
            display: "flex",
            height: "full",
            justifyContent: "space-between",
            gap: "2",
            alignItems: "center",
            paddingX: "2",
          })}
        >
          <p
            className={css({
              color: "beige",
              fontSize: "3xl",
            })}
          >
            {"乘濵楼"}
          </p>
          <MenuTrigger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <MenuArea isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};
