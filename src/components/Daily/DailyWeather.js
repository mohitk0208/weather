import React from "react";

import "./DailyWeather.css";

const getDate = (time) => {
	const x = new Date(time * 1000).toDateString().split(" ");
	return x[1] + " " + x[2];
};
const getDay = (time) => {
	return new Date(time * 1000).toDateString().split(" ")[0];
};

const toFahrenheit = (celcius) => {
	console.log(celcius);
	const f = Number(celcius) * (9 / 5) + 32;
	return f % 1 === 0 ? f : f.toFixed(2);
};

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
				{unit ? weather.temp.max : toFahrenheit(weather.temp.max)}/
				{unit ? weather.temp.min : toFahrenheit(weather.temp.min)}&deg;
				{unit ? "C" : "F"}
			</div>
		</div>
	);
};

export default DailyWeather;
