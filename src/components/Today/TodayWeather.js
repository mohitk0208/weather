import React, { useState, useRef } from "react";

import "./TodayWeather.css";

const getDay = (time) => {
	const date = new Date(time * 1000).toDateString();
	return date.split(" ")[0];
};

const toFahrenheit = (celcius) => {
	console.log(celcius);
	const f = Number(celcius) * (9 / 5) + 32;
	return f % 1 === 0 ? f : f.toFixed(2);
};

const TodayWeather = ({
	current,
	getWeatherByLocation,
	getWeather,
	setResetHandler,
	reset,
	unit,
	setUnit,
}) => {
	const [value, setValue] = useState("");
	const inputRef = useRef(null);

	const handleCityWeather = async (e) => {
		e.preventDefault();
		inputRef.current.blur();
		setResetHandler(true);
		await getWeather(value, unit);
	};

	const locationHandler = async () => {
		setResetHandler(true);
		setValue("")
		await getWeatherByLocation();
		setResetHandler(false);
	};

	return (
		<div className={`today ${!current && "initial"} ${reset && "initial"}`}>
			<div className="location" onClick={locationHandler}>
				<i className="fas fa-map-marker-alt "></i>
			</div>
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
			<input
				type="checkbox"
				id="unit-choice"
				checked={unit}
				onChange={(e) => setUnit(e.target.checked)}
				hidden
			/>
			<label htmlFor="unit-choice">
				<div className="unit-choice">
					<div className={`unit-value ${!unit ? "active" : "disabled"}`}>
						&deg;F
					</div>
					<div className={`unit-value ${unit ? "active" : "disabled"}`}>
						&deg;C
					</div>
					<div
						className={`unit-cover ${unit ? "celcius" : "fahrenheit"}`}
					></div>
				</div>
			</label>
			{!reset && (
				<div className={`current`}>
					{current && (
						<div className="current__temp">
							<div className="current__temp-current">
								<span className="temp">
									{unit ? current.main.temp : toFahrenheit(current.main.temp)}
								</span>
								<span className="unit">&deg;{unit ? "C" : "F"}</span>
							</div>
							<div className="current__temp-minmax">
								<span>
									{unit
										? current.main.temp_min
										: toFahrenheit(current.main.temp_min)}
									&deg;{unit ? "C" : "F"}/
									{unit
										? current.main.temp_max
										: toFahrenheit(current.main.temp_max)}
									&deg;
									{unit ? "C" : "F"}
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
			)}
		</div>
	);
};

export default TodayWeather;
