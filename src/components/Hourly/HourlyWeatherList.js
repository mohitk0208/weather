import React from "react";

import HourlyWeather from "./HourlyWeather";
import "./HourlyWeatherList.css";

const weather = {
	dt: 1596636000,
	temp: 22.44,
	feels_like: 24.35,
	pressure: 1018,
	humidity: 83,
	dew_point: 19.41,
	clouds: 75,
	visibility: 10000,
	wind_speed: 2.16,
	wind_deg: 77,
	weather: [
		{
			id: 803,
			main: "Clouds",
			description: "broken clouds",
			icon: "04d",
		},
	],
	pop: 0,
};

const HourlyWeatherList = ({weathers}) => {
	return (
		<div className="hourly">
		{weathers && weathers.map(weather => {
			return <HourlyWeather key={weather.dt} weather={weather} />
		})}
			{/* <HourlyWeather weather={weather} />  */}
		</div>
	);
};

export default HourlyWeatherList;
