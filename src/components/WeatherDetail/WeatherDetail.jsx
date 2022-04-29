/** @jsxImportSource @emotion/react */
import { WeatherData } from "../../api/WeatherData";
import * as Styled from "./WeatherDetail.styled";

const WeatherDetail = ({ cityName }) => {
  const { data, isLoading, isError, error } = WeatherData(cityName);

  if (isLoading) {
    return <Styled.Heading3 bgColor="#134874">Loading...</Styled.Heading3>;
  }

  if (isError) {
    return (
      <Styled.Heading3 bgColor="#7e252b">
        Error: {error.message}
      </Styled.Heading3>
    );
  }

  const mainData = data.data;

  return (
    <div>
      <Styled.Container>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${mainData.weather[0].icon}@2x.png`}
            alt=""
          />
          <Styled.Paragraph>{mainData.weather[0].description}</Styled.Paragraph>
        </div>

        <div>
          <Styled.Span fontSize={35}>{mainData.name}</Styled.Span>
          <Styled.Sup>{mainData.sys.country}</Styled.Sup>
          <Styled.TempContainer>
            <Styled.TempSpan>Temp:</Styled.TempSpan>
            <Styled.CelciusContainer>
              <Styled.Span fontSize={45}>
                {Math.round(mainData.main.temp) - 273}
              </Styled.Span>
              <Styled.CelciusSup>&deg;C</Styled.CelciusSup>
            </Styled.CelciusContainer>
          </Styled.TempContainer>
        </div>
      </Styled.Container>
    </div>
  );
};

export default WeatherDetail;
