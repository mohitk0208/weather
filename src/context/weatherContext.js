import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
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
  const [unit, setUnit] = useQueryString("unit", true);
  const [city, setCity] = useQueryString("city", null);

  const getWeather = useCallback(async (city) => {
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
    } catch (err) { }
  }, [sendRequest]);



  const getWeatherByLocation = useCallback(async () => {
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
  }, [sendRequest, lat, lon])



  useEffect(() => {

    if (city) {
      if (city === "LOCATION") {
        getWeatherByLocation()
      } else {
        getWeather(city)
      }
    }

  }, [city, getWeather, getWeatherByLocation])


  const value = {
    current,
    hourly,
    daily,
    isLoading,
    error,
    clearError,
    posError,
    clearPosError,
    unit,
    setUnit,
    getWeather,
    getWeatherByLocation,
    city,
    setCity
  }

  return <WeatherContext.Provider value={value} >
    {children}
  </WeatherContext.Provider>
}



export default WeatherProvider