"use client";
import { css } from "@panda/css";
import type { FC } from "react";
import { useWaitTime } from "@/hooks/waitTime";
import { AboutUs } from "../AboutUs";
import { Access } from "../Access";
import { Blog } from "../Blog";
import { Devider } from "../Devider";
import { FloatingButton } from "../FloatingButton";
import { Hero } from "../Hero";
import { Info } from "../Info";
import { FoodDrinkMenu } from "../Menu";
import { Overlay } from "../Overlay";
import { InitScrollPlugin } from "../ScrollPlugin";
import { Tips } from "../Tips";

export const Main: FC = () => {
	const { wait, error } = useWaitTime();
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
					paddingBottom: "calc(10vh)", // for floating area
				})}
			>
				<Hero />
				<Devider />
				<Info wait={wait} error={error} />
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
