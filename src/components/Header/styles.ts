import { styled } from "../../styles";

export const PageHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  height: "89px",
  gap: "16px",
  padding: "18px 32px",
  background: "rgba(57, 53, 50, 0.97)",
  backdropFilter: "blur(12px)",
  borderBottom: "0.5px solid $gold300",
  position: "sticky",
  top: 0,
  zIndex: 999,
  fontFamily: "'DM Sans', sans-serif",

  "@md": {
    padding: "14px 20px",
    height: "auto",
    flexWrap: "wrap",
    gap: "10px",
  },

  "@sm": {
    padding: "12px 16px",
    flexWrap: "wrap",
    gap: "8px",
  },
});

export const LogoPlaceholder = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,
});

export const LogoIcon = styled("img", {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, $gold200, $gold100)",
  objectFit: "contain",
  padding: "4px",
});

export const LogoText = styled("h1", {
  fontFamily: "'Playfair Display', serif",
  fontSize: "17px",
  fontWeight: 700,
  color: "$white",
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
  margin: 0,

  span: {
    color: "$gold100",
  },

  "@sm": {
    fontSize: "14px",
  },
});

export const SearchContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flex: 1,
  justifyContent: "center",
  margin: "0 190px",
  maxWidth: "620px",
  background: "rgba(255, 255, 255, 0.06)",
  border: "0.5px solid $gold300",
  borderRadius: "100px",
  padding: "0 6px 0 20px",
  transition: "border-color 0.2s",

  "&:focus-within": {
    borderColor: "$gold200",
  },

  "@lg": {
    margin: "0 40px",
  },

  "@md": {
    margin: "0",
    order: 3,
    flex: "1 1 100%",
    width: "100%",
  },

  "@sm": {
    margin: "0",
    order: 3,
    flex: "1 1 100%",
    width: "100%",
  },
});

export const SearchInput = styled("input", {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  fontSize: "13px",
  color: "$white",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  padding: "10px 0",

  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.35)",
  },
});

export const SearchButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  background: "linear-gradient(135deg, $gold200, $gold100)",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  color: "$black",
  fontSize: "14px",
  flexShrink: 0,
  transition: "opacity 0.2s",

  "&:hover": {
    opacity: 0.85,
  },
});

export const SearchWrapper = styled("div", {
  position: "relative",
  flex: 1,
  maxWidth: "620px",
  margin: "0 auto",
});

export const SearchResults = styled("div", {
  position: "absolute",
  top: "60px",
  left: 0,
  width: "100%",
  background: "rgba(57, 53, 50, 0.98)",
  border: "0.5px solid $gold300",
  borderRadius: "16px",
  overflow: "hidden",
  zIndex: 1000,
  backdropFilter: "blur(12px)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
});

export const SearchItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "14px 18px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  "&:hover": {
    background: "rgba(201, 155, 78, 0.12)",
  },

  "&:not(:last-child)": {
    borderBottom: "0.5px solid rgba(255,255,255,0.05)",
  },
});

export const SearchItemTitle = styled("span", {
  color: "$white",
  fontSize: "14px",
  fontWeight: 500,
  fontFamily: "'DM Sans', sans-serif",
});

export const EmptySearch = styled("div", {
  padding: "16px",
  textAlign: "center",
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
});

export const CartContainer = styled("div", {
  background: "transparent",
  marginLeft: "auto",

  "@md": {
    marginLeft: "auto",
  },

  "@sm": {
    marginLeft: "auto",
  },
});

export const CartLink = styled("a", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "$gold400",
  border: "0.5px solid $gold300",
  borderRadius: "100px",
  padding: "8px 16px",
  textDecoration: "none",
  color: "$gold200",
  transition: "background 0.2s",

  "&:hover": {
    background: "rgba(201, 155, 78, 0.22)",
    color: "$gold200",
  },
});

export const CartLabel = styled("span", {
  fontSize: "13px",
  fontWeight: 500,
  fontFamily: "'DM Sans', sans-serif",
  color: "$gold200",
});

export const CartBadge = styled("span", {
  background: "$gold200",
  color: "$black",
  borderRadius: "50%",
  width: "18px",
  height: "18px",
  fontSize: "10px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});