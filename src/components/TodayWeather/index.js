import React from "react";
import { useWeather } from "../../context/weatherContext";
import { celciusTofahrenheit, getDayFromTimeInSeconds } from "../../utils/functions";

import "./TodayWeather.css";

const TodayWeather = () => {

  const {current, reset, unit} = useWeather()

  return (
    <div className={`today ${!current && "initial"} ${reset && "initial"}`}>


      {!reset && (
        <div className={`current`}>
          {current && (
            <div className="current__temp">
              <div className="current__temp-current">
                <span className="temp">
                  {unit ? current.main.temp : celciusTofahrenheit(current.main.temp)}
                </span>
                <span className="unit">&deg;{unit ? "C" : "F"}</span>
              </div>
              <div className="current__temp-minmax">
                <span>
                  {unit
                    ? current.main.temp_min
                    : celciusTofahrenheit(current.main.temp_min)}
                  &deg;{unit ? "C" : "F"}/
                  {unit
                    ? current.main.temp_max
                    : celciusTofahrenheit(current.main.temp_max)}
                  &deg;
                  {unit ? "C" : "F"}
                </span>
                <span>{"  " + getDayFromTimeInSeconds(current.dt)}</span>
              </div>
            </div>
          )}
          {current && (
            <div className="current__weather">
              <div className="current__weather-main">
                {current.weather[0].main}
              </div>
              <div className="current__weaher-description">
                {current.weather[0].description}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TodayWeather;
