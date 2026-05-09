import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    fontFamily: "Roboto, sans-serif",
    WebkitFontSmoothing: "antialiased",
  },

  button: {
    cursor: "pointer",
  },
});
