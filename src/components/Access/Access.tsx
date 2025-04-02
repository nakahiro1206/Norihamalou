import { Section } from "../Section/Section";
import Image from "next/image";
import { css } from "@panda/css";
import { RiErrorWarningFill } from "@remixicon/react";

export const Access = () => {
  return (
    <Section id="access">
      <div
        className={css({
          width: "full",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        })}
      >
        <div
          className={css({
            width: "full",
            backgroundColor: "amber.200",
            borderRadius: "lg",
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
          })}
        >
          <RiErrorWarningFill
            className={css({
              marginRight: "0.5rem",
              color: "red.500",
              display: "inline",
            })}
          />
          <span>ビールを購入される方は年齢確認のリストバンドを。。。。。</span>
        </div>

        <Image
          className={css({
            width: "full",
            borderRadius: "2xl",
          })}
          alt="Mapo Tofu Stand"
          height={500}
          width={500}
          src="/access-map.png"
        />
      </div>
    </Section>
  );
};
