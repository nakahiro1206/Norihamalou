"use client";
import { type FC, useEffect } from "react";
import Image from "next/image";
import { css } from "@panda/css";
import { FoodDrinkMenu } from "./Menu";
import { Access } from "./Access/Access";
import { isTag, Section } from "./Section/Section";
import { WaitingTimes } from "./FloatingButton/internal/WaitTimes";
import { Overlay } from "./Overlay/Overlay";
import { Greetings } from "./Greetings/Greetings";
import { FloatingButton } from "./FloatingButton/FloatingButton";
import { Info } from "./Info/Info";
import { Devider } from "./Devider/Devider";
import { InitScrollPlugin } from "./ScrollPlugin/ScrollPlugin";

export const Main: FC = () => {
	return (
		<div
			className={css({
				width: "full",
				backgroundColor: "primary",
			})}
		>
			{/* <div
        className={css({
          width: "full",
          bgGradient: "to-b",
          gradientFrom: "primary",
          gradientVia: "primary",
          gradientTo: "white",
          color: "beige",
          height: "10lvh",
          textAlign: "center",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        })}
      >
        <p>{"SITE: 工学部広場B"}</p>
        <p>COMING BACK ON MAY 24-25th, 2025!</p>
      </div> */}

			<div
				className={css({
					width: "full",
					backgroundColor: "white",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "2rem",
					paddingTop: "2rem",
				})}
			>
				<Info />
				<Devider />
				<Greetings />
				<Devider />
				<FoodDrinkMenu />
				<Devider />
				<Access />
			</div>
			<FloatingButton />
			<Overlay />
			<InitScrollPlugin />
		</div>
	);
};
