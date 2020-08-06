import React, { useState } from "react";

import "./TodayWeather.css";

const getDay = (time) => {
	const date = new Date(time * 1000).toDateString();
	return date.split(" ")[0];
};

const TodayWeather = ({ current, getWeather }) => {
	const [value, setValue] = useState("");

	const handleCityWeather = (e) => {
		e.preventDefault();
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

//cffe06b6b4a0b5f798725a26aba2a2c3

// useEffect(() => {
// 	const getWeatherData = async () => {
// 		try {
// 			const response = await fetch(
// 				"http://api.openweathermap.org/data/2.5/weather?q=ranchi,jharkhand&units=metric&appid=cffe06b6b4a0b5f798725a26aba2a2c3",
// 				{
// 					method: "GET",
// 				}
// 			);

// 			const responseData = await response.json();
// 			console.log(responseData.main.temp + " C");
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	getWeatherData();
// });
