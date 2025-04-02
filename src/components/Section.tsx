import { css } from "@panda/css";
import { FC } from "react";
import { LeftDecoration } from "./decorations/left";
import { RightDecoration } from "./decorations/right";
import { RightBottomDecoration } from "./decorations/rightBottom";
import { LeftBottomDecoration } from "./decorations/leftBottom";

type Props = {
  id: "greetings" | "menu" | "access" | "about-us" | "blog" | "tips";
  className?: string;
  children?: React.ReactNode;
};

const idToLabel = (
  id: "greetings" | "menu" | "access" | "about-us" | "blog" | "tips",
): string => {
  switch (id) {
    case "greetings":
      return "GREETINGS";
    case "menu":
      return "MENU";
    case "access":
      return "ACCESS";
    case "about-us":
      return "ABOUT US";
    case "blog":
      return "BLOG";
    case "tips":
      return "TIPS";
  }
};

export const Section: FC<Props> = ({ id, className, children }) => {
  const label = idToLabel(id);
  return (
    <div
      id={id}
      className={css({
        width: "full",
        padding: "0.5rem",
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
          backgroundColor: "primary",
          borderTopRadius: "lg",
        })}
      >
        <div
          className={css({
            width: "full",
            // borderY: "solid",
            borderX: "none",
            borderColor: "white",
            // borderWidth: "2px",
            paddingY: "0.25rem",
          })}
        >
          <h1
            className={css({
              width: "full",
              fontWeight: "bold",
              fontSize: "2xl",
              color: "beige",
              textAlign: "center",
              // borderY: "solid",
              // borderX: "none",
              // borderWidth: "1px",
            })}
          >
            {label}
          </h1>
        </div>
      </div>

      <div
        className={css({
          width: "full",
          backgroundColor: "gray.100", // "beige",
          borderBottomRadius: "lg",
        })}
      >
        {children}
      </div>
    </div>
  );
};
