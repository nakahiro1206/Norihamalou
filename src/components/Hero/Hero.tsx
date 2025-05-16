import { css } from "@panda/css";
import Image from "next/image";
import { Section } from "./Section/Section";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useHeroAreaContext } from "@/app/provider";

export const Hero = () => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
	});
	const { setInView } = useHeroAreaContext();
	useEffect(() => {
		setInView(inView);
	}, [inView]);
	return (
		<div
			ref={ref}
			className={css({
				width: "full",
				minHeight: "100lvh",
				display: "flex",
				flexDirection: "column",
				gap: "2rem",
			})}
		>
			<Image
				src="/mapo-in-pan.jpg"
				alt="Hero Image"
				width={1693}
				height={1181}
				className={css({
					width: "full",
				})}
			/>
			<Section />
		</div>
	);
};
