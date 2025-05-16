import { css } from "@panda/css";
import { FC } from "react";
import { LeftDecoration } from "./decorations/left";
import { RightBottomDecoration } from "./decorations/rightBottom";
import Image from "next/image";
export const Section: FC = () => {
  return (
    <div
      className={css({
        width: "full",
        padding: "2rem",
      })}
    >
      <LeftDecoration />
      {/* <LeftBottomDecoration /> */}
      {/* <RightDecoration /> */}
      <RightBottomDecoration />
      <div
        className={css({
          width: "full",
          padding: "2rem",
          height: "16rem",
        })}
      >
        <div
          className={css({
            width: "full",
            height: "full",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: '1rem',
          })}
        >
          <Image
                src="/header.png"
                alt="Norihama-lou icon"
                width={1000}
                height={1000}
                className={css({
                  width: "full",
                  objectFit: "contain",
                  objectPosition: "left",
                })}
              />
          <h1
            className={css({
              width: "full",
              fontWeight: "bold",
              fontSize: "xl",
              color: "beige",
              textAlign: "center",
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
