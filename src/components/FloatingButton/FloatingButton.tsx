import { css } from "@panda/css";
import { Section } from "../Section/Section";
import { RiExternalLinkLine } from "@remixicon/react";

export const FloatingButton = () => {
  return (
    <div
      className={css({
        width: "10lvh",
        height: "10vlh",
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
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          rounded: "xl",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <p>Vote from Here!</p>
        <RiExternalLinkLine />
        {/* <Section id="about-us"></Section> */}
      </div>
    </div>
  );
};
