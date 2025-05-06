"use client";
import type { FC } from "react";
import { AnimatedText } from "./AnimatedText/AnimatedText";
import { overlayStyles } from "./Overlay.recipe";
import { ParticleBackground } from "./ParticleBackground/ParticleBackground";

const delay = 0.4;
const span = 1.5;
const texts = [
	"都内の麻婆豆腐を100軒以上食べめぐり、",
	"たどり着いた究極の麻婆。",
	"高級中華にも引けをとらない本気の味を",
	"ご賞味あれ。",
];

export const Overlay: FC = () => {
	return (
		<div
			className={overlayStyles}
			style={{
				animationDelay: `calc(
          ${delay}s
          + var(--transition-slow)
          + ${span * (texts.length - 1)}s
          + 1s
        )`, // テキストが表示されるまでの時間と遅延 (1s)
			}}
		>
			<ParticleBackground />
			<AnimatedText texts={texts} delay={delay * 1000} span={span * 1000} />
		</div>
	);
};
