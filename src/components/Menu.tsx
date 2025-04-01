import { Section } from "./Section";
import { RiBeerFill, RiBowlFill } from "@remixicon/react";
import { css } from "@panda/css";

export const FoodDrinkMenu = () => {
  return (
    <Section id="menu">
      <div
        className={css({
          width: "full",
          padding: "0.5rem",
        })}
      >
        under development...
        <div
          className={css({
            width: "full",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          })}
        >
          <RiBowlFill />
          <p>MAPO-TOFU</p>
        </div>
        <div
          className={css({
            width: "full",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          })}
        >
          <RiBeerFill />
          <p>BEER</p>
        </div>
      </div>
    </Section>
  );
};
