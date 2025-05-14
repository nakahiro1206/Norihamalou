"use client";
import type { FC } from "react";
import { css } from "@panda/css";
import { FoodDrinkMenu } from "./Menu/Menu";
import { Access } from "./Access/Access";
import { Overlay } from "./Overlay/Overlay";
import { Greetings } from "./Greetings/Greetings";
import { Info } from "./Info/Info";
import { Devider } from "./Devider/Devider";
import { InitScrollPlugin } from "./ScrollPlugin/ScrollPlugin";
import { Tips } from "./Tips/Tips";
import { AboutUs } from "./AboutUs/AboutUs";
import { Blog } from "./Blog/Blog";
import { Hero } from "./Hero/Hero";
import { FloatingButton } from "./FloatingButton/FloatingButton";
import { useWaitingTime } from "@/hooks/waitingTime";

export const Main: FC = () => {
	const { wait, error } = useWaitingTime();
	return (
		<div
			className={css({
				width: "full",
				backgroundColor: "black",
			})}
		>
			<div
				className={css({
					width: "full",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "2rem",
					paddingBottom: "calc(10vh)",// for floating area
				})}
			>
				<Hero />
				<Devider />
				<Info wait={wait} error={error} />
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
			</div>
			<FloatingButton wait={wait} error={error} />
			<InitScrollPlugin />
			<Overlay />
		</div>
	);
};
