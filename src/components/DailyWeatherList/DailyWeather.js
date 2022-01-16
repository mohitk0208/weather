import React from "react";
import {celsiusToFahrenheit,getDayFromTimeInSeconds,getMonthAndDateFromTimeInSeconds} from "../../utils/functions"

import "./DailyWeather.css";

const DailyWeather = ({ weather, day, unit }) => {
  return (
    <div className="days">
      <div className="days__date">{getMonthAndDateFromTimeInSeconds(weather.dt)}</div>
      <div className="days__day">{day ? day : getDayFromTimeInSeconds(weather.dt)}</div>
      <div className="days__icon">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].icon}
        />
      </div>
      <div className="days__main">{weather.weather[0].main}</div>
      <div className="days__minmax">
        {unit ? weather.temp.max : celsiusToFahrenheit(weather.temp.max)}/
        {unit ? weather.temp.min : celsiusToFahrenheit(weather.temp.min)}&deg;
        {unit ? "C" : "F"}
      </div>
    </div>
  );
};

export default DailyWeather;
