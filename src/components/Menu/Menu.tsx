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
          justifyContent: "start",
          alignItems: "center",
          paddingTop: "1rem",
        })}
      >
        <Image
          height={500}
          width={500}
          className={css({
            objectFit: "contain",
            objectPosition: "center",
            width: "full",
            rounded: "lg",
          })}
          src="/mapo-zoom.jpg"
          alt="Mapo Tofu Dish"
        />
      </div>
      <div className={css({
        width: "full",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        paddingX: "1rem",
        paddingTop: "1rem"
      })}>
        <div className={css({
          width: '1/2',
          borderRight: 'solid 1px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'right',
          paddingRight: '1rem'
        })}>
          <div>{"麻婆豆腐"}</div>
          <div>{"塩にぎり"}</div>
          <div>{"ビール"}</div>
        </div>
        <div className={css({
          width: '1/2',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '1rem'
        })}>
          <div>
            <span
              className={css({
                fontSize: "lg",
                fontWeight: "extrabold",
                color: "primary",
                paddingRight: "0.5rem"
              })}
            >
              {"500"}
            </span>
            <span>{"円"}</span>
          </div>
          <div>
            <span
              className={css({
                fontSize: "lg",
                fontWeight: "extrabold",
                color: "primary",
                paddingRight: "0.5rem"
              })}
            >
              {"200"}
            </span>
            <span>{"円"}</span>
          </div>
          <div>
            <span
              className={css({
                fontSize: "lg",
                fontWeight: "extrabold",
                color: "primary",
                paddingRight: "0.5rem"
              })}
            >
              {"700"}
            </span>
            <span>{"円"}</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
