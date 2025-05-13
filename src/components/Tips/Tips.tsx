import React, { FC } from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";
import { useInView } from "react-intersection-observer";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

const Q: FC<{ str: string }> = ({ str }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className={css({
        width: "3/4",
        alignSelf: "flex-end",
        color: "beige",
        backgroundColor: inView ? "primary" : "transparent",
        textAlign: "left",
        rounded: "lg",
        padding: "0.5rem",
      })}
    >
      {inView ? (
        <SplitText
          text={str}
          className={css({
            maxWidth: "full",
          })}
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          rootMargin="-50px"
          onLetterAnimationComplete={() => { }}
        />) : (
        <div>{str}</div>
      )
      }
    </div>
  );
};

const A: FC<{ str: string }> = ({ str }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className={css({
        width: "full",
        alignSelf: "flex-start",
        color: "white",
        textAlign: "left",
        rounded: "lg",
        padding: "0.5rem",
      })}
    >
      {inView ? (
        <SplitText
          text={str}
          className={css({
            maxWidth: "full",
          })}
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          rootMargin="-50px"
          onLetterAnimationComplete={() => { }}
        />) :
        (<div>{str}</div>)}

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
      q: ["おすすめ紹介：麻婆豆腐好きなら行ってほしいお店"],
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
            color: "white",
            fontWeight: "bold",
            fontSize: "xl",
          })}
        >
          {"制作裏話Q&A"}
        </div>
        <div
          className={css({
            width: "full",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            paddingTop: "1rem",
          })}
        >
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
                <Q key={qIndex} str={question} />
              ))}
              {item.a.map((answer, aIndex) => (
                <A key={aIndex} str={answer} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
