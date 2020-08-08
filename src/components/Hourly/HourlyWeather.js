import React from "react";

import "./HourlyWeather.css";
const getTime = (time) => {
	const t = new Date(time * 1000).toLocaleTimeString();
	const x = t.split(" ")[0];
	const y = t.split(" ")[1];

	return x.slice(0, x.length - 3) + " " + y;
};

const toFahrenheit = (celcius) => {
	console.log(celcius);
	const f = Number(celcius) * (9 / 5) + 32;
	return f % 1 === 0 ? f : f.toFixed(2);
};
const HourlyWeather = ({ weather, delay, unit }) => {
	// const styles = {
	// 	transitionDelay: delay,
	// };

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
					{unit ? weather.temp : toFahrenheit(weather.temp)} &deg;
					{unit ? "C" : "F"}
				</span>
			</div>
		</div>
	);
};

export default HourlyWeather;
