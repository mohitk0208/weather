import React from "react";
import {celciusTofahrenheit,getDay,getDate} from "../helpers/functions"

import "./DailyWeather.css";

const DailyWeather = ({ weather, day, unit }) => {
	return (
		<div className="days">
			<div className="days__date">{getDate(weather.dt)}</div>
			<div className="days__day">{day ? day : getDay(weather.dt)}</div>
			<div className="days__icon">
				<img
					src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt={weather.weather[0].icon}
				/>
			</div>
			<div className="days__main">{weather.weather[0].main}</div>
			<div className="days__minmax">
				{unit ? weather.temp.max : celciusTofahrenheit(weather.temp.max)}/
				{unit ? weather.temp.min : celciusTofahrenheit(weather.temp.min)}&deg;
				{unit ? "C" : "F"}
			</div>
		</div>
	);
};

export default DailyWeather;
