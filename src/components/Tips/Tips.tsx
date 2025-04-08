import React from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";

export const Tips = () => {
  return (
    <Section id="tips">
      <div
        className={css({
          width: "full",
        })}
      >
        Hello, World!
      </div>
    </Section>
  );
};
