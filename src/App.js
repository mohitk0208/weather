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
	const [background, setBackground] = useState(
		"https://332y2620ed2r2nv2m5pbphm1-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/17960027_web1_190731-ok-shu-weather-tues.jpg"
	);
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
			console.log(err);
		}
	};

	const setResetHandler = (value) => {
		setReset(value);
	};

	useEffect(() => {
		if (current) {
			console.log(current.weather[0].id);

			// console.log(Number((Number(current.weather[0].id) / 100).toFixed(0)));

			switch (Number((Number(current.weather[0].id) / 100).toFixed(0))) {
				case 2:
					setBackground(
						"https://p0.pikist.com/photos/356/229/lightning-bolt-thunderstorm-thunderbolt-thunder-storm-power-weather-dangerous.jpg"
					);
					break;
				case 3:
					setBackground(
						"https://p0.pikist.com/photos/677/746/rain-drizzle-galau-lockscreen-wallpaper.jpg"
					);
					break;
				case 5:
					setBackground(
						"https://i.pinimg.com/originals/eb/d1/62/ebd162ebc2dec0a1dae25b83abc038cb.jpg"
					);
					break;
				case 6:
					setBackground(
						"https://www.wallpaperup.com/uploads/wallpapers/2017/07/09/1094016/714a7462d67cb819308786e7c603350e-1000.jpg"
					);
					break;
				case 7:
					if (Number(current.weather[0].id) === 721) {
						setBackground(
							"https://live.staticflickr.com/1680/24602190263_2eebc12a31_b.jpg"
						);
					} else if (Number(current.weather[0].id) === 741) {
						setBackground(
							"https://c.pxhere.com/photos/85/d1/photo-33709.jpg!d"
						);
					} else {
						setBackground(
							"https://live.staticflickr.com/1680/24602190263_2eebc12a31_b.jpg"
						);
					}
					break;
				case 8:
					if (Number(current.weather[0].id) === 800) {
						setBackground(
							"https://p0.pikist.com/photos/997/770/sky-sun-lake-blue-nature-summer-sunlight-sunny-light.jpg"
						);
					} else {
						setBackground(
							"https://storage.needpix.com/rsynced_images/clouds-4258726_1280.jpg"
						);
					}
					break;
				default:
					// console.log("yess");
					setBackground(
						"https://332y2620ed2r2nv2m5pbphm1-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/17960027_web1_190731-ok-shu-weather-tues.jpg"
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
