import { Section } from "../Section/Section";
import { css } from "@panda/css";
import Image from "next/image";

export const FoodDrinkMenu = () => {
  return (
    <Section id="menu">
      <div
        className={css({
          width: "full",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        })}
      >
        <div
          className={css({
            width: "full",
            display: "flex",
            alignItems: "center",
          })}
        >
          <div
            className={css({
              textAlign: "center",
              width: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            })}
          >
            <p>
              <span
                className={css({
                  fontSize: "xl",
                })}
              >
                {"麻婆豆腐"}
              </span>
              <br />
              <span
                className={css({
                  fontSize: "3xl",
                  fontWeight: "extrabold",
                  color: "primary",
                })}
              >
                {"500"}
              </span>
              <span
                className={css({
                  fontSize: "xl",
                })}
              >
                {"円"}
              </span>
            </p>
            <p>
              <span
                className={css({
                  fontSize: "xl",
                })}
              >
                {"塩にぎり"}
              </span>
              <br />
              <span
                className={css({
                  fontSize: "3xl",
                  fontWeight: "extrabold",
                  color: "primary",
                })}
              >
                {"200"}
              </span>
              <span
                className={css({
                  fontSize: "xl",
                })}
              >
                {"円"}
              </span>
            </p>
            <p>
              <span
                className={css({
                  fontSize: "xl",
                })}
              >
                {"ビール"}
              </span>
              <br />
              <span
                className={css({
                  fontSize: "3xl",
                  fontWeight: "extrabold",
                  color: "primary",
                })}
              >
                {"700"}
              </span>
              <span
                className={css({
                  fontSize: "xl",
                })}
              >
                {"円"}
              </span>
            </p>
          </div>
          <Image
            height={100}
            width={100}
            className={css({
              objectFit: "contain",
              objectPosition: "center",
              width: "60%",
              rounded: "lg",
            })}
            src="/mapo-dish.jpg"
            alt="Mapo Tofu Dish"
          />
        </div>
      </div>
    </Section>
  );
};
