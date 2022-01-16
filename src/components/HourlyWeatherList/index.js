import React, { useRef } from "react";

import HourlyWeather from "./HourlyWeather";
import { useWeather } from "../../context/weatherContext"

const HourlyWeatherList = () => {

  const { hourly, unit, reset } = useWeather()
  const hourlyContainerRef = useRef()

  return (
    <div className={`flex overflow-x-auto px-8 bg-black/50 py-3 min-h-[200px]`} ref={hourlyContainerRef} >
      {hourly ?
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
        }) : (
          <div className="flex-1 flex items-center justify-center" >
            <p className="text-white/50" >No data to show</p>
          </div>
        )}
    </div>
  );
};

export default HourlyWeatherList;
