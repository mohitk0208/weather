import React from "react";
import {celsiusToFahrenheit,getDayFromTimeInSeconds,getMonthAndDateFromTimeInSeconds} from "../../utils/functions"

const DailyWeather = ({ weather, day, unit }) => {
  return (
    <div className="grid grid-cols-5 text-center justify-evenly items-center backdrop-blur-sm border border-white/20 rounded-md">
      <div className="">{getMonthAndDateFromTimeInSeconds(weather.dt)}</div>
      <div className="">{day ? day : getDayFromTimeInSeconds(weather.dt)}</div>
      <div className="h-12">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].icon}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="">{weather.weather[0].main}</div>
      <div className="">
        {unit ? weather.temp.max : celsiusToFahrenheit(weather.temp.max)}/
        {unit ? weather.temp.min : celsiusToFahrenheit(weather.temp.min)}&deg;
        {unit ? "C" : "F"}
      </div>
    </div>
  );
};

export default DailyWeather;
