import React, { useState, useEffect } from "react";

import TodayWeather from "./components/Today/TodayWeather";
import HourlyWeatherList from "./components/Hourly/HourlyWeatherList";
import DailyWeatherList from "./components/Daily/DailyWeatherList";
import WeatherDetails from "./components/Details/WeatherDetails";
import LoadingSpinner from "./components/helpers/LoadingSpinner";
import { useHttpClient } from "./components/helpers/hooks/http-hook";
import ErrorModal from "./components/helpers/ErrorModal";
import { usePosition } from "./components/helpers/hooks/position-hook";
import "./App.css";

const App = () => {
	const [current, setCurrent] = useState();
	const [hourly, setHourly] = useState();
	const [daily, setDaily] = useState();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const { lat, lon, posError, clearPosError } = usePosition();
	const [reset, setReset] = useState(false);
	const [background, setBackground] = useState("/images/default.jpg");
	const [u, setU] = useState(true);

	const getWeather = async (city) => {
		try {
			const currentResponseData = await sendRequest(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
				"GET"
			);
			setCurrent(currentResponseData);
			const lat = currentResponseData.coord.lat;
			const lon = currentResponseData.coord.lon;

			const completeWeatherResponseData = await sendRequest(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
				"GET"
			);

			setHourly(completeWeatherResponseData.hourly);
			setDaily(completeWeatherResponseData.daily);
			setResetHandler(false);
		} catch (err) {}
	};

	const getWeatherByLocation = async () => {
		try {
			const currentResponseData = await sendRequest(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
				"GET"
			);
			setCurrent(currentResponseData);

			const completeWeatherResponseData = await sendRequest(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_OPENWEATHER_API}`,
				"GET"
			);

			setHourly(completeWeatherResponseData.hourly);
			setDaily(completeWeatherResponseData.daily);
		} catch (err) {
		}
	};

	const setResetHandler = (value) => {
		setReset(value);
	};

	useEffect(() => {
		if (current) {
			switch (Number((Number(current.weather[0].id) / 100).toFixed(0))) {
				case 2:
					setBackground(
						"/images/2XX.jpg"
					);
					break;
				case 3:
					setBackground(
						"/images/3XX.jpg"
					);
					break;
				case 5:
					setBackground(
						"/images/5XX.jpg"
					);
					break;
				case 6:
					setBackground(
						"/images/6XX.jpg"
					);
					break;
				case 7:
					if (Number(current.weather[0].id) === 721) {
						setBackground(
							"/images/721.jpg"
						);
					} else if (Number(current.weather[0].id) === 741 || Number(current.weather[0].id) === 701) {
						setBackground(
							"/images/741.jpg"
						);
					} else  {
						setBackground(
							"/images/7XX.jpg"
						);
					}
					break;
				case 8:
					if (Number(current.weather[0].id) === 800) {
						setBackground(
							"/images/800.jpg"
						);
					} else {
						setBackground(
							"/images/8XX.jpg"
						);
					}
					break;
				default:
					setBackground(
						"/images/default.jpg"
					);
					break;
			}
		}
	}, [current]);

	return (
		<>
			{!!!error && <ErrorModal error={posError} onClear={clearPosError} />}
			<ErrorModal error={error} onClear={clearError} />
			{isLoading && <LoadingSpinner overlay />}
			<div
				className="container"
				style={{
					backgroundImage: `url(${background})`,
				}}
			>
				<TodayWeather
					getWeather={getWeather}
					current={current}
					reset={reset}
					setResetHandler={setResetHandler}
					getWeatherByLocation={getWeatherByLocation}
					unit={u}
					setUnit={setU}
				/>
				<HourlyWeatherList weathers={hourly} reset={reset} unit={u} />
				<DailyWeatherList weathers={daily} unit={u} reset={reset} />
				<WeatherDetails current={current} unit={u} reset={reset} />
			</div>
		</>
	);
};

export default App;
