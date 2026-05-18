import { styled } from "../../styles";

export const CheckoutContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "0.75rem",
  width: "100%",
  flexDirection: "row",

  "@sm": {
    flexDirection: "column",
    textAlign: "center",

    svg: {
      marginTop: "-3.5rem",
    },
  },

  "@lg": {
    flexDirection: "column",
    textAlign: "left",
  },
});

export const TitleLocal = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "1rem",

  svg: {
    color: "$yellow500",
    marginTop: "5px",
    width: "1.6rem",
    height: "auto",
  },

  h1: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "$brown900",
  },

  span: {
    fontSize: "$sm",
    color: "$brown500",
  },

  "@sm": {
    textAlign: "center",

    svg: {
      marginTop: "-3.5rem",
    },
  },
});

export const InputLocal = styled("div", {
  backgroundColor: "$bege100",
  padding: "2rem",
  borderRadius: "10px",
  width: "100%",
  boxSizing: "border-box",
  gap: "1rem",

  input: {
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "100%",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid $bege200",
    backgroundColor: "$bege150",
    color: "$brown500",
  },

  "@md": {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  "@sm": {
    padding: "1.25rem",

    input: {
      width: "100% !important",
      fontSize: "16px",
      padding: "0.875rem",
    },
  },
});

export const FormContainer = styled("div", {
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  "@sm": {
    width: "100%",
    alignItems: "stretch",
  },
});

export const Input1 = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
  gap: "0.75rem",

  "@sm": {
    width: "100%",
  },
});

export const Input2 = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
  gap: "0.75rem",

  "@media (min-width: 600px)": {
    flexDirection: "row",

    "input:first-child": {
      width: "50%",
    },
  },

  "@sm": {
    width: "100%",
    flexDirection: "column",
  },
});

export const Input3 = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
  gap: "0.75rem",

  "@media (min-width: 600px)": {
    flexDirection: "row",

    "input:nth-child(1)": {
      width: "60%",
    },

    "input:nth-child(3)": {
      width: "10%",
    },
  },

  "@sm": {
    width: "100%",
    flexDirection: "column",
  },
});

export const PayPlace = styled("div", {
  backgroundColor: "$bege100",
  padding: "2rem",
  borderRadius: "10px",
  width: "100%",
  boxSizing: "border-box",

  "@lg": {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

    input: {
      width: "100%",
      maxWidth: "90%",
      padding: "0.75rem",
    },
  },

  "@sm": {
    padding: "1.25rem",
  },
});

export const TitlePayPlace = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.5rem",
  marginBottom: "1rem",

  svg: {
    color: "$yellow200",
    marginTop: "5px",
    width: "1.6rem",
    height: "auto",
  },

  h1: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "$brown900",
  },

  span: {
    fontSize: "$sm",
    color: "$brown500",
  },

  "@sm": {
    textAlign: "left",
    alignItems: "flex-start",

    h1: {
      fontSize: "1.2rem",
    },

    svg: {
      marginTop: 0,
      flexShrink: 0,
    },
  },
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",

  "@media (max-width: 600px)": {
    flexDirection: "column",
  },

  "@md": {
    flexWrap: "wrap",
  },

  "@sm": {
    flexDirection: "column",
    width: "100%",
  },
});

export const PaymentButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  cursor: "pointer",
  minWidth: "130px",
  padding: "1rem",
  fontSize: "$sm",
  textTransform: "uppercase",
  color: "$gray900",

  borderRadius: "6px",
  border: "1px solid $bege200",
  backgroundColor: "$bege150",

  svg: {
    verticalAlign: "middle",
    margin: 0,
    color: "$brown500",
  },

  "&:hover": {
    backgroundColor: "$bege200",
    transition: "background-color 0.3s",
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$yellow100",
        borderColor: "$yellow300",

        svg: {
          color: "$yellow500",
        },

        "&:hover": {
          backgroundColor: "$yellow100",
        },
      },
    },
  },

  "@md": {
    flex: "1 1 calc(50% - 0.375rem)",
    minWidth: 0,
  },

  "@sm": {
    width: "100%",
    justifyContent: "flex-start",
    padding: "0.875rem 1rem",
  },
});

export const CartContainer = styled("div", {
  marginTop: "1rem",
  background: "linear-gradient(160deg, #fdf8f3 0%, #f8f0e6 100%)",
  padding: "1.75rem",
  borderRadius: "0 1.75rem",
  maxWidth: "400px",
  maxHeight: "480px",
  width: "100%",
  border: "1px solid rgba(107, 78, 47, 0.12)",
  boxShadow:
    "0 4px 24px rgba(59, 47, 47, 0.08), 0 1px 4px rgba(59, 47, 47, 0.05)",

  display: "flex",
  flexDirection: "column",

  h3: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "$brown900",
    marginBottom: "1.25rem",
    paddingBottom: "0.875rem",
    borderBottom: "1px solid rgba(107, 78, 47, 0.12)",
  },

  "@md": {
    maxWidth: "100%",
    maxHeight: "none",
  },

  "@sm": {
    maxWidth: "100%",
    maxHeight: "none",
    borderRadius: "10px",
    padding: "1.25rem",
  },
});

export const ItemContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "$bege150",
  padding: "0.875rem",
  borderRadius: "12px",
  marginBottom: "0.625rem",
  border: "1px solid $bege200",
  gap: "0.75rem",

  "&:hover": {
    boxShadow: "0 3px 12px rgba(59,47,47,0.1)",
    transform: "translateY(-1px)",
  },

  img: {
    width: "48px",
    height: "48px",
    objectFit: "contain",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #f8f4ef, #f0e0ce)",
    padding: "4px",
    flexShrink: 0,

    "@media (min-width: 480px)": {
      width: "52px",
      height: "52px",
    },

    "@sm": {
      width: "56px !important",
      height: "56px !important",
      marginRight: "0.75rem",
    },
  },

  strong: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "$brown900",
  },

  "@sm": {
    padding: "0.75rem",
  },
});

export const ItemListContainer = styled("div", {
  maxHeight: "220px",
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: "4px",
  marginBottom: "0.875rem",
  width: "100%",

  "&::-webkit-scrollbar": {
    width: "4px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(107,78,47,0.3)",
    borderRadius: "4px",
  },

  "@md": {
    maxHeight: "180px",
  },

  "@sm": {
    maxHeight: "200px",
  },
});

export const ButtonCart = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "0.5rem",

  button: {
    background: "transparent",
    border: "1px solid rgba(107, 78, 47, 0.2)",
    padding: "0.25rem 0.625rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.72rem",
    fontWeight: 500,
    color: "$brown500",
    letterSpacing: "0.02em",
    transition: "all 0.2s ease",

    "&:hover": {
      background: "rgba(107, 78, 47, 0.08)",
      borderColor: "$brown500",
      color: "$brown900",
    },
  },
});

export const ButtonQuant = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(135deg, #f3e9dd, #f0e0ce)",

  borderRadius: "8px",
  padding: "0 2px",
  border: "1px solid rgba(107, 78, 47, 0.12)",
  overflow: "hidden",

  span: {
    fontSize: "$sm",
    fontWeight: 700,
    color: "$brown900",
    minWidth: "22px",
    textAlign: "center",
    lineHeight: 1,
  },

  button: {
    background: "none",
    border: "none",
    fontSize: "1.1rem",
    color: "$brown500",
    fontWeight: 700,
    cursor: "pointer",
    width: "28px",
    height: "28px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    transition: "background 0.15s",

    "&:hover": {
      background: "rgba(107, 78, 47, 0.1)",
      color: "$brown900",
    },
  },
});

export const InfoConfirm = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",

  h1: {
    color: "$brown900",
    fontSize: "1.4rem",
    fontWeight: 800,

    "@sm": {
      fontSize: "1.3rem",
    },
  },

  span: {
    color: "$brown500",
    fontSize: "0.8rem",
    opacity: 0.8,
  },

  button: {
    marginTop: "0.5rem",
    width: "100%",
    padding: "0.875rem",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #3b2f2f 0%, #5a3e2b 100%)",

    color: "$bege100",
    fontSize: "0.95rem",
    fontWeight: 700,
    cursor: "pointer",

    "&:hover": {
      background: "linear-gradient(135deg, #4e3b2e 0%, #6b4e2f 100%)",
    },

    "@sm": {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
});
