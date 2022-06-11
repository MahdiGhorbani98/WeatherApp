import { useEffect, useState } from "react";
import axios from "axios";

import ConvertDescription from "../utils/ConvertDescription";

function useCityRequest(status, setStatus, city) {
  const [data, setData] = useState([]);
  const [bgImg, seBgImg] = useState(null);
  const [error, setError] = useState("");

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
          setError(error.response.data.message);
        });
    }
  }, [city, status]);

  return [data, bgImg, error];
}

export default useCityRequest;
