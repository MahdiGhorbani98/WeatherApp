/** @jsxImportSource @emotion/react */
import { WeatherData } from "../../api/WeatherData";
import { css } from "@emotion/react";

const WeatherDetail = ({ cityName }) => {
  const { data, isLoading, isError, error } = WeatherData(cityName);

  if (isLoading) {
    return (
      <h3
        css={css`
          background-color: #134874;
          color: #fff;
          padding: 10px 20px;
          border-radius: 30px;
          display: inline-block;
        `}
      >
        Loading...
      </h3>
    );
  }

  if (isError) {
    return (
      <h3
        css={css`
          display: inline-block;
          border-radius: 2px;
          padding: 10px 15px;
          background-color: #94353b;
          color: #fff;
        `}
      >
        Error: {error.message}
      </h3>
    );
  }

  return (
    <div>
      <div
        css={css`
          margin: 0 auto 40px auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 30%;
          background-color: #b5e6f4d7;
          border-radius: 3px;
          font-size: 20px;
          padding: 50px;
          @media (max-width: 1024px) {
            width: 60%;
          }
          @media (max-width: 425px) {
            flex-direction: column-reverse;
          }
        `}
      >
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.data.weather[0].icon}@2x.png`}
            alt=""
          />
          <p
            css={css`
              background-color: #3607b8;
              padding: 5px;
              border-radius: 3px;
              color: #fff;
              margin-bottom: 30px;
            `}
          >
            {data?.data.weather[0].description}
          </p>
        </div>
        <div>
          <span
            css={css`
              color: #3607b8;
              font-size: 35px;
              font-weight: 600;
            `}
          >
            {data?.data.name}
          </span>
          <sup
            css={css`
              margin-top: 10px;
              margin-left: 4px;
              font-size: 14px;
              background-color: #df185a;
              color: #fff;
              padding: 2px;
              border-radius: 3px;
            `}
          >
            {data?.data.sys.country}
          </sup>
          <p
            css={css`
              margin-top: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <span
              css={css`
                color: #53a3ce;
                margin-right: 5px;
              `}
            >
              Temp:
            </span>
            <div
              css={css`
                position: relative;
              `}
            >
              <span
                css={css`
                  color: #3607b8;
                  font-size: 45px;
                  font-weight: 600;
                `}
              >
                {Math.round(data?.data.main.temp) - 273}
              </span>
              <sup
                css={css`
                  position: absolute;
                  bottom: 20px;
                  font-weight: bold;
                  font-size: 25px;
                  color: #df185a;
                `}
              >
                &deg;C
              </sup>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
