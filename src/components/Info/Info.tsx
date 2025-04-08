import React, { FC } from "react";
import { Section } from "../Section/Section";
import { css } from "@panda/css";
import { scrollToSection } from "../ScrollPlugin/ScrollPlugin";
import { WaitingTimes } from "../WaitTimes";
import { RiLinksLine } from "@remixicon/react";

type SubSectionProps = {
  title: string;
  children: React.ReactNode;
};
const SubSection: FC<SubSectionProps> = ({ title, children }) => {
  return (
    <div
      className={css({
        width: "full",
        textAlign: "left",
      })}
    >
      <div
        className={css({
          width: "full",
          paddingX: "2rem",
        })}
      >
        <p
          className={css({
            fontWeight: "extrabold",
            fontSize: "lg",
            color: "primary",
            borderBottom: "solid 1px",
            borderColor: "primary",
            textAlign: "center",
          })}
        >
          {title}
        </p>
      </div>
      {children}
    </div>
  );
};

export const Info = () => {
  return (
    <Section id="info">
      <p>
        {`昨年の五月祭で 1000 食超を提供し大きな反響を呼んだ “本格麻婆豆腐 乘濵楼” が今年の五月祭に帰ってきます！！

      都内の麻婆豆腐を100軒以上食べめぐった東大生が、本気で届ける究極の麻婆豆腐。
      今年も試作を重ね、去年より進化させます🔥`}
      </p>

      <SubSection title={"開催日程"}>
        <div
          className={css({
            width: "full",
            display: "flex",
            textAlign: "left",
          })}
        >
          {"第98回五月祭 2025/5/24(Sat.) ~ 2025/5/25(Sun.)"}
        </div>
      </SubSection>

      <SubSection title={"開催場所"}>
        <div
          className={css({
            width: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          })}
        >
          <button
            className={css({
              textAlign: "center",
            })}
            onClick={() => scrollToSection("access")}
          >
            {"東京大学本郷キャンパス工学部広場 B3, 4"}
          </button>
          <RiLinksLine
            className={css({
              display: "inline",
              height: "1rem",
              width: "1rem",
            })}
          />
        </div>
      </SubSection>

      <SubSection title={"推定待ち時間"}>
        <WaitingTimes />
      </SubSection>
    </Section>
  );
};
