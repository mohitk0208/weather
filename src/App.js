import React, { useState } from "react";

import TodayWeather from "./components/Today/TodayWeather";
import HourlyWeatherList from "./components/Hourly/HourlyWeatherList";
import DailyWeatherList from "./components/Daily/DailyWeatherList";
import WeatherDetails from "./components/Details/WeatherDetails";
import LoadingSpinner from "./components/helpers/LoadingSpinner";
import { useHttpClient } from "./components/helpers/hooks/http-hook";
import ErrorModal from "./components/helpers/ErrorModal";
import "./App.css";

const App = () => {
	const [current, setCurrent] = useState();
	const [hourly, setHourly] = useState();
	const [daily, setDaily] = useState();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	const getWeather = async (city) => {
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

		} catch (err) {
			// console.log(err);
		}
	};

	return (
		<>
			<ErrorModal error={error} onClear={clearError} />
			{isLoading && <LoadingSpinner overlay />}
			<div className="container">
				<TodayWeather getWeather={getWeather} current={current} />
				<HourlyWeatherList weathers={hourly} />
				<DailyWeatherList weathers={daily} />
				<WeatherDetails current={current} />
			</div>
		</>
	);
};

export default App;
