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

  "@lg": {
    flexDirection: "column",
    gap: "2rem",
    textAlign: "center",

    img: {
      maxWidth: "100%",
    },
  },
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

export const LojaContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margiTop: "3rem",
  fontSize: "2rem",
  color: "$brown900",
});

export const CardsContainer = styled("div", {
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
  marginTop: "1rem",
});

export const Card = styled("div", {
  marginTop: "2rem",
  borderRadius: "0 25px",
  backgroundColor: "$bege100",
  padding: "1rem",
  width: "20rem",
  minHeight: "19rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  border: "2px solid $bege200",

  img: {
    marginTop: "-60px",
  },

  "@md": {
    width: "19rem",
    marginTop: "1rem",
  },

  "@sm": {
    width: "17rem",
  },
});

export const CardHeader = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const TagGroup = styled("div", {
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "0.75rem",
});

export const Tag = styled("span", {
  backgroundColor: "$bege100)",
  color: "$yellow500",
  fontWeight: "bold",
  borderRadius: "999px",
  padding: "0.25rem 0.75rem",
  fontSize: "0.65rem",
  textTransform: "uppercase",
});

export const CardContent = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "1rem 0",
  gap: "0.5rem",
  flex: 1,
});

export const Title = styled("h3", {
  color: "$brown900",
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginTop: "0.5rem",
});

export const Descricao = styled("p", {
  color: "$brown500",
  marginTop: "0.5rem",
});

export const CardFooter = styled("footer", {
  width: "100%",
  marginTop: "auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "1rem",
});

export const Price = styled("div", {
  fontSize: "1.5rem",

  "&::before": {
    content: '"R$ "',
    fontSize: "1rem",
  },

  strong: {
    fontWeight: "bold",
    color: "$gray900",
  },
});

export const QuantityButton = styled("div", {
  background: "$bege150",

  display: "flex",
  alignItems: "center",

  borderRadius: "6px",
  padding: "0.5rem",

  button: {
    background: "transparent",
    border: "none",
    color: "$yellow500",
    fontSize: "1.5rem",
    cursor: "pointer",
  },

  span: {
    margin: "0 0.5rem",
    color: "$yellow500",
  },
});

export const CartButton = styled("button", {
  backgroundColor: "$brown900",
  border: "none",
  borderRadius: "12px",

  padding: "0.8rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",
  color: "white",

  transition: "0.2s",

  "&:hover": {
    backgroundColor: "$brown500",
  },

  "&:active": {
    transform: "scale(0.95)",
  },
});
