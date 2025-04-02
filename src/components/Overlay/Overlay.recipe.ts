import { sva } from "@panda/css";

export const overlayStyles = sva({
  slots: ["image", "background"],
  base: {
    background: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "primary",
    },
    image: {
      width: "full",
      height: "full",
      objectFit: "contain",
      objectPosition: "center",
    },
  },
  variants: {
    mode: {
      enter: {
        background: {},
        image: {
          animationName: "fadeIn",
          animationDuration: "0.5s",
          animationTimingFunction: "ease-in-out",
          animationFillMode: "forwards",
        },
      },
      leave: {
        background: {
          animationName: "fadeOut",
          animationDuration: "0.5s",
          animationTimingFunction: "ease-in-out",
          animationFillMode: "forwards",
        },
        image: {},
      },
    },
  },
  defaultVariants: {
    mode: "enter",
  },
});
