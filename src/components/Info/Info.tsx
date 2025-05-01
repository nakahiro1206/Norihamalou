import React, { FC } from "react";
import { Section } from "../Section/Section";
import { css } from "@panda/css";
import { scrollToSection } from "../ScrollPlugin/ScrollPlugin";
import { useWaitingTime } from "@/services/waitingTime";
import { RiLinksLine, RiExternalLinkLine } from "@remixicon/react";
import Link from "next/link";

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
          paddingBottom: "0.25rem",
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
            paddingBottom: "0.25rem",
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
  const { data: wait } = useWaitingTime();
  return (
    <Section id="info">
      <div
        className={css({
          width: "full",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        })}
      >
        <p>
          {"昨年の五月祭で 1000 食超を提供し大きな反響を呼んだ"}
          <span
            className={css({
              fontWeight: "900",
            })}
          >
            {"「本格麻婆豆腐 乘濵楼」"}
          </span>
          {"が今年の五月祭に帰ってきます！！"}
          <br />
          {
            "都内の麻婆豆腐を100軒以上食べめぐった東大生が、本気で届ける究極の麻婆豆腐。今年も試作を重ね、去年より進化させます🔥"
          }
        </p>

        <SubSection title={"開催日程"}>
          <div
            className={css({
              width: "full",
              textAlign: "center",
            })}
          >
            {"第98回五月祭"}
            <br />
            {"2025/5/24(Sat.) ~ 2025/5/25(Sun.)"}
          </div>
        </SubSection>

        <SubSection title={"開催場所"}>
          <button
            className={css({
              textAlign: "center",
              width: "full",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
            onClick={() => scrollToSection("access")}
          >
            <p
              className={css({
                textDecoration: "underline",
                color: "sky.700",
              })}
            >
              {"東京大学本郷キャンパス"}
              <br />
              {"工学部広場 B3, 4"}
            </p>
            <RiLinksLine
              className={css({
                display: "inline",
                height: "1rem",
                width: "1rem",
                marginLeft: "0.5rem",
                color: "sky.700",
              })}
            />
          </button>
        </SubSection>

        <SubSection title={"推定待ち時間"}>
          <div
            className={css({
              width: "full",
              textAlign: "center",
            })}
          >
            {`推定待ち時間: ${wait}`}
            {"分"}
          </div>
        </SubSection>

        <SubSection title={"投票フォーム"}>
          <Link href="/">
            {/* should change the link to vote form! */}
            <div
              className={css({
                width: "full",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <p
                className={css({
                  textDecoration: "underline",
                  color: "sky.700",
                })}
              >
                {"投票フォームのご回答に"}
                <br />
                {"ご協力ください！"}
              </p>
              <RiExternalLinkLine
                className={css({
                  display: "inline",
                  height: "1rem",
                  width: "1rem",
                  marginLeft: "0.5rem",
                  color: "sky.700",
                })}
              />
            </div>
          </Link>
        </SubSection>
      </div>
    </Section>
  );
};
