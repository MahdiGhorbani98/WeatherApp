import styled from "@emotion/styled";

export const Heading = styled.h3(({ bgColor }) => ({
  backgroundColor: bgColor,
  color: "#fff",
  padding: "10px 20px",
  borderRadius: 30,
  display: "inline-block",
}));
