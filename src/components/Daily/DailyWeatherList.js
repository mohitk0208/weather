import React from "react";

import DailyWeather from "./DailyWeather";
import "./DailyWeatherList.css";

const DailyWeatherList = ({ weathers, unit, reset }) => {
	return (
		<div className={`daily ${!weathers && "initial"} ${reset && "initial"}`}>
			{weathers && !reset && <h3>7-Day Weather Report</h3>}
			<div className="daily__data">
				{weathers &&
					!reset &&
					weathers.map((weather, i) => {
						if (i === 0) {
							return (
								<DailyWeather
									key={weather.dt}
									weather={weather}
									day={"Today"}
									unit={unit}
								/>
							);
						}

						return (
							<DailyWeather key={weather.dt} weather={weather} unit={unit} />
						);
					})}
			</div>
		</div>
	);
};

export default DailyWeatherList;
