import { css } from "@panda/css";
import Image from "next/image";
import type { FC } from "react";
import { exhaustiveMatchingGuard } from "@/types/guard";
import { LeftDecoration } from "./decorations/left";
import { LeftBottomDecoration } from "./decorations/leftBottom";
import { RightDecoration } from "./decorations/right";
import { RightBottomDecoration } from "./decorations/rightBottom";
export type Tags = "info" | "menu" | "access" | "about-us" | "blog" | "tips";

export const isTag = (id: string): id is Tags => {
	try {
		const _ = id as Tags;
		return true;
	} catch (_error) {
		return false;
	}
};

type Props = {
	id: Tags;
	className?: string;
	children?: React.ReactNode;
};

const HeaderImg = null;
const idToLabel = (id: Tags): string | typeof HeaderImg => {
	switch (id) {
		case "info":
			return null;
		case "menu":
			return "メニュー";
		case "access":
			return "アクセス";
		case "about-us":
			return "ご挨拶";
		case "blog":
			return "こだわり";
		case "tips":
			return "制作秘話";
		default:
			return exhaustiveMatchingGuard(id);
	}
};

export const Section: FC<Props> = ({ id, className, children }) => {
	const label = idToLabel(id);
	return (
		<div
			id={id}
			className={css({
				width: "full",
				paddingX: "2rem",
			})}
		>
			<div
				className={css({
					width: "2/3",
					marginX: "auto",
				})}
			>
				<LeftDecoration />
				<LeftBottomDecoration />
				<RightDecoration />
				<RightBottomDecoration />
				<div
					className={css({
						width: "full",
						height: "4rem",
						padding: "0.5rem",
						backgroundColor: "black",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontWeight: "bold",
						fontSize: "2xl",
						color: "beige",
						textAlign: "center",
					})}
				>
					{label === HeaderImg ? (
						<div
							className={css({
								width: "full",
								height: "full",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							})}
						>
							<Image
								src="/header-mini.png"
								alt="Norihama-lou icon"
								width={1000}
								height={1000}
								className={css({
									height: "2rem",
									width: "auto",
									objectFit: "contain",
									objectPosition: "center",
								})}
							/>
						</div>
					) : (
						label
					)}
				</div>
			</div>

			<div
				className={css({
					width: "full",
					padding: "1rem", // "2rem",
					backgroundColor: "black",
					borderBottomRadius: "lg",
				})}
			>
				{children}
			</div>
		</div>
	);
};
