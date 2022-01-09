import React from "react";

import HourlyWeather from "./HourlyWeather";
import "./HourlyWeatherList.css";
import {useWeather} from "../../context/weatherContext"

const HourlyWeatherList = () => {

  const {hourly, unit, reset} = useWeather()

  return (
    <div className={`hourly ${!hourly && "initial"} ${reset && "initial"}`}>
      {hourly &&
        !reset &&
        hourly.map((weather, index) => {
          return (
            <HourlyWeather
              key={weather.dt}
              weather={weather}
              delay={0.35 + index * 0.1}
              reset={reset}
              unit={unit}
            />
          );
        })}
    </div>
  );
};

export default HourlyWeatherList;
