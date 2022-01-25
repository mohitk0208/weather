import React from "react";
import { celsiusToFahrenheit, getTimeWithoutSecondsFromTimeInSeconds } from "../../utils/functions"


const HourlyWeather = ({ weather, unit }) => {
  return (
    <div className={`min-w-[120px] sm:min-w-[140px] border backdrop-blur-sm border-white/10 rounded-md mx-1 px-3 py-2 text-center text-white bg-black/[0.03]`}>
      <div className="text-xs sm:text-sm font-bold opacity-80">{getTimeWithoutSecondsFromTimeInSeconds(weather.dt)}</div>
      <div className="">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].icon}
        ></img>
      </div>
      <div className="text-sm sm:text-base">
        <span>{weather.weather[0].main}</span>
      </div>
      <div className="text-sm sm:text-base">
        <span>
          {unit ? weather.temp : celsiusToFahrenheit(weather.temp)} &deg;
          {unit ? "C" : "F"}
        </span>
      </div>
    </div>
  );
};

export default HourlyWeather;
