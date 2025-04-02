import { css } from "@panda/css";
import { WaitingTimes } from "../WaitTimes";

export const FloatingButton = () => {
  return (
    <div
      className={css({
        width: "10lvh",
        height: "calc(15lvh+0.5rem)",
        position: "fixed",
        bottom: "5%",
        right: "5%",

        rounded: "full",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          width: "full",
          height: "10lvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          rounded: "full",
          marginBottom: "0.5rem",
        })}
      >
        Anticipated Waiting Time
        <WaitingTimes />
      </div>
      <div
        className={css({
          width: "full",
          height: "5lvh",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          rounded: "xl",
        })}
      >
        Vote from Here!
      </div>
    </div>
  );
};
