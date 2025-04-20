import { Section } from "../Section/Section";
import { css } from "@panda/css";
import Image from "next/image";

export const FoodDrinkMenu = () => {
  return (
    <Section id="menu">
      <p
        className={css({
          width: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        })}
      >
        <span>{"麻婆豆腐"}</span>
        <span
          className={css({
            fontSize: "lg",
            fontWeight: "extrabold",
            color: "primary",
          })}
        >
          {"500"}
        </span>
        <span>{"円"}</span>
      </p>
      <div
        className={css({
          textAlign: "left",
          width: "full",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <p
          className={css({
            width: "fit",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "0.5rem",
          })}
        >
          <span>{"塩にぎり"}</span>
          <span
            className={css({
              fontSize: "lg",
              fontWeight: "extrabold",
              color: "primary",
            })}
          >
            {"200"}
          </span>
          <span>{"円"}</span>
        </p>
        <p
          className={css({
            width: "fit",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "0.5rem",
          })}
        >
          <span>{"ビール"}</span>
          <span
            className={css({
              fontSize: "lg",
              fontWeight: "extrabold",
              color: "primary",
            })}
          >
            {"700"}
          </span>
          <span>{"円"}</span>
        </p>
      </div>
      <div
        className={css({
          width: "full",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          paddingTop: "1rem",
        })}
      >
        <Image
          height={2400}
          width={3500}
          className={css({
            objectFit: "contain",
            objectPosition: "center",
            width: "full",
            rounded: "25%",
          })}
          src="/mapo-menu.jpg"
          // "/mapo-menu-prev.png"
          alt="Mapo Tofu Dish"
        />
      </div>
    </Section>
  );
};
