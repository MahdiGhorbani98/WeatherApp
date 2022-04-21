import React from "react";
import { WeatherData } from "../../api/WeatherData";

const WeatherDetail = ({ cityName }) => {
  const { data, isLoading } = WeatherData(cityName);

  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>temperature: </div>
    </>
  );
};

export default WeatherDetail;
