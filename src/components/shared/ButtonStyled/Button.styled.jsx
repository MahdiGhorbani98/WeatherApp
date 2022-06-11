import styled from "@emotion/styled";

export const Button = styled.button(({ border_radius }) => ({
  padding: "10px 10px",
  cursor: "pointer",
  border: "0",
  height: "100%",
  backgroundColor: "#000000",
  borderRadius: border_radius,
  transition: " 0.3s",
  "&:hover": {
    backgroundColor: "#4a4a4a",
  },
}));
