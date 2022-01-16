import React from "react";
import { useWeather } from "../../context/weatherContext";
import { celsiusToFahrenheit } from "../../utils/functions";

import DetailsBlock from "./DetailsBlock";

const WeatherDetails = () => {

  const { current, unit, reset } = useWeather()

  return (
    <>
      <div
        className={`w-full px-10 pt-5 pb-10 bg-black/50 text-white`}
      >
        <h2 className="text-2xl pb-4 font-semibold">Weather Details </h2>
        {current && !reset && (
          <div className="w-10/12 mx-auto grid grid-cols-2 grid-rows-2 gap-2 ">
            <DetailsBlock
              category={"Temperature Felt"}
              value={
                unit
                  ? current.main.feels_like
                  : celsiusToFahrenheit(current.main.feels_like)
              }
              unit={unit ? "°C" : "°F"}
            />
            <DetailsBlock
              category={"Visibility"}
              value={Number(current.visibility) / 1000}
              unit={" km"}
            />
            <DetailsBlock
              category={"Air Pressure"}
              value={current.main.pressure}
              unit={" hPa"}
            />
            <DetailsBlock
              category={"Humidity"}
              value={current.main.humidity}
              unit={" %"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherDetails;
