import React from "react";
import { useWeather } from "../../context/weatherContext";
import { celciusTofahrenheit } from "../../utils/functions";

import DetailsBlock from "./DetailsBlock";
import "./WeatherDetails.css";

const WeatherDetails = () => {

  const { current, unit, reset } = useWeather()

  return (
    <>
      <div
        className={`details-container ${!current && "initial"} ${reset && "initial"
          }`}
      >
        {current && !reset && <h2 className="heading">Weather Details </h2>}
        {current && !reset && (
          <div className="details">
            <DetailsBlock
              category={"temperatre Felt"}
              value={
                unit
                  ? current.main.feels_like
                  : celciusTofahrenheit(current.main.feels_like)
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
