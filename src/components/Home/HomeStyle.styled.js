import styled from "@emotion/styled";

export const Container = styled.div(({ bgImg }) => ({
  padding: "40px",
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  height: "100vh",
  textAlign: "center",
}));

export const Heading3 = styled.h3(({ bgColor }) => ({
  backgroundColor: bgColor,
  color: "#fff",
  padding: "10px 20px",
  borderRadius: 30,
  display: "inline-block",
}));

export const InputContainer = styled.div({
  margin: "0 0 40px 0",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Input = styled.input({
  boxSizing: "content-box ",

  height: "100%",
  fontSize: "20px",
  padding: "0 20px",
  color: "#df185a",

  border: "0px solid #85848481",
  outline: "none",
  "&:focus": {
    "::placeholder ": {
      color: "#df185a91",
    },
  },
  "::placeholder ": {
    color: "#000000b8",
  },
  "@media (max-width: 425px)": {
    width: " 100%",
  },
});

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

export const Image = styled.img({
  padding: "0 10px",
});
