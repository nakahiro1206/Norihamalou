import React, { FC } from "react";
import { Section } from "../Section/Section";
import { css } from "@panda/css";
import { scrollToSection } from "../ScrollPlugin/ScrollPlugin";
import { RiLinksLine, RiTwitterXLine, RiInstagramLine } from "@remixicon/react";
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

export const Info = ({ wait, error }: { wait: number | null, error: string | null }) => {
  return (
    <Section id="info">
      <div
        className={css({
          width: "full",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          color: "beige",
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
            "都内の麻婆豆腐を100軒以上食べめぐった東大生が、本気で届ける究極の麻婆豆腐。試作と改良を重ね、去年よりも進化した味をお楽しみください。"
          }
        </p>

        <SubSection title={"開催日程"}>
          <div
            className={css({
              width: "full",
              textAlign: "center",
              color: "white",
            })}
          >
            {"第98回五月祭"}
            <br />
            {"2025年5月24日(土) - 25日(日)"}
          </div>
        </SubSection>

        <SubSection title={"開催場所"}>
          <button
            className={css({
              textAlign: "center",
              width: "full",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            })}
            onClick={() => scrollToSection("access")}
          >
            <div>{"東京大学本郷キャンパス"}</div>
            <div>
            <span
              className={css({
                color: "white",
                textDecoration: "underline",
                textDecorationColor: "white",
                textDecorationThickness: "0.05rem",
              })}
            >
              <RiLinksLine
              className={css({
                display: "inline-block",
                height: "1rem",
                width: "1rem",
                margin: '0 auto',
                color: "white",
                textAlign: "center",
              })}
            />
              {"工学部広場 B3, 4 (スターバックス 東京大学工学部店前)"}
            </span>
            
            </div>
          </button>
        </SubSection>

        <SubSection title={"推定待ち時間"}>
          <div
            className={css({
              width: "full",
              textAlign: "center",
              color: "white",
            })}
          >
            {`約`}
            <span className={css({
              fontWeight: "900",
              color: "primary",
              fontSize: 'xl',
              paddingX: '0.25rem',
            })}>
              {`${wait}`}
            </span>
            {"分"}
          </div>
        </SubSection>

        <SubSection title={"投票フォーム"}>
          <Link href="https://gogatsusai.jp/98/visitor/project/165">
            <div
              className={css({
                width: "full",
                textAlign: "center",
              })}
            >
              <span
                className={css({
                  color: "white",
                  textDecoration: "underline",
                  textDecorationColor: "white",
                  textDecorationThickness: "0.05rem",
                })}
              >
                <RiLinksLine
                className={css({
                  display: "inline-block",
                  height: "1rem",
                  width: "1rem",
                  margin: '0 auto',
                  color: "white",
                })}/>
                {"投票フォームのご回答にご協力ください"}
              </span>
            </div>
          </Link>
        </SubSection>

        <SubSection title={"アンケート"}>
        <Link href="https://forms.gle/4P2rEoSPLqjzYC4y5">
            <div
              className={css({
                width: "full",
                textAlign: "center",
              })}
            >
              <span
                className={css({
                  color: "white",
                  textDecoration: "underline",
                  textDecorationColor: "white",
                  textDecorationThickness: "0.05rem",
                })}
              >
                <RiLinksLine
                className={css({
                  display: "inline-block",
                  height: "1rem",
                  width: "1rem",
                  margin: '0 auto',
                  color: "white",
                })}/>
                {"ご意見・ご感想をお聞かせください"}
              </span>
            </div>
          </Link>
        </SubSection>

        <SubSection title={"SNS"}>
          <div
            className={css({
              width: "full",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            })}
          >
            <Link href="https://www.instagram.com/norihamaro">
                <RiInstagramLine
                  className={css({
                    width: "1.5rem",
                    height: "1.5rem",
                  })}
                />
              </Link>
              <Link href="https://x.com/Norihamaro">
                <RiTwitterXLine
                  className={css({
                    width: "1.5rem",
                    height: "1.5rem",
                  })}
                />
              </Link>
          </div>
        </SubSection>
      </div>
    </Section>
  );
};
