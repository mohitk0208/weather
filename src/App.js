import React, { useState } from "react";

import TodayWeather from "./components/Today/TodayWeather";
import HourlyWeatherList from "./components/Hourly/HourlyWeatherList";
import DailyWeatherList from "./components/Daily/DailyWeatherList";
import WeatherDetails from "./components/Details/WeatherDetails";
import "./App.css";

const App = () => {
	const [current, setCurrent] = useState();
	const [hourly, setHourly] = useState();
	const [daily, setDaily] = useState();

	const getWeather = async (city) => {
		try {
			const currentResponse = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cffe06b6b4a0b5f798725a26aba2a2c3`,
				{
					method: "GET",
				}
			);

			const currentResponseData = await currentResponse.json();
			setCurrent(currentResponseData);

			console.log(currentResponseData.coord);
			const lat = currentResponseData.coord.lat;
			const lon = currentResponseData.coord.lon;

			console.log(lat, lon);

			const completeWeatherResponse = await fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=cffe06b6b4a0b5f798725a26aba2a2c3`,
				{
					method: "GET",
				}
			);

			const completeWeatherResponseData = await completeWeatherResponse.json();

			console.log(completeWeatherResponseData.current);
			setHourly(completeWeatherResponseData.hourly);
			setDaily(completeWeatherResponseData.daily);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="container">
			<TodayWeather getWeather={getWeather} current={current} />
			<HourlyWeatherList weathers={hourly} />
			<DailyWeatherList weathers={daily} />
			<WeatherDetails current={current} />
		</div>
	);
};

export default App;
