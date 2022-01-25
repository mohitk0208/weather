import React from "react";
import { useWeather } from "../../context/weatherContext";
import { celsiusToFahrenheit } from "../../utils/functions";

import DetailsBlock from "./DetailsBlock";

const WeatherDetails = () => {

  const { current, unit } = useWeather()

  return (
    <>
      <div
        className={`w-full px-10 pt-5 pb-10 bg-transparent text-white`}
      >
        <h2 className="text-2xl pb-4 font-semibold">Weather Details </h2>
        <div className="w-full md:w-10/12 mx-auto grid grid-cols-2 grid-rows-2 gap-2 ">
          <DetailsBlock
            category={"Temperature Felt"}
            value={
              unit
                ? current ? current.main.feels_like : "_____"
                : current ? celsiusToFahrenheit(current.main.feels_like) : "_____"
            }
            unit={unit ? "°C" : "°F"}
          />
          <DetailsBlock
            category={"Visibility"}
            value={current ? Number(current.visibility ) / 1000 : "_____"}
            unit={" km"}
          />
          <DetailsBlock
            category={"Air Pressure"}
            value={current ? current.main.pressure : "___"}
            unit={" hPa"}
          />
          <DetailsBlock
            category={"Humidity"}
            value={current ? current.main.humidity : "___"}
            unit={" %"}
          />
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
