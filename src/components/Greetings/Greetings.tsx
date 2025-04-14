import React from "react";
import { Section } from "@/components/Section/Section";
import Image from "next/image";
import { css } from "@panda/css";
import { Devider } from "../Devider/Devider";
import { useInView } from "react-intersection-observer";

export const Greetings = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  return (
    <Section id="greetings">
      <div
        className={css({
          width: "full",
          rounded: "lg",
        })}
      >
        <div
          className={css({
            width: "full",
            display: "flex",
            alignItems: "center",
            rounded: "lg",
            gap: "1rem",
            position: "relative",
          })}
        >
          <Image
            src="/mapo.tiff"
            height={500}
            width={500}
            alt="Mapo Tofu"
            className={css({
              objectFit: "contain",
              objectPosition: "center",
              width: "full",
              rounded: "lg",
            })}
          />
          <div
            ref={ref}
            className={css({
              position: "absolute",
              rounded: "lg",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
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
                <div
                  className={css({
                    width: "full",
                    textAlign: "center",
                  })}
                >
                  {"ご挨拶"}
                </div>
                <Devider />
                {`数々の名店の麻婆豆腐を食べ巡った経験を活かし、この数年間麻婆豆腐作りに熱中してきました。
    その集大成に相応しい究極の麻婆豆腐が出来たと自負しております。

    皆さまのご来店を心よりお待ちしております。
    ー 乘濵駿平`}
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
