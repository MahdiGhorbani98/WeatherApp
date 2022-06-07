import * as Styled from "./WeatherDetail.styled";

const WeatherDetail = ({ description, name, country, temp, icon }) => {
  const ImgAndDescription = () => {
    return (
      <div>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <Styled.Paragraph>{description}</Styled.Paragraph>
      </div>
    );
  };
  const WeatherInfo = () => {
    return (
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
    );
  };

  return (
    <Styled.Container>
      <ImgAndDescription />
      <WeatherInfo />
    </Styled.Container>
  );
};

export default WeatherDetail;
