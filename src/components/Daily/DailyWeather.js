import React from "react";

import "./DailyWeather.css";

const getDate = (time) => {
	const x = new Date(time * 1000).toDateString().split(" ");
	return x[1] + " " + x[2];
};
const getDay = (time) => {
    return new Date(time * 1000).toDateString().split(" ")[0];
}

const DailyWeather = ({ weather,day }) => {
	return (
		<div className="days">
			<div className="days__date">{getDate(weather.dt)}</div>
            <div className="days__day">{day ? day : getDay(weather.dt)}</div>
            <div className="days__main">{weather.weather[0].main}</div>
            <div className="days__minmax">{weather.temp.max}/{weather.temp.max}&deg;C</div>
		</div>
	);
};

export default DailyWeather;
