import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const FetchCityWeather = (city) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=32e57dc8ede63539bdbaf94c916bc99e`
  );
};

export const WeatherData = (city) => {
  return useQuery(["WeatherData", city], () => FetchCityWeather(city));
};
