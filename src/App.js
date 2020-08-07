import React, { useState } from "react";

import TodayWeather from "./components/Today/TodayWeather";
import HourlyWeatherList from "./components/Hourly/HourlyWeatherList";
import DailyWeatherList from "./components/Daily/DailyWeatherList";
import WeatherDetails from "./components/Details/WeatherDetails";
import LoadingSpinner from "./components/helpers/LoadingSpinner";
import { useHttpClient } from "./components/helpers/hooks/http-hook";
import ErrorModal from "./components/helpers/ErrorModal";
import { usePosition } from "./components/helpers/hooks/position-hook";
import "./App.css";

const App = () => {
	const [current, setCurrent] = useState();
	const [hourly, setHourly] = useState();
	const [daily, setDaily] = useState();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const { lat, lon, posError, clearPosError } = usePosition();
	const [reset, setReset] = useState(false);

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
			console.log(err);
		}
	};

	const setResetHandler = (value) => {
		setReset(value);
	};

	return (
		<>
			{!!!error && <ErrorModal error={posError} onClear={clearPosError} />}
			<ErrorModal error={error} onClear={clearError} />
			{isLoading && <LoadingSpinner overlay />}
			<div className="container">
				<TodayWeather
					getWeather={getWeather}
					current={current}
					reset={reset}
					setResetHandler={setResetHandler}
					getWeatherByLocation={getWeatherByLocation}
				/>
				<HourlyWeatherList weathers={hourly} reset={reset} />
				{daily && <DailyWeatherList weathers={daily} />}
				{current && <WeatherDetails current={current} />}
			</div>
		</>
	);
};

export default App;
