"use client";
import React, { FC, useRef, useEffect } from "react";
import { useMenuContext } from "@/app/provider";
import { exhaustiveMatchingGuard } from "@/types/guard";
import { css } from "@panda/css";
import dynamic from "next/dynamic";
import { MenuArea } from "./MenuArea";
import {
  RiMenuSearchLine,
  RiCloseLargeLine,
  RiCloseLine,
} from "@remixicon/react";
import Link from "next/link";

const MenuIcon = dynamic(() => import("@/icons/MenuIcon"), { ssr: false });
const CloseIcon = dynamic(() => import("@/icons/CloseIcon"), { ssr: false });

const MenuTrigger: FC<{ isOpen: boolean | null; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
  switch (isOpen) {
    default:
      return exhaustiveMatchingGuard(isOpen);
    case false:
    case null:
      return (
        <button
          className={css({
            display: "flex",
            gap: "0.5rem",
            textAlign: "end",
            color: "beige",
          })}
          onClick={toggleMenu}
        >
          <span>MENU</span>
          {/* <MenuIcon
            loop={true}
            className={css({
              width: "1.5rem",
              height: "1.5rem",
            })}
          /> */}
          <RiMenuSearchLine
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
            color: "beige",
          })}
          onClick={toggleMenu}
        >
          <span>CLOSE</span>
          <RiCloseLine
            className={css({
              width: "1.5rem",
              height: "1.5rem",
            })}
          />
          {/* <CloseIcon
            loop={0}
            className={css({
              width: "1.5rem",
              height: "1.5rem",
            })}
          /> */}
        </button>
      );
  }
};

export const Header: FC = () => {
  const { isOpen, toggleMenu } = useMenuContext();

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
          zIndex: 49,
          top: 0,
          backgroundColor: "primary",
          // backgroundGradient: "to-r",
          // gradientTo: "white",
          // gradientVia: "primary",
          // gradientFrom: "primary",
        })}
      >
        <div
          className={css({
            display: "flex",
            height: "full",
            justifyContent: "space-between",
            gap: "2",
            alignItems: "center",
            paddingX: "1rem",
          })}
        >
          <p
            className={css({
              color: "beige",
              fontSize: "3xl",
              fontFamily: "hinaMincho",
            })}
          >
            <Link
              href="/"
              onClick={() => {
                if (isOpen === true) {
                  toggleMenu();
                }
              }}
            >
              {"乘濵楼"}
            </Link>
          </p>
          <MenuTrigger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <MenuArea isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};
