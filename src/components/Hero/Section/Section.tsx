import { css } from "@panda/css";
import { FC } from "react";
import { LeftDecoration } from "./decorations/left";
import { RightDecoration } from "./decorations/right";
import { RightBottomDecoration } from "./decorations/rightBottom";
import { LeftBottomDecoration } from "./decorations/leftBottom";

export const Section: FC = () => {
  return (
    <div
      className={css({
        width: "full",
        padding: "2rem",
      })}
    >
      <LeftDecoration />
      <LeftBottomDecoration />
      <RightDecoration />
      <RightBottomDecoration />
      <div
        className={css({
          width: "full",
          padding: "2rem",
          height: "15rem",
        })}
      >
        <div
          className={css({
            width: "full",
            height: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <h1
            className={css({
              width: "full",
              fontWeight: "bold",
              fontSize: "xl",
              color: "primary",
            })}
          >
            {
              "都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。"
            }
          </h1>
        </div>
      </div>
    </div>
  );
};
