import React, { FC } from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";
import { useInView } from "react-intersection-observer";

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
      })}
    >
        <div
        className={css({
          width: 'full',
          height: 'full',
          padding: "0.5rem",
          color: inView ? "white" : "black",
          textAlign: "left",
          rounded: "lg",
          backgroundColor: inView ? "primary" : "transparent",
          animationName: inView ? "slideInRight" : "",
          animationDuration: "1s",
          animationDelay: "0s",
          animationFillMode: "forwards",          
        })}>
          {str}
        </div>
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
      })}
    >
      <div
        className={css({
          width: 'full',
          height: 'full',
          padding: "0.5rem",
          color: inView ? "white" : "black",
          textAlign: "left",
          rounded: "lg",
          animationName: inView ? "slideInLeft" : "",
          animationDuration: "1s",
          animationDelay: "0s",
          animationFillMode: "forwards", 
          whiteSpace: "pre-wrap",
        })}>
          {str}
        </div>
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
      q: ["まず麻婆豆腐にハマったきっかけを教えてください。"],
      a: [
        "遡ること6年前、大学入学直後に同じクラスであった石原・吉澤の2人が麻婆豆腐好きで意気投合したところから始まりました。2人に誘われ初めて本格的な四川麻婆豆腐を食べた乘濵は、麻婆豆腐はこんなにも美味しい料理なのかと感動し、虜になります。このようにして巻き込まれた3人を加え、5人で美味しい四川麻婆豆腐を求め食べ巡る日々を過ごしていました。",
      ],
    },
    {
      q: ["なぜ五月祭に出展しようと思ったのですか？"],
      a: ["気づけば4年間で100店舗以上を巡り、大学院入学後に訪れた2024年の四川フェス。そこで食べた麻婆豆腐に衝撃を受けます。",
"屋外のテントでこんなにも美味しい麻婆豆腐がこの価格で食べられるのか…。",
"「乘濵楼」の企画責任者の乘濵は思いました。",
"日々研究をしている本郷キャンパスで行われる五月祭で、同じように感動を与える麻婆豆腐を出せないか。",
"ふらっと遊びにきた来場者が、ふらっと寄ったテントで食べた麻婆豆腐で、忘れられない衝撃の食体験をする。",
"自分が麻婆豆腐を食べた時の衝撃を今度は他の人に、あなたに届けたいと思いました。",
"そこから研究と試作を重ねる日々が始まりました。コロナ禍に自作を始めた麻婆豆腐でしたが、五月祭に出店するにあたり抜本的な調理工程の見直しや食材の選定に取り掛かります。いくつものレシピを試し、食材を何種類も食べ比べ、ようやく辿り着いた“乘濵楼の味”。10種類以上の調味料が肉や豆腐と絡まり、辛さの中に幾重にも旨みと香りが広がる。食べてきた数々の名店の味にも劣らない、究極の一皿です。"],
    },
    {
      q: ["最初の試作でうまくいかなかったことはありましたか？"],
      a: [
        "どのように本格的な味にしつつ、多くの方に食べていただけるような辛さに調整するかという点が難しかったですね。旨みや色味を強くするために豆板醤を増やすと辛さが強くなり、控えめにすると味がぼやけてしまう。このバランスを調節するために、様々な種類の豆板醤や唐辛子、他にもいろいろな調味料を試しました。",
      ],
    },
    {
      q: ["試作を進める中で特にこだわった工程はどこですか？"],
      a: [
        "豆板醤をしっかりと炒めるところですね。豆板醤は、しっかりと油で炒めて、味を出しつつ油と調和させることでその良さを最大限に引き出すことができるんですよね。一方で、五月祭では複雑な調理工程はできませんので、安全で効率の良い工程の中でも味を引き出せるように試行錯誤しました。",
      ],
    },
    {
      q: ["一方で、試作中に起きたハプニングなどはありますか？"],
      a: [
        "一度八角の粉末を最初の方に炒めるレシピで作ってみたところ、部屋全体に八角の刺激が充満し、全員むせたのですが、食べてみたら全然八角の味がせず、ただみんなで苦しんだだけという会がありました（笑）。そういう失敗を超えて、最後はいいレシピに辿り着けたのでよかったなと思います。",
      ],
    },
    {
      q: ["昨年の五月祭にも出店されていますが、当時の反響はいかがでしたか？"],
      a: ["2024年の四川フェスで衝撃を受けて以来レシピ研究を進め、満を辞して出店した昨年の五月祭では想像を遥かに超えるお客様にご来店いただき、多くの嬉しいお言葉をいただきました。",
"「めっちゃくちゃ美味しかったです！辛味があるのに、水やご飯なしで最後まで美味しく食べられて、びっくりの美味しさでした。」",
"「感動しました。麻婆豆腐に限らず、今年食べた物の中で一番美味しかったです。」",
"「お店で麻婆豆腐食べてたら、食べてる途中に無性に乘濵楼の麻婆豆腐が食べたくなった。」"],
    },
    {
      q: ["今年の五月祭ではどのような所がパワーアップしていますか？"],
      a: ["昨年はありがたいことに提供速度を超えるお客様がいらっしゃったため、一時40分以上お待ちいただくことにも繋がり、大変ご迷惑をおかけしてしまいました。",
"その反省を踏まえ、今年の五月祭では生産体制を2倍に増やし、4つの中華鍋を振ってお客様をお待ちしております。また、昨年ご飯を求める声が多かったため、塩にぎりとビールも合わせて販売することとなりました。それだけでなく、今年も研究と試作を重ね、工程や食材を見直し、昨年よりもさらに美味しくなって帰ってきました。"
]
    },
    {
      q: ["では最後に、麻婆豆腐好きならぜひ行ってほしいお店をご紹介してください"],
      a: [
        "麻婆豆腐をもっと深く楽しみたい方に、ぜひ一度足を運んでほしい名店をご紹介します。",
        "スーツァン・レストラン陳（東京・渋谷）: ほどよい辛みとコクが完璧に調和した、オーソドックス、ゆえに最強！という感じの一皿。日本の麻婆豆腐のイデア的存在と呼ぶにふさわしい美味しさで、メンバーの間でも不動の人気1位を保っています。",
        "金威（東京・池の上/下北沢）：辛さ・痺れが強め（調節可）の、濃口で本格的な麻婆豆腐が楽しめます。特に下北店はリーズナブルで圧倒的美味しさ。食器も景徳鎮で揃えるなど、細部までこだわりを感じる名店です。",
        "川菜館（東京・新御茶ノ水）：辛めで花椒も効いた、パンチとコクのある絶品麻婆です。辛さとうまみが一体になっており、はじめ辛くてもそれほど後を引きません。しっかり形が残った硬めの豆腐で、食べ応えバッチリなのも大きな魅力です。",
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
            width: "full",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "1rem",
          })}
        >
          {qa.map((item, index) => (
            <div
              className={css({
                width: "full",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
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
