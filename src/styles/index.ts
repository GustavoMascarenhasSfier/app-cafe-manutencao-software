import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",

      gray100: "#f8f4ef",
      gray900: "#2d2d2d",

      brown900: "#3b2f2f",
      brown700: "#6b4e2f",

      yellow300: "#fadd6a",
      yellow500: "#f3c300",

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
