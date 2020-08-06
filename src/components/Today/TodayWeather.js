import React, { useState, useRef } from "react";

import "./TodayWeather.css";

const getDay = (time) => {
	const date = new Date(time * 1000).toDateString();
	return date.split(" ")[0];
};

const TodayWeather = ({ current, getWeather }) => {
	const [value, setValue] = useState("");
	const inputRef = useRef(null);

	const handleCityWeather = (e) => {
		e.preventDefault();
		inputRef.current.blur();
		getWeather(value);
	};

	return (
		<div className="today">
			<form onSubmit={handleCityWeather}>
				<input
					id="cityname"
					type="text"
					placeholder="CITYNAME"
					onChange={(e) => setValue(e.target.value)}
					value={value}
					ref={inputRef}
				/>
			</form>
			<div className="current">
				{current && (
					<div className="current__temp">
						<div className="current__temp-current">
							<span className="temp">{current.main.temp}</span>
							<span className="unit"> &deg;C</span>
						</div>
						<div className="current__temp-minmax">
							<span>
								{current.main.temp_min} &deg;C / {current.main.temp_max} &deg;C{" "}
							</span>
							<span>{"  " + getDay(current.dt)}</span>
						</div>
					</div>
				)}
				{current && (
					<div className="current__weather">
						<div className="current__weather-main">
							{current.weather[0].main}
						</div>
						<div className="current__weaher-description">
							{current.weather[0].description}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TodayWeather;
