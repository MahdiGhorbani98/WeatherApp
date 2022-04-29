/** @jsxImportSource @emotion/react */
import * as Styled from "./HomeStyle.styled";
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
    <Styled.Container>
      <Styled.InputContainer>
        <Styled.Input id="cityInput" type="text" placeholder="Enter a City" />
        <Styled.Button aria-label="search" onClick={handleClick}>
          <Styled.Image src={searchIcon} alt="searchIcon" />
        </Styled.Button>
      </Styled.InputContainer>
      {cityName && <WeatherDetail cityName={cityName} />}
    </Styled.Container>
  );
};

export default Home;
