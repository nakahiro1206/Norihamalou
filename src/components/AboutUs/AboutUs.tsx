import React from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";

export const AboutUs = () => {
  return (
    <Section id="about-us">
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
