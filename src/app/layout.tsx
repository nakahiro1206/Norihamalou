import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Hina_Mincho,
	Zen_Old_Mincho,
} from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/app/provider";
import { FreezeWhileMenuOpen } from "@/components/FreezeWhileMenuOpen";
import { Header } from "@/components/Header/Header";
import { Overlay } from "@/components/Overlay/Overlay";
import { css } from "@panda/css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const hinaMincho = Hina_Mincho({
	variable: "--fonts-hina-mincho",
	subsets: ["latin"],
	weight: ["400"],
});

const zenOldMincho = Zen_Old_Mincho({
	variable: "--fonts-zen-old-mincho",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "本格麻婆豆腐 乘濵楼",
	description: "都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={css({
				scrollBehavior: "smooth",
			})}
		>
			<body
				// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				className={`${hinaMincho.variable} ${zenOldMincho.variable}`}
			>
				<main
					className={css({
						fontFamily: "zenOldMincho", // base font in this website.
					})}
				>
					<MenuProvider>
						<Overlay />
						<FreezeWhileMenuOpen>
							<Header />
							<div
								className={css({
									minHeight: "95lvh",
								})}
							>
								{children}
							</div>
						</FreezeWhileMenuOpen>
					</MenuProvider>
				</main>
			</body>
		</html>
	);
}
