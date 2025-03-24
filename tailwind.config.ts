module.exports = {
  theme: {
    extend: {
      keyframes: {
        "expand-down": {
          "0%": {
            height: "0",
            opacity: "0",
          },
          "100%": {
            height: "95lvh",
            opacity: "1",
          },
        },
      },
      animation: {
        "expand-down": "expand-down 1s ease-out forwards",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
