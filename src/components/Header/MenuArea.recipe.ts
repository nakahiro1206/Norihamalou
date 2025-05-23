import { css, sva, cva } from "@panda/css";

export const menuItemFrameStyles = cva({
  base: {
    width: "full",
    height: "calc(10vh)",
    paddingX: "4",
    paddingBottom: "2",
    paddingTop: "2",
  },
  variants: {
    order: {
      "1st": {
        paddingTop: "4",
      },
    },
  },
});

export const menuWrapperStyles = cva({
  base: {
    width: "full",
    position: "fixed",
    top: "calc(5lvh)",
    overflow: "hidden",
    borderRadius: "0 0 0.5rem 0.5rem",
    backgroundColor: "white",
    textAlign: "center",
  },
  variants: {
    state: {
      open: {
        animationName: "expandDown",
        animationDuration: "0.8s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
      },
      closed: {
        animationName: "collapseUp",
        animationDuration: "0.8s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
      },
    },
  },
  defaultVariants: {
    state: "closed",
  },
});

export const mediaIconStyles = cva({
  base: {
    width: "full",
    gap: "0.5rem",
    display: "flex",
    justifyContent: "center",
  },
  variants: {
    state: {
      open: {
        animationName: "moveIn",
        animationDuration: "0.7s",
        animationDelay: "0.3s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
      },
      closed: {
        animationName: "moveOut",
        animationDuration: "0.7s",
        animationDelay: "0s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
      },
    },
  },
  defaultVariants: {
    state: "closed",
  },
});

export const menuItemStyles = cva({
  base: {
    display: "flex",
    width: "full",
    height: "full",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray.100",
    borderRadius: "xl",
  },
  variants: {
    state: {
      open: {
        animationName: "moveIn",
        animationDuration: "0.5s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
        animationDelay: "0s",
      },
      closed: {
        animationName: "moveOut",
        animationDuration: "0.5s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
        animationDelay: "0s",
      },
    },
    order: {
      "1st": {},
      "2nd": {},
      "3rd": {},
      "4th": {},
      "5th": {},
      "6th": {},
      "7th": {},
    },
  },
  compoundVariants: [
    {
      state: "open",
      order: "1st",
      css: { animationDuration: "0.1s", animationDelay: "0s" },
    },
    {
      state: "open",
      order: "2nd",
      css: { animationDuration: "0.2s", animationDelay: "0.05s" },
    },
    {
      state: "open",
      order: "3rd",
      css: { animationDuration: "0.3s", animationDelay: "0.1s" },
    },
    {
      state: "open",
      order: "4th",
      css: { animationDuration: "0.4s", animationDelay: "0.15s" },
    },
    {
      state: "open",
      order: "5th",
      css: { animationDuration: "0.5s", animationDelay: "0.2s" },
    },
    {
      state: "open",
      order: "6th",
      css: { animationDuration: "0.6s", animationDelay: "0.25s" },
    },
    {
      state: "open",
      order: "7th",
      css: { animationDuration: "0.7s", animationDelay: "0.3s" },
    },

    {
      state: "closed",
      order: "1st",
      css: { animationDuration: "0.1s", animationDelay: "0.3s" },
    },
    {
      state: "closed",
      order: "2nd",
      css: { animationDuration: "0.2s", animationDelay: "0.25s" },
    },
    {
      state: "closed",
      order: "3rd",
      css: { animationDuration: "0.3s", animationDelay: "0.2s" },
    },
    {
      state: "closed",
      order: "4th",
      css: { animationDuration: "0.4s", animationDelay: "0.15s" },
    },
    {
      state: "closed",
      order: "5th",
      css: { animationDuration: "0.5s", animationDelay: "0.1s" },
    },
    {
      state: "closed",
      order: "6th",
      css: { animationDuration: "0.6s", animationDelay: "0.05s" },
    },
    {
      state: "closed",
      order: "7th",
      css: { animationDuration: "0.7s", animationDelay: "0s" },
    },
  ],

  defaultVariants: {
    state: "closed",
    order: "1st",
  },
});
