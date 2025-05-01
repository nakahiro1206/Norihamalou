"use client";
import type React from "react";
import type { FC } from "react";
import { useMenuContext } from "@/app/provider";
// import { cn } from "@/lib/utils";
import { css } from "@panda/css";

type Props = {
	children: React.ReactNode;
};

export const FreezeWhileMenuOpen: FC<Props> = ({ children }) => {
	const { isOpen } = useMenuContext();
	return (
		<div
			className={css({
				height: "full",
				width: "full",
				// position: isOpen ? "fixed" : "relative",
				overflow: isOpen ? "hidden" : "scroll",
			})}
		>
			{children}
		</div>
	);
};
