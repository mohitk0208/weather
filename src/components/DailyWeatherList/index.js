import React from "react";
import { useWeather } from "../../context/weatherContext";

import DailyWeather from "./DailyWeather";
import "./DailyWeatherList.css";

const DailyWeatherList = () => {

  const { daily, reset, unit } = useWeather()

  return (
    <div className={`daily ${!daily && "initial"} ${reset && "initial"}`}>
      {daily && !reset && <h3>7-Day Weather Report</h3>}
      <div className="daily__data">
        {daily &&
          !reset &&
          daily.map((weather, i) => {
            if (i === 0) {
              return (
                <DailyWeather
                  key={weather.dt}
                  weather={weather}
                  day={"Today"}
                  unit={unit}
                />
              );
            }

            return (
              <DailyWeather key={weather.dt} weather={weather} unit={unit} />
            );
          })}
      </div>
    </div>
  );
};

export default DailyWeatherList;
