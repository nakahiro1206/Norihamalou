import React from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <Section id="about-us">
      <div
        className={css({
          width: "full",
          color: "white",
          spaceY: '1rem'
        })}
      >
        {/* <div
          className={css({
            width: "fit",
            borderBottom: "solid 1px",
            borderColor: "primary",
            paddingRight: "1rem",
            color: "white",
            fontWeight: "bold",
            fontSize: "xl",
          })}
        >
          {"代表より、、？"}
        </div> */}
        <div className={css({
          width: "full",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        })}>
          <Image
            src="/self.jpg"
            alt="self"
            height={500}
            width={500}
            className={css({
              width: "3/4",
              rounded: "lg",
            })} />
          <div>
            {`こんにちは、麻婆豆腐専門店「〇〇（店名）」です。
        私たちは「本当に美味しい麻婆豆腐を、もっと気軽に味わってもらいたい」という想いから、このお店をはじめました。
       店主の△△は、かつて中国を旅した際に本場の麻婆豆腐の奥深さに衝撃を受け、「いつか自分の手で、あの感動を再現したい」と強く思うようになりました。
        そこから十数年——研究と試作を重ね、ようやくたどり着いた“自分たちの味“。
        辛さの中に旨味があり、痺れの奥に香りが立つ。そんな一皿を、心を込めてご提供しています。`}
          </div>
        </div>
      </div>
    </Section>
  );
};
