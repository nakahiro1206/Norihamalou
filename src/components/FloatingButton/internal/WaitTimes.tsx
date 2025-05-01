"use client";

import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";
import { useWaitingTime } from "@/services/waitingTime";
import { css } from "@panda/css";

export const WAITING_TIME_WIDTH = "max()";
export const WaitingTimes = () => {
	const { data: wait } = useWaitingTime();

	return (
		<section
			className={css({
				display: "flex",
				flexDirection: "column",
				gap: "0.25rem",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				width: "max(5rem, 7.5%)",
				aspectRatio: "1/1",
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				boxShadow: "0 0 5rem rgba(0, 0, 0, 0.25)",
				borderRadius: "50%",
				fontWeight: "bold",
				color: "#1b90f7",
			})}
		>
			<CircularText
				text="予想待ち時間・"
				className={css({
					position: "absolute",
					color: "#1b90f7",
					display: { base: "block", xl: "none" },
				})}
			/>
			<CircularText
				text="予想待ち時間・Waiting Times・"
				className={css({
					position: "absolute",
					color: "#1b90f7",
					display: { base: "none", xl: "block" },
				})}
			/>
			{wait !== null ? (
				<p
					className={css({
						display: "flex",
						alignItems: "center",
						gap: "0.25rem",
					})}
				>
					<CountUp to={wait} delay={2} />分
				</p>
			) : (
				<p>...</p>
			)}
		</section>
	);
};
