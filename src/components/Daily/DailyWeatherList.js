import React from "react";

import DailyWeather from "./DailyWeather";
import "./DailyWeatherList.css";


const DailyWeatherList = ({ weathers }) => {
	return (
		<div className="daily">
			<h3>7-Day Weather Report</h3>
            <div className="daily__data">
			{weathers &&
				weathers.map((weather, i) => {
					if (i === 0) {
						return (
							<DailyWeather key={weather.dt} weather={weather} day={"Today"} />
						);
					}

					return <DailyWeather key={weather.dt} weather={weather} />;
				})}
            </div>
		</div>
	);
};

export default DailyWeatherList;
