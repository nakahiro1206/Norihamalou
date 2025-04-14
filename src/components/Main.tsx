"use client";
import { FC, useEffect } from "react";
import { css } from "@panda/css";
import { FoodDrinkMenu } from "./Menu/Menu";
import { Access } from "./Access/Access";
import { Overlay } from "./Overlay/Overlay";
import { Greetings } from "./Greetings/Greetings";
import { FloatingButton } from "./FloatingButton/FloatingButton";
import { Info } from "./Info/Info";
import { Devider } from "./Devider/Devider";
import { InitScrollPlugin } from "./ScrollPlugin/ScrollPlugin";
import { Tips } from "./Tips/Tips";
import { AboutUs } from "./AboutUs/AboutUs";
import { Blog } from "./Blog/Blog";
import { Hero } from "./Hero/Hero";

export const Main: FC = () => {
  return (
    <div
      className={css({
        width: "full",
        backgroundColor: "primary",
      })}
    >
      <div
        className={css({
          width: "full",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        })}
      >
        <Hero />
        <Devider />
        <Info />
        <Devider />
        <Greetings />
        <Devider />
        <FoodDrinkMenu />
        <Devider />
        <Access />
        <Devider />
        <AboutUs />
        <Devider />
        <Blog />
        <Devider />
        <Tips />
        <Devider />
      </div>
      {/* <FloatingButton /> */}
      <Overlay />
      <InitScrollPlugin />
    </div>
  );
};
