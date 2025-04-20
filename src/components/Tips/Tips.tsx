import React, { FC } from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";

const Q: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={css({
        width: "full",
      })}
    >
      {children}
    </div>
  );
};

const A: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={css({
        width: "full",
      })}
    >
      {children}
    </div>
  );
};

type QA = {
  q: string[];
  a: string[];
};
export const Tips = () => {
  const qa: QA[] = [
    {
      q: ["最初の試作でうまくいかなかったことは？"],
      a: [
        "一番難しかったのは、痺れと辛さのバランスですね。辛さを強くすると食べづらくなるし、控えめにすると印象がぼやける…。何十パターンも試作しました。",
      ],
    },
    {
      q: ["特にこだわった工程は？"],
      a: [
        "花椒の炒り方です。焙煎が足りないと香りが立たず、焦がすと苦くなる。ちょっとした温度管理とタイミングで味が激変するので、今でも毎回緊張します。",
      ],
    },
    {
      q: ["試作中で面白かったことは？"],
      a: [
        "社員みんなで“痺れ耐性選手権“をやったんですよ（笑）。一番強かったのは意外にも◯◯（スタッフ名）で、四川出身の人も驚いてました。",
      ],
    },
    {
      q: [":round_pushpin: おすすめ紹介：麻婆豆腐好きなら行ってほしいお店"],
      a: [
        "麻婆豆腐をもっと深く楽しみたい方に、ぜひ一度足を運んでほしい名店をご紹介します。",
        "陳麻婆豆腐（東京・新宿）: 本場四川スタイルを忠実に再現。香り高い油としっかり痺れる花椒が印象的。",
        "中華料理○○軒（大阪・難波）: 豆板醤のコクと旨味が際立つ一皿。日本人の口にも合うバランス型。",
        "四川小吃（福岡・天神）: ご飯との相性が抜群！おかわり必至の麻婆豆腐定食が人気。",
      ],
    },
  ];
  return (
    <Section id="tips">
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
          {"コラム"}
        </div>
        {qa.map((item, index) => (
          <div
            className={css({
              width: "full",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            })}
            key={index}
          >
            {item.q.map((question, qIndex) => (
              <div key={qIndex}>{question}</div>
            ))}
            {item.a.map((answer, aIndex) => (
              <div key={aIndex}>{answer}</div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
