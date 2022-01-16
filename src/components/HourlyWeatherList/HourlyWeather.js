import React from "react";
import { celsiusToFahrenheit, getTimeWithoutSecondsFromTimeInSeconds } from "../../utils/functions"


const HourlyWeather = ({ weather, unit }) => {
  return (
    <div className={`min-w-[130px] border backdrop-blur-sm border-white/10 rounded-md mx-1 px-2 py-1 text-center text-white`}>
      <div className="">{getTimeWithoutSecondsFromTimeInSeconds(weather.dt)}</div>
      <div className="">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].icon}
        ></img>
      </div>
      <div className="">
        <span>{weather.weather[0].main}</span>
      </div>
      <div className="">
        <span>
          {unit ? weather.temp : celsiusToFahrenheit(weather.temp)} &deg;
          {unit ? "C" : "F"}
        </span>
      </div>
    </div>
  );
};

export default HourlyWeather;
