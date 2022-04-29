import styled from "@emotion/styled";

export const Container = styled.div({
  textAlign: "center",
});

export const InputContainer = styled.div({
  margin: "40px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Input = styled.input({
  height: "100%",
  fontSize: "20px",
  padding: "0 20px",
  color: "#53a3ce",
  borderRadius: "3px 0px 0px 3px",
  border: "2.5px solid skyblue",
  outline: "none",
  "&:focus": {
    border: "2.5px solid #53a3ce",
  },
  "::placeholder ": {
    color: "#63a9cfb8",
  },
  "@media (max-width: 425px)": {
    width: " 100%",
  },
});

export const Button = styled.button({
  cursor: "pointer",
  outline: "2.5px solid skyblue",
  border: "0",
  height: "100%",
  backgroundColor: "#53a3ce",
  borderRadius: "0px 3px 3px 0px",
  transition: " 0.3s",
  "&:hover": {
    backgroundColor: "#267ba8",
  },
});

export const Image = styled.img({
  padding: "0 10px",
});
