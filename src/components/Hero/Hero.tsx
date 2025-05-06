import { css } from "@panda/css";
import Image from "next/image";
import { Section } from "./Section/Section";

export const Hero = () => {
	return (
		<div
			className={css({
				width: "full",
				minHeight: "95lvh",
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
