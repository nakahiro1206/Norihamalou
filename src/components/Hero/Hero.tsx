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
		<section
      ref={ref}
			className={css({
				width: "100vw",
				minHeight: "100lvh",
				background: "black",
				display: "flex",
				flexDirection: { base: "column", md: "row" },
				position: "relative",
			})}
		>
			{/* Left (Logo & Text) */}
			<div
				className={css({
					display: "flex",
					flexDirection: "column",
					gap: "2.5rem",
					alignItems: "center",
					width: { base: "100vw", md: "50vw" },
					flex: 1,
					zIndex: 10,
					padding: "5rem 5rem",
					maxWidth: { base: "100vw", md: "48vw" },
				})}
			>
				{/* Logo */}
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: { base: "4.5rem", md: "12.5vw" },
						height: { base: "4.5rem", md: "12.5vw" },
						zIndex: 2,
					})}
				>
					<Image
						src="/icon.svg"
						alt="logo"
						width={88}
						height={88}
						style={{ width: "100%", height: "auto" }}
						priority
					/>
				</div>
				{/* Main Text Block */}
				<div
					className={css({
						width: { base: "90vw", md: "32rem" },
						maxWidth: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						alignItems: { base: "center", md: "flex-start" },
						position: "relative",
					})}
				>
					{/* Date with red vertical line */}
					<div
						className={css({
							display: "flex",
							alignItems: "center",
						})}
					>
						<span
							className={css({
								display: "inline-block",
								width: "2px",
								height: "1.7rem",
								background: "#e74b4b",
								marginRight: "1rem",
								borderRadius: "1px",
							})}
						/>
						<span
							className={css({
								color: "#f1ebd7",
								fontSize: "1.1rem",
								letterSpacing: "0.1em",
								fontFamily: "zenOldMincho, serif",
							})}
						>
							2025年度5月祭
						</span>
					</div>
					{/* Main Title */}
					<h1
						className={css({
							color: "#f1ebd7",
							fontSize: { base: "2.5rem", md: "3.8rem", lg: "4.8rem" },
							fontWeight: 700,
							lineHeight: 1.1,
							fontFamily: "zenOldMincho, serif",
							textAlign: { base: "center", md: "left" },
						})}
					>
						乘濵楼
					</h1>
					{/* Subtitle with red underline */}
					<h2
						className={css({
							color: "#e74b4b",
							fontSize: { base: "1.5rem", md: "2.1rem" },
							fontWeight: 600,
							fontFamily: "hinaMincho, serif",
							position: "relative",
							textAlign: { base: "center", md: "left" },
							"&::after": {
								content: '""',
								display: "block",
								width: "3.5em",
								height: "2px",
								background: "#e74b4b",
								marginTop: "0.2em",
								borderRadius: "1px",
								marginLeft: { base: "auto", md: 0 },
								marginRight: { base: "auto", md: 0 },
							},
						})}
					>
						本格麻婆
					</h2>
					{/* Description */}
					<p
						className={css({
							color: "#f1ebd7",
							fontSize: { base: "1rem", md: "1.15rem" },
							lineHeight: 2,
							maxWidth: { base: "90vw", md: "32rem" },
							paddingTop: "1.5rem",
							fontFamily: "zenOldMincho, serif",
							textShadow: "0 2px 8px rgba(0,0,0,0.3)",
							textAlign: { base: "center", md: "left" },
						})}
					>
						伝統と革新が織りなす、舌を麻痺させる香りと辛さの調べ。
						<br />
						本場四川の技を継承し、厳選された素材のみを用いた至高の一皿。
					</p>
					<div
						className={css({
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							color: "#f1ebd7",
							marginTop: "1.5rem",
							fontSize: { base: "0.8rem", md: "1rem" },
						})}
					>
						<p>scroll down</p>
						{/* <RiArrowDownLine /> */}
					</div>

					<div
						className={css({
							position: "absolute",
							width: "40vw",
							height: "40vw",
							borderRadius: "50%",
							background:
								"radial-gradient(circle, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0) 80%)",
							pointerEvents: "none",
						})}
					/>
				</div>
			</div>
			{/* Right (Image) */}
			<div
				className={css({
					position: { base: "absolute", md: "relative" },
					// top: 0,
					left: { base: "30%", md: 0 },
					height: { base: "100vh", md: "100vh" },
					width: { base: "100vw", md: "60vw" },
					flex: 1,
					clipPath: "polygon(15% 0, 100% 0, 100% 100%, 8% 100%, 0% 50%)",
				})}
			>
				<Image
					src="/mapo-in-pan-square.jpg"
					alt="麻婆豆腐"
					fill
					style={{ objectFit: "cover", objectPosition: "center" }}
					priority
				/>
				{/* Red border glow on left edge */}
				<div
					className={css({
						position: "absolute",
						left: 0,
						top: 0,
						bottom: 0,
						width: "100%",
						background:
							"linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)",
					})}
				/>
				{/* Overlay for darkening image */}
				<div
					className={css({
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
					})}
				/>
		</section>
	);
};
