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
          <Styled.CityName fontSize={35}>{name}</Styled.CityName>
          <Styled.Country>{country}</Styled.Country>
          <Styled.TemperatureContainer>
            <Styled.TempSpan>Temp:</Styled.TempSpan>
            <Styled.CelciusContainer>
              <Styled.NumberTemp fontSize={45}>
                {Math.round(temp) - 273}
              </Styled.NumberTemp>
              <Styled.Celcius>&deg;C</Styled.Celcius>
            </Styled.CelciusContainer>
          </Styled.TemperatureContainer>
        </div>
      </Styled.Container>
    </div>
  );
};

export default WeatherDetail;
