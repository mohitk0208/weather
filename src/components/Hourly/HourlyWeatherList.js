import React from "react";

import HourlyWeather from "./HourlyWeather";
import "./HourlyWeatherList.css";

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
