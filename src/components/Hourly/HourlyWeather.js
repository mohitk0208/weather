import React from "react";

import "./HourlyWeather.css"
const getTime = (time) => {
	const t = new Date(time * 1000).toLocaleTimeString();
	const x = t.split(" ")[0];
	const y = t.split(" ")[1];

	return x.slice(0, x.length - 3) + " " + y;
};

const HourlyWeather = ({ weather }) => {
	return (
		<div className="hour-weather">
			<div className="hour-weather__time">
				{getTime(weather.dt)}
			</div>
            <div className="hour-weather__main">
                <span>{weather.weather[0].main}</span>
            </div>
            <div className="hour-weather__temp">
                <span>{weather.temp} &deg;C</span>
            </div>
		</div>
	);
};

export default HourlyWeather;
