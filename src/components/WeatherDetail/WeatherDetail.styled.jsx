import styled from "@emotion/styled";

export const Container = styled.div({
  margin: "0 auto 40px auto",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "30%",
  backgroundColor: "#b5e6f4d7",
  borderRadius: 3,
  fontSize: 20,
  padding: 50,
  "@media (max-width: 1024px)": {
    width: "60%",
  },
  "@media (max-width: 425px)": {
    flexDirection: " column-reverse",
  },
});

export const TempContainer = styled.div({
  marginTop: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CelciusContainer = styled.div({ position: "relative" });

export const Paragraph = styled.p({
  backgroundColor: "#3607b8",
  padding: 5,
  borderRadius: 3,
  color: "#fff",
  marginBottom: 30,
});

export const Span = styled.span(({ fontSize }) => ({
  color: "#3607b8",
  fontSize: fontSize,
  fontWeight: 600,
}));

export const Sup = styled.sup({
  marginTop: 10,
  marginLeft: 4,
  fontSize: 14,
  backgroundColor: "#df185a",
  color: "#fff",
  padding: 2,
  borderRadius: 3,
});

export const CelciusSup = styled.sup({
  position: "absolute",
  bottom: 20,
  fontWeight: "bold",
  fontSize: 25,
  color: "#df185a",
});

export const TempSpan = styled.span({
  color: "#53a3ce",
  marginRight: 5,
});
