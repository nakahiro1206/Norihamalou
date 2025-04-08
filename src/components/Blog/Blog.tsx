import React from "react";
import { Section } from "@/components/Section/Section";
import { css } from "@panda/css";

export const Blog = () => {
  return (
    <Section id="blog">
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
