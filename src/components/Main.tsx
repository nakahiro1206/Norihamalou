"use client";
import { FC } from "react";
import Image from "next/image";
import { css } from "@panda/css";

export const Main: FC = () => {
  return (
    <div
      className={css({
        width: "full",
        backgroundColor: "primary",
      })}
    >
      <div
        className={css({
          width: "full",
          bgGradient: "to-b",
          gradientFrom: "primary",
          gradientVia: "primary",
          gradientTo: "white",
          color: "beige",
          height: "10lvh",
          textAlign: "center",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        })}
      >
        <p>{"SITE: 工学部広場B"}</p>
        <p>COMING BACK ON MAY 24-25th, 2025!</p>
      </div>

      <div
        className={css({
          width: "full",
          backgroundColor: "white",
        })}
      >
        <div
          className={css({
            width: "full",
            rounded: "lg",
            padding: "0.5rem",
          })}
        >
          <div
            className={css({
              width: "full",
              display: "flex",
              alignItems: "center",
              backgroundColor: "beige",
              rounded: "lg",
              gap: "0.5rem",
            })}
          >
            <Image
              src="/mapo.tiff"
              height={500}
              width={500}
              alt="Mapo Tofu"
              className={css({
                width: "55%",
                roundedLeft: "lg",
              })}
            />
            <p>{`数々の名店の麻婆豆腐を食べ巡った経験を活かし、この数年間麻婆豆腐作りに熱中してきました。
          その集大成に相応しい究極の麻婆豆腐が出来たと自負しております。

          皆さまのご来店を心よりお待ちしております。
          ー 乘濵駿平`}</p>
          </div>
        </div>
        <div
          className={css({
            width: "full",
            rounded: "lg",
            padding: "0.5rem",
          })}
        >
          <div
            className={css({
              backgroundColor: "beige",
              rounded: "lg",
            })}
          >
            <p>{"お待ちしております的な一言？"}</p>
            <Image
              className={css({
                width: "full",
                roundedBottom: "lg",
              })}
              alt="Mapo Tofu Stand"
              height={500}
              width={500}
              src="/mapo-stand.jpg"
            />
          </div>
        </div>
        {/* <Image
          className={css({
            width: "full",
            height: "full",
            objectFit: "contain",
            objectPosition: "center",
          })}
          src="/icon.png"
          width={500}
          height={500}
          alt="Norihama-lou icon"
        /> */}
      </div>
      <div
        className={css({
          width: "10lvh",
          height: "calc(15lvh+0.5rem)",
          position: "fixed",
          bottom: "5%",
          right: "5%",

          rounded: "full",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            width: "full",
            height: "10lvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "beige",
            rounded: "full",
            marginBottom: "0.5rem",
          })}
        >
          Anticipated Waiting Time
        </div>
        <div
          className={css({
            width: "full",
            height: "5lvh",
            backgroundColor: "beige",
            rounded: "xl",
          })}
        >
          Vote from Here!
        </div>
      </div>
    </div>
  );
};
