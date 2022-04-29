/** @jsxImportSource @emotion/react */
import { WeatherData } from "../../api/WeatherData";
import {
  Heading3,
  Container,
  Paragraph,
  Span,
  Sup,
  TempSpan,
  CelciusSup,
  TempContainer,
  CelciusContainer,
} from "./WeatherDetailStyle";

const WeatherDetail = ({ cityName }) => {
  const { data, isLoading, isError, error } = WeatherData(cityName);

  if (isLoading) {
    return <Heading3 bgColor="#134874">Loading...</Heading3>;
  }

  if (isError) {
    return <Heading3 bgColor="#7e252b">Error: {error.message}</Heading3>;
  }

  const mainData = data.data;

  return (
    <div>
      <Container>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${mainData.weather[0].icon}@2x.png`}
            alt=""
          />
          <Paragraph>{mainData.weather[0].description}</Paragraph>
        </div>

        <div>
          <Span fontSize={35}>{mainData.name}</Span>
          <Sup>{mainData.sys.country}</Sup>
          <TempContainer>
            <TempSpan>Temp:</TempSpan>
            <CelciusContainer>
              <Span fontSize={45}>{Math.round(mainData.main.temp) - 273}</Span>
              <CelciusSup>&deg;C</CelciusSup>
            </CelciusContainer>
          </TempContainer>
        </div>
      </Container>
    </div>
  );
};

export default WeatherDetail;
