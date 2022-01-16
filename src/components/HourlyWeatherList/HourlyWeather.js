import React from "react";
import {celsiusToFahrenheit,getTimeWithoutSecondsFromTimeInSeconds} from "../../utils/functions"

import "./HourlyWeather.css";

const HourlyWeather = ({ weather, delay, unit }) => {
  return (
    <div className={`hour-weather`}>
      <div className="hour-weather__time">{getTimeWithoutSecondsFromTimeInSeconds(weather.dt)}</div>
      <div className="hour-weather__icon">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].icon}
        ></img>
      </div>
      <div className="hour-weather__main">
        <span>{weather.weather[0].main}</span>
      </div>
      <div className="hour-weather__temp">
        <span>
          {unit ? weather.temp : celsiusToFahrenheit(weather.temp)} &deg;
          {unit ? "C" : "F"}
        </span>
      </div>
    </div>
  );
};

export default HourlyWeather;
