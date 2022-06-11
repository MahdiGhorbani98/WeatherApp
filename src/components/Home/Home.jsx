import { useEffect, useState, useRef } from "react";

import * as Styled from "./Home.styled";
import Loading from "../shared/Loading/Loading";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import GetImageByKey from "../../utils/GetImageByKey";
import SearchButton from "../SearchButton/SearchButton";
import GeoLocation from "../GeoLoacation/GeoLocation";
import { GetCity } from "../../api/utils";
import useCityRequest from "../../hooks/useCityRequest";

const Home = () => {
  const [loadingGPS, setLoadingGPS] = useState(false);
  const [status, setStatus] = useState("idle");
  const [city, setCity] = useState("");
  const inputRef = useRef(null);

  const [data, bgImg, error] = useCityRequest(status, setStatus, city);

  const onChange = (event) => {
    setCity(event.target.value);
  };

  const startRequest = () => {
    setLoadingGPS(false);
    setStatus("loading");
  };

  // send request based on status

  useEffect(() => {
    const cityInput = inputRef.current;

    function startRequestOnEnter(event) {
      const enterKey = event.keyCode === 13;
      enterKey && startRequest();
    }

    if (cityInput) {
      cityInput.addEventListener("keyup", startRequestOnEnter);
    }
  }, []);

  // determine what to render
  const RenderBasedStatus = () => {
    if (status === "loading") {
      return <Loading />;
    } else if (status === "error") {
      return <Styled.Heading bgColor="#7e252b">Error: {error}</Styled.Heading>;
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

  const GetLetAndLon = (getCurrentPosition, pos) => {
    setLoadingGPS(true);
    RemoveInputValue();
    getCurrentPosition();
    GetCity(
      pos.coords.latitude.toFixed(6),
      pos.coords.longitude.toFixed(6),
      setCity,
      startRequest
    );
  };

  const RemoveInputValue = () => {
    inputRef.current.value = "";
  };

  return (
    <Styled.Container bgImg={GetImageByKey(bgImg)}>
      <Styled.InputContainer>
        <GeoLocation GetLetAndLon={GetLetAndLon} />
        <Styled.Input
          ref={inputRef}
          onChange={onChange}
          id="cityInput"
          type="text"
          placeholder="Enter a City"
        />
        <SearchButton startRequest={startRequest} />
      </Styled.InputContainer>

      {loadingGPS ? <Loading variant="GPS" /> : ""}
      <RenderBasedStatus />
    </Styled.Container>
  );
};

export default Home;
