import React from "react";

import HourlyWeather from "./HourlyWeather";
import "./HourlyWeatherList.css";

const HourlyWeatherList = ({ weathers, reset, unit }) => {
	return (
		<div className={`hourly ${!weathers && "initial"} ${reset && "initial"}`}>
			{weathers &&
				!reset &&
				weathers.map((weather, index) => {
					return (
						<HourlyWeather
							key={weather.dt}
							weather={weather}
							delay={0.35 + index * 0.1}
							reset={reset}
							unit={unit}
						/>
					);
				})}
		</div>
	);
};

export default HourlyWeatherList;
