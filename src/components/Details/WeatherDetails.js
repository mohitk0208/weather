import React from "react";

import DetailsBlock from "./DetailsBlock";
import "./WeatherDetails.css";
const toFahrenheit = (celcius) => {
	console.log(celcius);
	const f = Number(celcius) * (9 / 5) + 32;
	return f % 1 === 0 ? f : f.toFixed(2);
};

const WeatherDetails = ({ current, unit, reset }) => {
	return (
		<>
			<div
				className={`details-container ${!current && "initial"} ${
					reset && "initial"
				}`}
			>
				{current && !reset && <h2 className="heading">Weather Details </h2>}
				{current && !reset && (
					<div className="details">
						<DetailsBlock
							category={"temperatre Felt"}
							value={
								unit
									? current.main.feels_like
									: toFahrenheit(current.main.feels_like)
							}
							unit={unit ? "°C" : "°F"}
						/>
						<DetailsBlock
							category={"Visibility"}
							value={Number(current.visibility) / 1000}
							unit={" km"}
						/>
						<DetailsBlock
							category={"Air Pressure"}
							value={current.main.pressure}
							unit={" hPa"}
						/>
						<DetailsBlock
							category={"Humidity"}
							value={current.main.humidity}
							unit={" %"}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default WeatherDetails;
