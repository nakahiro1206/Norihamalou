import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import { css } from "@panda/css";
import { WaitingTimes } from "./internal/WaitTimes";
import { useHeroAreaContext } from "@/app/provider";
export const FloatingButton = () => {
  const { inView: isHeroAreaInView } = useHeroAreaContext();
  if (isHeroAreaInView) return null;
  return (
    <div
      className={css({
        width: "full",
        height: "calc(15lvh+0.5rem)",
        position: "fixed",
        bottom: "0.5rem",

        rounded: "full",
        display: "flex",
        gap: "1rem",
        alignItems: "flex-end",
        justifyContent: "center",
      })}
    >
      <button
        type="button"
        className={css({
          flex: 1,
          background:
            "radial-gradient(circle at center, rgba(204,0,18,255), #f7471b)",
          padding: "1rem",
          rounded: "5rem",
          marginLeft: "6rem",
        })}
      >
        <ShinyText
          text="投票はこちらから！"
          speed={1.5}
          className={css({
            fontWeight: "bold",
            color: "#cccccc",
            lineHeight: "1.25",
            fontSize: "1.25rem",
          })}
        />
      </button>
      <WaitingTimes />
    </div>
  );
};
