import React, { useRef } from "react";

import HourlyWeather from "./HourlyWeather";
import { useWeather } from "../../context/weatherContext"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const HourlyWeatherList = () => {

  const { hourly, unit } = useWeather()
  const hourlyContainerRef = useRef()

  function scrollLeft() {
    if (hourlyContainerRef.current) {
      hourlyContainerRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth"
      })
    }
  }

  function scrollRight() {
    if (hourlyContainerRef.current) {
      hourlyContainerRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative w-screen">
      <div className={`flex overflow-x-auto px-4 sm:px-8 bg-transparent pt-5 pb-3 min-h-[200px] no-scroll-bar`} ref={hourlyContainerRef} >
        {hourly ?
          hourly.map((weather, index) => {
            return (
              <HourlyWeather
                key={weather.dt}
                weather={weather}
                unit={unit}
              />
            );
          }) : (
            <div className="flex-1 flex items-center justify-center" >
              <p className="text-white/50" >No data to show</p>
            </div>
          )}
      </div>

      <ChevronLeftIcon className="w-8 sm:w-12 h-8 sm:h-12 absolute left-0 top-1/2 -translate-y-1/2 p-1 bg-black text-white rounded-full opacity-25 hover:opacity-80 cursor-pointer transition-opacity duration-200 ease-in-out" onClick={scrollLeft} />
      <ChevronRightIcon className="w-8 sm:w-12 h-8 sm:h-12 absolute right-0 top-1/2 -translate-y-1/2 p-1 bg-black text-white rounded-full opacity-25 hover:opacity-80 cursor-pointer transition-opacity duration-200 ease-in-out" onClick={scrollRight} />

    </div>
  );
};

export default HourlyWeatherList;
