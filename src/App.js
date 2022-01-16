import React, { useState, useEffect } from "react";

import TodayWeather from "./components/TodayWeather";
import HourlyWeatherList from "./components/HourlyWeatherList";
import DailyWeatherList from "./components/DailyWeatherList";
import WeatherDetails from "./components/WeatherDetails";
import LoadingSpinner from "./components/utilComponents/LoadingSpinner";
import ErrorModal from "./components/utilComponents/ErrorModal";
import { useWeather } from "./context/weatherContext";
import ControlsBar from "./components/ControlsBar";

const App = () => {
  const [background, setBackground] = useState("/images/default.jpg");

  const { current, isLoading, error, clearError, posError, clearPosError } = useWeather()


  useEffect(() => {
    if (current) {
      switch (Number((Number(current.weather[0].id) / 100).toFixed(0))) {
        case 2:
          setBackground(
            "/images/2XX.jpg"
          );
          break;
        case 3:
          setBackground(
            "/images/3XX.jpg"
          );
          break;
        case 5:
          setBackground(
            "/images/5XX.jpg"
          );
          break;
        case 6:
          setBackground(
            "/images/6XX.jpg"
          );
          break;
        case 7:
          if (Number(current.weather[0].id) === 721) {
            setBackground(
              "/images/721.jpg"
            );
          } else if (Number(current.weather[0].id) === 741 || Number(current.weather[0].id) === 701) {
            setBackground(
              "/images/741.jpg"
            );
          } else {
            setBackground(
              "/images/7XX.jpg"
            );
          }
          break;
        case 8:
          if (Number(current.weather[0].id) === 800) {
            setBackground(
              "/images/800.jpg"
            );
          } else {
            setBackground(
              "/images/8XX.jpg"
            );
          }
          break;
        default:
          setBackground(
            "/images/default.jpg"
          );
          break;
      }
    }
  }, [current]);

  return (
    <>
      {!!!error && <ErrorModal error={posError} onClear={clearPosError} />}
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner overlay />}
      <div
        className="bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="w-full min-h-screen pb-5 overflow-x-hidden overflow-y-auto bg-no-repeat bg-center no-scroll-bar font-mono bg-gradient-to-b from-transparent via-black/50 to-black/80"
        >
          <ControlsBar />
          <TodayWeather />
          <HourlyWeatherList />
          <DailyWeatherList />
          <WeatherDetails />
        </div>
      </div>

    </>
  );
};

export default App;
