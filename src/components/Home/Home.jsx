/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
    <>
      <div
        css={css`
          margin: 40px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <input
          id="cityInput"
          css={css`
            height: 100%;
            font-size: 20px;
            padding: 0 20px;
            color: #53a3ce;
            border-radius: 3px 0px 0px 3px;
            border: 2.5px solid skyblue;
            outline: none;
            &:focus {
              border: 2.5px solid #53a3ce;
            }
            ::placeholder {
              color: #63a9cfb8;
            }
            @media (max-width: 425px) {
              width: 100%;
            }
          `}
          type="text"
          placeholder="Enter a City"
        />
        <button
          aria-label="search"
          onClick={handleClick}
          css={css`
            cursor: pointer;
            outline: 2.5px solid skyblue;
            border: 0;
            height: 100%;
            background-color: #53a3ce;
            border-radius: 0px 3px 3px 0px;
          `}
        >
          <img
            css={css`
              padding: 0 10px;
            `}
            src={searchIcon}
            alt="searchIcon"
          />
        </button>
      </div>
      {cityName && <WeatherDetail cityName={cityName} />}
    </>
  );
};

export default Home;
