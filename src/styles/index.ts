import { createStitches } from "@stitches/react";

export const { styled, css, theme } = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",

      bege100: "#f8f4ef",
      bege150: "#f3e9dd",
      bege200: "#f0e0ce",

      gray900: "#2d2d2d",

      brown900: "#3b2f2f",
      brown500: "#6b4e2f", //brownCafe

      yellow100: "#f1e9c9",
      yellow200: "#dbac2c",
      yellow300: "#f3c300",
      yellow500: "#c47f17",

      gold100: "#E8C07A",
      gold200: "#C99B4E",
      gold300: "rgba(201, 155, 78, 0.3)",
      gold400: "rgba(201, 155, 78, 0.12)",
    },

    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "9xl": "6rem",
    },
  },
});
