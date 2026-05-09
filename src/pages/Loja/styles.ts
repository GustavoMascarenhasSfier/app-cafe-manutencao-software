import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const DescriptionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  gap: "7rem",
});

export const Description = styled("div", {
  maxWidth: "600px",

  h2: {
    fontSize: "3.2rem",
    fontWeight: 800,
    lineHeight: 1.3,
    color: "$brown900", // brown
  },

  span: {
    fontSize: "1.4rem",
    color: "$brown500", // brown-cafe
  },
});

export const Benefits = styled("div", {
  marginTop: "2.5rem",
  ul: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
    marginTop: "2rem",
    listStyle: "none",
    color: "$brown900",
    padding: "0px",
  },
  li: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "$gray900",
    fontSize: "1rem",
  },
});

export const IconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  color: "$white",
  flexShrink: 0,

  svg: {
    width: "1rem",
    height: "1rem",
  },

  variants: {
    variant: {
      yellowDark: { backgroundColor: "$brown900" },
      yellow: { backgroundColor: "$yellow500" },
      gray: { backgroundColor: "$gray900" },
      brown: { backgroundColor: "$brown900" },
    },
  },
});
