import * as Styled from "./HomeStyle.styled";
import searchIcon from "../../icons/icons8-search.svg";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (event) => {
    setCity(event.target.value);
  };

  const onFetch = () => {
    setStatus("loading");
  };

  // send request based on status
  useEffect(() => {
    if (status === "loading") {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=32e57dc8ede63539bdbaf94c916bc99e`
        )
        .then((res) => {
          setStatus("success");
          setData(res.data);
        })
        .catch((error) => {
          setStatus("error");
          setError(error.message);
        });
    }
  }, [city, status]);

  // press Enter key on input and send request
  useEffect(() => {
    const cityInput = document.getElementById("cityInput");
    if (cityInput)
      cityInput.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          onFetch();
        }
      });
  });

  // determine what to render
  const StatusToRender = () => {
    if (status === "loading") {
      return <Styled.Heading3 bgColor="#134874">Loading...</Styled.Heading3>;
    } else if (status === "error") {
      return (
        <Styled.Heading3 bgColor="#7e252b">Error: {error}</Styled.Heading3>
      );
    } else if (status === "success") {
      return (
        <WeatherDetail
          description={data.weather[0].description}
          name={data.name}
          country={data.sys.country}
          temp={data.main.temp}
          icon={data.weather[0].icon}
        />
      );
    }
  };

  return (
    <Styled.Container>
      <Styled.InputContainer>
        <Styled.Input
          onChange={onChange}
          id="cityInput"
          type="text"
          placeholder="Enter a City"
        />
        <Styled.Button aria-label="search" onClick={onFetch}>
          <Styled.Image src={searchIcon} alt="searchIcon" />
        </Styled.Button>
      </Styled.InputContainer>
      <StatusToRender />
    </Styled.Container>
  );
};

export default Home;
