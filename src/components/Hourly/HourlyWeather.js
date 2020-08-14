import React from "react";
import {celciusTofahrenheit,getTime} from "../helpers/functions"

import "./HourlyWeather.css";

const HourlyWeather = ({ weather, delay, unit }) => {
	return (
		<div className={`hour-weather`}>
			<div className="hour-weather__time">{getTime(weather.dt)}</div>
			<div className="hour-weather__icon">
				<img
					src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt={weather.weather[0].icon}
				></img>
			</div>
			<div className="hour-weather__main">
				<span>{weather.weather[0].main}</span>
			</div>
			<div className="hour-weather__temp">
				<span>
					{unit ? weather.temp : celciusTofahrenheit(weather.temp)} &deg;
					{unit ? "C" : "F"}
				</span>
			</div>
		</div>
	);
};

export default HourlyWeather;
