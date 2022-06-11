import axios from "axios";

export const GetCity = (lat, lon, setCity, startRequest) => {
  axios
    .get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=18`
    )
    .then((res) => {
      console.log("lat lon: " + lat + " " + lon);
      console.log("your city: " + res.data.address.city);
      res.data.address.city !== null
        ? setCity(res.data.address.city)
        : setCity(res.data.address.county);
      startRequest();
    });
};
