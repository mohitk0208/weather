import React from "react";
import { celsiusToFahrenheit, getDayFromTimeInSeconds, getMonthAndDateFromTimeInSeconds } from "../../utils/functions"

const DailyWeather = ({ weather, day, unit }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-2 md:grid-cols-5 md:grid-rows-1 text-center justify-evenly items-center backdrop-blur-sm border border-white/20 rounded-md bg-black/[0.03] px-3 py-1">
      <div className="col-start-1 col-end-7 text-left text-sm md:text-base md:text-center md:col-start-1 md:col-end-2 ">
        {getMonthAndDateFromTimeInSeconds(weather.dt)}
      </div>
      <div className="col-start-7 col-end-13 md:col-start-2 md:col-end-3 text-sm md:text-base text-right md:text-center">{day ? day : getDayFromTimeInSeconds(weather.dt)}</div>
      <div className="col-start-1 col-end-3 text-lg md:text-base md:col-start-3 md:col-end-4 h-10">
        <img
          className="w-full h-full object-contain"
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].icon}
        />
      </div>
      <div className="col-start-3 col-end-8 text-lg md:text-base md:col-start-4 md:col-end-5 ">{weather.weather[0].main}</div>
      <div className="col-start-8 col-end-13 text-lg text-right md:text-center md:text-base md:col-start-5 md:col-end-6">
        {unit ? weather.temp.max : celsiusToFahrenheit(weather.temp.max)}/
        {unit ? weather.temp.min : celsiusToFahrenheit(weather.temp.min)}&deg;
        {unit ? "C" : "F"}
      </div>
    </div>
  );
};

export default DailyWeather;
