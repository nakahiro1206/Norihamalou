import React from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";

export const Blog = () => {
  return (
    <Section id="blog">
      <div
        className={css({
          width: "full",
        })}
      >
        <div
          className={css({
            width: "fit",
            borderBottom: "solid 1px",
            borderColor: "primary",
            paddingRight: "1rem",
          })}
        >
          {"当店のこだわり"}
        </div>
        {`「シンプルだけど、奥深い」。それが麻婆豆腐の魅力です。だからこそ、素材と道具には一切妥協しません。
        調味料へのこだわり
         本場四川から取り寄せた花椒（ホアジャオ）と豆板醤。香りと痺れのバランスを見極め、毎回手作業で調合しています。
        中華鍋へのこだわり
         鍋は鉄製のものを使用し、火力を最大限に活かすため毎日油をなじませています。鍋肌の香ばしさが、ひと口目から違いを生みます。
        ひき肉の扱い
         肉は部位を指定し、お店で粗挽きに。旨味と食感の両立を追求しています。`}
      </div>
    </Section>
  );
};
