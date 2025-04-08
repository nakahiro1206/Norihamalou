import { Section } from "../Section/Section";
import { RiBeerFill, RiBowlFill } from "@remixicon/react";
import { css } from "@panda/css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const FoodDrinkMenu = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  return (
    <Section id="menu">
      <div
        className={css({
          width: "full",
        })}
      >
        <div
          className={css({
            width: "full",
            position: "relative",
          })}
        >
          <Image
            className={css({
              objectFit: "contain",
              objectPosition: "center",
              width: "full",
              rounded: "lg",
            })}
            src="/mapo-dish.jpg"
            alt="Mapo Tofu Dish"
            height={500}
            width={500}
          />
          <div
            ref={ref}
            className={css({
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              alignItems: "center",
              backgroundColor: inView ? "rgba(255, 255, 255, 0.5)" : "",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.5rem",
              fontWeight: "bold",
              animationName: inView ? "fadeIn" : "",
              animationDuration: "0.5s",
              animationTimingFunction: "ease-in-out",
              animationFillMode: "forwards",
            })}
          >
            {inView && (
              <>
                <RiBowlFill />
                <p>MAPO-TOFU</p>
                <RiBeerFill />
                <p>BEER</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
