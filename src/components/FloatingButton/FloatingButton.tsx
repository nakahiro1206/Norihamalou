import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import { css } from "@panda/css";
import { useHeroAreaContext } from "@/app/provider";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";

export const FloatingButton = ({ wait, error }: { wait: number | null, error: string | null }) => {
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
      <section
			className={css({
				display: "flex",
				flexDirection: "column",
				gap: "0.25rem",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				width: "max(5rem, 7.5%)",
				aspectRatio: "1/1",
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				boxShadow: "0 0 5rem rgba(0, 0, 0, 0.25)",
				borderRadius: "50%",
				fontWeight: "bold",
				color: "primary",
			})}
		>
			<CircularText
				text="予想待ち時間・"
				className={css({
					position: "absolute",
					color: "primary",
					display: { base: "block", xl: "none" },
				})}
			/>
			<CircularText
				text="予想待ち時間・Waiting Times・"
				className={css({
					position: "absolute",
					color: "primary",
					display: { base: "none", xl: "block" },
				})}
			/>
			{wait !== null ? (
				<p
					className={css({
						display: "flex",
						alignItems: "center",
						gap: "0.25rem",
					})}
				>
					<CountUp to={wait} delay={2} />分
				</p>
			) : (
				<p>...</p>
			)}
		</section>
    </div>
  );
};
