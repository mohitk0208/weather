import React from "react";
import { useWeather } from "../../context/weatherContext";

import DailyWeather from "./DailyWeather";

const DailyWeatherList = () => {

  const { daily, unit } = useWeather()

  return (
    <div className={`w-full pt-10 pb-10 px-8 bg-black/50 text-white`}>
      <h3 className="text-2xl pl-2 py-3 font-semibold text-white/90 " >7-Day Weather Report</h3>
      <div className="flex flex-col gap-1.5 min-h-[200px] ">
        {daily ? (
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
          })) : (
          <div className="flex-1 w-full h-full flex items-center justify-center" >
            <p className="text-white/50" >No data to show</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyWeatherList;
