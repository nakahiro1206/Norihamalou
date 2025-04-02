import { Section } from "../Section/Section";
import { css } from "@panda/css";
import { scrollToSection } from "../ScrollPlugin/ScrollPlugin";
import { WaitingTimes } from "../WaitTimes";

export const Info = () => {
  return (
    <Section id="info">
      <p>
        {`昨年の五月祭で 1000 食超を提供し大きな反響を呼んだ “本格麻婆豆腐 乘濵楼” が今年の五月祭に帰ってきます！！

      都内の麻婆豆腐を100軒以上食べめぐった東大生が、本気で届ける究極の麻婆豆腐。
      今年も試作を重ね、去年より進化させます🔥`}
      </p>
      <div>{"開催日程: 第98回五月祭 2025/5/24(Sat.) ~ 2025/5/25(Sun.)"}</div>
      <button onClick={() => scrollToSection("greetings")}>
        {"開催場所: 東京大学本郷キャンパス工学部広場 B3, 4"}
        {" << TODO: add external link icon"}
      </button>
      <div
        className={css({
          display: "flex",
          width: "full",
        })}
      >
        {"推定待ち時間: "}
        <WaitingTimes />
        {"分"}
      </div>
    </Section>
  );
};
