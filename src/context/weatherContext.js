import React, { createContext, useContext, useState } from "react";
import { useHttpClient } from "../hooks/useHttpClient"
import { usePosition } from "../hooks/usePosition"
import { useQueryString } from "../hooks/useQueryString"

const WeatherContext = createContext({})


export const useWeather = () => useContext(WeatherContext)


function WeatherProvider({ children }) {
  const [current, setCurrent] = useState()
  const [hourly, setHourly] = useState();
  const [daily, setDaily] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { lat, lon, posError, clearPosError } = usePosition();
  const [reset, setReset] = useState(false);
  const [unit, setUnit] = useQueryString("unit", true);

  async function getWeather(city) {
    try {
      const currentResponseData = await sendRequest(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
        "GET"
      );
      setCurrent(currentResponseData);
      const lat = currentResponseData.coord.lat;
      const lon = currentResponseData.coord.lon;

      const completeWeatherResponseData = await sendRequest(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
        "GET"
      );

      setHourly(completeWeatherResponseData.hourly);
      setDaily(completeWeatherResponseData.daily);
      setReset(false);
    } catch (err) { }
  };

  const getWeatherByLocation = async () => {
    try {
      const currentResponseData = await sendRequest(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
        "GET"
      );
      setCurrent(currentResponseData);

      const completeWeatherResponseData = await sendRequest(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
        "GET"
      );

      setHourly(completeWeatherResponseData.hourly);
      setDaily(completeWeatherResponseData.daily);
    } catch (err) {
    }
  };

  const setResetHandler = (val) => {
    setReset(val)
  }
  const value = {
    current,
    hourly,
    daily,
    isLoading,
    error,
    clearError,
    posError,
    clearPosError,
    reset,
    setResetHandler,
    unit,
    setUnit,
    getWeather,
    getWeatherByLocation
  }

  return <WeatherContext.Provider value={value} >
    {children}
  </WeatherContext.Provider>
}



export default WeatherProvider