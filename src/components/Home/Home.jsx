/** @jsxImportSource @emotion/react */
import { Container, InputContainer, Input, Button, Image } from "./HomeStyle";
import searchIcon from "../../icons/icons8-search.svg";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import { useEffect, useState } from "react";

const Home = () => {
  const [cityName, setCityName] = useState("");

  const handleClick = () => {
    const cityInput = document.getElementById("cityInput");
    setCityName(cityInput.value);
  };

  useEffect(() => {
    const cityInput = document.getElementById("cityInput");
    if (cityInput)
      cityInput.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          handleClick();
        }
      });
  });

  return (
    <Container>
      <InputContainer>
        <Input id="cityInput" type="text" placeholder="Enter a City" />
        <Button aria-label="search" onClick={handleClick}>
          <Image src={searchIcon} alt="searchIcon" />
        </Button>
      </InputContainer>
      {cityName && <WeatherDetail cityName={cityName} />}
    </Container>
  );
};

export default Home;
