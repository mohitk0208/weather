import React from "react";
import { useWeather } from "../../context/weatherContext";
import { celsiusToFahrenheit, getDayFromTimeInSeconds } from "../../utils/functions";

const TodayWeather = () => {

  const { current, unit } = useWeather()

  return (
    <div className={`w-full px-10 pb-10 pt-36  flex justify-between bg-black/50`}>

      <div className="text-white">

        <div className="text-6xl relative pb-2">
          <span className="">
            {unit ?
              current ? current.main.temp : "__.__"
              : current ? celsiusToFahrenheit(current.main.temp) : "__.__"}
          </span>
          <span className="text-4xl absolute top-0 left-full ">&deg;{unit ? "C" : "F"}</span>
        </div>


        <div className="text-center text-sm">
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
        <div className="text-5xl pb-3">
          {current ? current.weather[0].main : "____"}
        </div>
        <div className="text-xl text-right">
          {current ? current.weather[0].description : "____"}
        </div>
      </div>

    </div>
  );
};

export default TodayWeather;
