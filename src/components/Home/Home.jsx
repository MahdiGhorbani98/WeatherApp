import { useEffect, useState } from "react";
import axios from "axios";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import Loading from "../shared/Loading/Loading";
import * as Styled from "./Home.styled";
import Geolocation from "react-geolocation";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import GetImageByKey from "../../utils/GetImageByKey";
import ConvertDescription from "../../utils/ConvertDescription";

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [loadingGPS, setLoadingGPS] = useState(false);
  const [bgImg, seBgImg] = useState(null);

  const onChange = (event) => {
    setCity(event.target.value);
  };

  const onFetch = () => {
    setLoadingGPS(false);
    setStatus("loading");
  };

  // send request based on status
  useEffect(() => {
    if (status === "loading") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=32e57dc8ede63539bdbaf94c916bc99e`
        )
        .then((res) => {
          setStatus("success");
          setData(res.data);
          seBgImg(
            ConvertDescription(
              res.data.weather[0].description.replace(/ /g, "_")
            )
          );
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
  const RenderBasedStatus = () => {
    if (status === "loading") {
      return <Loading loadingText={"Loading..."} />;
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

  const GeoLocation = () => {
    return (
      <Geolocation
        render={({ getCurrentPosition, position }) => (
          <Styled.Button
            border_radius={"3px 0px 0px 3px"}
            onClick={() => GetLetAndLon(getCurrentPosition, position)}
          >
            <HiLocationMarker
              style={{ width: "30px", height: "30px", color: "#fff" }}
            />
          </Styled.Button>
        )}
      />
    );
  };

  const GetLetAndLon = (getCurrentPosition, pos) => {
    setLoadingGPS(true);
    RemoveInputValue();
    getCurrentPosition();
    GetCity(pos.coords.latitude.toFixed(6), pos.coords.longitude.toFixed(6));
  };

  const RemoveInputValue = () => {
    document.getElementById("cityInput").value = "";
  };

  const GetCity = (lat, lon) => {
    axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=18`
      )
      .then((res) => {
        console.log("lat lon: " + lat + " " + lon);
        console.log("get city: " + res.data.address.city);
        res.data.address.city !== null
          ? setCity(res.data.address.city)
          : setCity(res.data.address.county);
        onFetch();
      });
  };

  const SearchButton = () => {
    return (
      <Styled.Button
        border_radius={"0px 3px 3px 0px"}
        aria-label="search"
        onClick={onFetch}
      >
        <BiSearchAlt2
          style={{ width: "30px", height: "30px", color: "#fff" }}
        />
      </Styled.Button>
    );
  };

  return (
    <Styled.Container bgImg={GetImageByKey(bgImg)}>
      <Styled.InputContainer>
        <GeoLocation />
        <Styled.Input
          onChange={onChange}
          id="cityInput"
          type="text"
          placeholder="Enter a City"
        />
        <SearchButton />
      </Styled.InputContainer>

      {loadingGPS ? <Loading loadingText={"Getting your city..."} /> : ""}
      <RenderBasedStatus />
    </Styled.Container>
  );
};

export default Home;
