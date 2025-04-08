import { css } from "@panda/css";
import { FC } from "react";
import { LeftDecoration } from "./decorations/left";
import { RightDecoration } from "./decorations/right";
import { RightBottomDecoration } from "./decorations/rightBottom";
import { LeftBottomDecoration } from "./decorations/leftBottom";
import { exhaustiveMatchingGuard } from "@/types/guard";

export type Tags =
  | "info"
  | "greetings"
  | "menu"
  | "access"
  | "about-us"
  | "blog"
  | "tips";

export const isTag = (id: string): id is Tags => {
  try {
    const _ = id as Tags;
    return true;
  } catch (error) {
    return false;
  }
};

type Props = {
  id: Tags;
  className?: string;
  children?: React.ReactNode;
};

const idToLabel = (id: Tags): string => {
  switch (id) {
    default:
      return exhaustiveMatchingGuard(id);
    case "info":
      return "INFO";
    case "greetings":
      return "GREETINGS";
    case "menu":
      return "FOOD / DRINK";
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
        paddingX: "2rem",
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
          padding: "1rem", // "2rem",
          backgroundColor: "gray.100", // "beige",
          borderBottomRadius: "lg",
        })}
      >
        {children}
      </div>
    </div>
  );
};
