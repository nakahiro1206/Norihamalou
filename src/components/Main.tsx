import { FC } from "react";
import Image from "next/image";
import { css } from "@panda/css";

export const Main: FC = () => {
  return (
    <div
      className={css({
        width: "full",
      })}
    >
      <div
        className={css({
          width: "full",
          backgroundColor: "primary",
        })}
      >
        <Image
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
        />
      </div>
      <div
        className={css({
          width: "full",
          bgGradient: "to-b",
          gradientFrom: "primary",
          gradientTo: "white",
          color: "beige",
          height: "5lvh",
          textAlign: "center",
          fontWeight: "bold",
        })}
      >
        COMING BACK ON MAY 24-25th, 2025!
      </div>
    </div>
  );
};
