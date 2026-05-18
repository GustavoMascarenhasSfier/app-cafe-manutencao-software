import { styled } from "../../styles";

export const ReadyContainer = styled("div", {
  width: "100%",
  maxWidth: "100%",
  padding: "1.5rem 1rem",
  boxSizing: "border-box",
  overflowX: "hidden",

  h1: {
    fontSize: "1.6rem",
    fontWeight: 800,
    color: "$brown900",
    lineHeight: 1.2,
    marginBottom: "0.5rem",
  },

  "> span": {
    display: "block",
    fontSize: "0.95rem",
    color: "$brown500",
    marginBottom: "1.5rem",
  },

  "@media (min-width: 600px)": {
    padding: "2rem 1.5rem",

    h1: {
      fontSize: "2rem",
    },
  },

  "@media (min-width: 1024px)": {
    padding: "2.5rem 2rem",

    h1: {
      fontSize: "2.5rem",
    },
  },
});

export const ReadyContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  marginTop: "1.5rem",
  width: "100%",
  alignItems: "flex-start",

  "@media (min-width: 1024px)": {
    flexDirection: "row",
    alignItems: "center",
    gap: "5rem",
  },
});

export const InfoContainer = styled("div", {
  width: "100%",
  boxSizing: "border-box",
  padding: "1.25rem",
  border: "1px solid $yellow500",
  borderRadius: "0 1rem",
  background: "$bege100",

  "@media (min-width: 1024px)": {
    minWidth: "320px",
    maxWidth: "400px",
  },
});

export const BaseInfoRow = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.875rem",
  marginBottom: "1.25rem",

  svg: {
    width: "2rem",
    height: "2rem",
    minWidth: "2rem",
    borderRadius: "50%",
    padding: "0.45rem",
    color: "$white",
    flexShrink: 0,
  },

  p: {
    fontSize: "0.9rem",
    color: "$brown500",
    lineHeight: 1.4,
    margin: 0,

    strong: {
      color: "$brown900",
      display: "block",
    },
  },
});

export const EnderecoContainer = styled(BaseInfoRow, {
  svg: {
    backgroundColor: "$brown500",
  },
});

export const TimerContainer = styled(BaseInfoRow, {
  svg: {
    backgroundColor: "$yellow300",
  },
});

export const TypePayContainer = styled(BaseInfoRow, {
  marginBottom: 0,

  svg: {
    backgroundColor: "$brown900",
  },
});

export const CampoImg = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",

  img: {
    width: "100%",
    maxWidth: "280px",
    height: "auto",
    display: "block",

    "@media (min-width: 600px)": {
      maxWidth: "340px",
    },

    "@media (min-width: 1024px)": {
      maxWidth: "420px",
    },
  },
});
