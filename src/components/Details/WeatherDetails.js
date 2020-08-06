import React from "react";

import DetailsBlock from "./DetailsBlock";
import "./WeatherDetails.css";

const WeatherDetails = ({ current }) => {
	return (
		<>
            <h2 className="heading">Weather Details </h2>
			{current && (
				<div className="details">
					<DetailsBlock
						category={"temperatre Felt"}
						value={current.main.feels_like}
					/>
					<DetailsBlock category={"Visibility"} value={current.visibility} />
					<DetailsBlock
						category={"Air Pressure"}
						value={current.main.pressure}
					/>
					<DetailsBlock
						category={"Humidity"}
						value={current.main.humidity + "%"}
					/>
				</div>
			)}
		</>
	);
};

export default WeatherDetails;
