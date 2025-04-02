import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        "3xl": "1800px",
      },
      tokens: {
        colors: {
          beige: { value: "rgba(241,235,215,255)" }, // norihamalou-unique beige color
          primary: { value: "rgba(204,0,18,255)" }, // norihama-lou unique color
          secondary: { value: "#0070f3" },
          accent: { value: "#0070f3" },
          neutral: { value: "#0070f3" },
          base: { value: "#0070f3" },
          info: { value: "#0070f3" },
          success: { value: "#0070f3" },
          warning: { value: "#0070f3" },
          error: { value: "#0070f3" },
        },
        fonts: {
          zenOldMincho: { value: "var(--fonts-zen-old-mincho), sans-serif" },
          hinaMincho: { value: "var(--fonts-hina-mincho), sans-serif" },
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
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
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

  // The output directory for your css system
  outdir: "styled-system",
});
