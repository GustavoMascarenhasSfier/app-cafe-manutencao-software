// src/styles/index.ts
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme, config } = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",

      gray100: "#f8f4ef", // antes: bege-claro
      gray900: "#2d2d2d", // antes: preto-fosco

      brown900: "#3b2f2f", // antes: marrom-escuro
      brown700: "#6b4e2f", // antes: marrom-cafe

      yellow500: "#f3c300", // antes: amarelo-mostarda

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

export const globalStyles = globalCss({
  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
  },
});
