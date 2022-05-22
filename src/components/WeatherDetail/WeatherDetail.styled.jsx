import styled from "@emotion/styled";

export const Container = styled.div(() => ({
  margin: "0 auto 40px auto",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "35%",
  backgroundColor: "#3030309d",
  borderRadius: 5,
  fontSize: 20,
  padding: 50,
  "@media (max-width: 1024px)": {
    width: "80%",
  },
  "@media (max-width: 425px)": {
    flexDirection: " column-reverse",
    width: "100%",
  },
}));

export const TempContainer = styled.div({
  marginTop: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CelciusContainer = styled.div({ position: "relative" });

export const Paragraph = styled.p({
  backgroundColor: "#ffffff",
  padding: 5,
  borderRadius: 3,
  color: "#df185a",
  marginBottom: 30,
});

export const Span = styled.span(({ fontSize }) => ({
  color: "#ffffff",
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
  color: "#ffffff",
  marginRight: 5,
});
