import React from "react";
import { useWeather } from "../../context/weatherContext";
import { celsiusToFahrenheit, getDayFromTimeInSeconds } from "../../utils/functions";

const TodayWeather = () => {

  const { current, unit } = useWeather()

  return (
    <div className={`w-full px-4 sm:px-8 md:px-10 pb-10 pt-36  flex justify-between bg-transparent`}>

      <div className="text-white">

        <div className=" text-3xl sm:text-5xl md:text-6xl relative pb-2 max-w-max">
          <span className="">
            {unit ?
              current ? current.main.temp : "__.__"
              : current ? celsiusToFahrenheit(current.main.temp) : "__.__"}
          </span>
          <span className="sm:text-3xl md:text-4xl absolute top-0 left-full ">&deg;{unit ? "C" : "F"}</span>
        </div>

        <div className="text-center text-xs sm:text-sm md:text-base">
          <span>
            {unit ?
              (current ? current.main.temp_min : "__")
              : (current ? celsiusToFahrenheit(current.main.temp_min) : "__")}

            &deg;{unit ? "C" : "F"}{" / "}

            {unit
              ? current ? current.main.temp_max : "__"
              : current ? celsiusToFahrenheit(current.main.temp_max) : "__"}
            &deg;
            {unit ? "C" : "F"}
          </span>
          <span>{"  " + (current ? getDayFromTimeInSeconds(current.dt) : "___")}</span>
        </div>
      </div>


      <div className="text-white">
        <div className="text-2xl sm:text-4xl md:text-5xl pb-2 md:pb-3">
          {current ? current.weather[0].main : "____"}
        </div>
        <div className="text-xs sm:text-sm md:text-base text-right">
          {current ? current.weather[0].description : "____"}
        </div>
      </div>

    </div>
  );
};

export default TodayWeather;
