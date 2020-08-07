import React from "react";

import HourlyWeather from "./HourlyWeather";
import "./HourlyWeatherList.css";

const HourlyWeatherList = ({ weathers, reset }) => {
	return (
		<div className={`hourly ${!weathers && "initial"} ${reset && "initial"}`}>
			{weathers &&
				weathers.map((weather,index) => {
					return <HourlyWeather key={weather.dt} weather={weather} delay={0.35 + index*0.1} reset={reset} />;
				})}
		</div>
	);
};

export default HourlyWeatherList;
