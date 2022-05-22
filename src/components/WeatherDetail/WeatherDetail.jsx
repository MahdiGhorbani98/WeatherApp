import * as Styled from "./WeatherDetail.styled";
import rain from "../../assets/weather-background-Images/rain.jpg";

const WeatherDetail = ({ description, name, country, temp, icon }) => {
  return (
    <div>
      <Styled.Container bgImg={rain}>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
          <Styled.Paragraph>{description}</Styled.Paragraph>
        </div>

        <div>
          <Styled.Span fontSize={35}>{name}</Styled.Span>
          <Styled.Sup>{country}</Styled.Sup>
          <Styled.TempContainer>
            <Styled.TempSpan>Temp:</Styled.TempSpan>
            <Styled.CelciusContainer>
              <Styled.Span fontSize={45}>{Math.round(temp) - 273}</Styled.Span>
              <Styled.CelciusSup>&deg;C</Styled.CelciusSup>
            </Styled.CelciusContainer>
          </Styled.TempContainer>
        </div>
      </Styled.Container>
    </div>
  );
};

export default WeatherDetail;
