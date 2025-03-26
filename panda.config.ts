import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
  layers: {
    utilities: "panda_utilities",
  },
  utilities: {
    extend: {
      br: {
        className: "rounded", // css({ br: "sm" }) => rounded-sm
        values: "radii", // connect values to the radii tokens
        transform(value) {
          return { borderRadius: value };
        },
      },
    },
  },
  theme: {
    extend: {
      breakpoints: {
        "3xl": "1800px",
      },
      tokens: {
        colors: {
          beige: { value: "rgba(246,230,208,255)" }, // norihamalou-unique beige color
          primary: { value: "rgba(208,33,26,255)" }, // norihama-lou unique color
          secondary: { value: "#0070f3" },
          accent: { value: "#0070f3" },
          neutral: { value: "#0070f3" },
          base: { value: "#0070f3" },
          info: { value: "#0070f3" },
          success: { value: "#0070f3" },
          warning: { value: "#0070f3" },
          error: { value: "#0070f3" },
        },
      },
      animationStyles: {
        "animate-expand-down": {
          value: {
            animation: "expandDown 0.5s ease-in-out",
          },
        },
        "animate-collapse": {
          value: {
            animation: "collapse 0.5s ease-in-out",
          },
        },
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
          "100%": {
            transform: "rotate(-3deg)",
          },
        },
        expandDown: {
          "0%": {
            height: "0",
            opacity: "0",
          },
          "100%": {
            height: "95lvh",
            opacity: "1",
            backgroundColor:
              "rgba(255, 255, 255, 0.75)" /* transparent white */,
          },
        },
        collapseUp: {
          "0%": {
            height: "95lvh",
            opacity: "1",
            backgroundColor:
              "rgba(255, 255, 255, 0.75)" /* transparent white */,
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        moveIn: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        moveOut: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },
    },
  },
});
