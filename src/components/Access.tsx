import { Section } from "./Section";
import Image from "next/image";
import { css } from "@panda/css";
import { RiErrorWarningFill } from "@remixicon/react";

export const Access = () => {
  return (
    <Section id="access">
      <Image
        className={css({
          width: "full",
        })}
        alt="Mapo Tofu Stand"
        height={500}
        width={500}
        src="/access-map.png"
      />
      <div
        className={css({
          width: "full",
          padding: "0.5rem",
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
      </div>
    </Section>
  );
};
