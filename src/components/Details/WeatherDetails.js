import React from "react";

import DetailsBlock from "./DetailsBlock";
import "./WeatherDetails.css";

const WeatherDetails = ({ current }) => {
	return (
		<>
			<div className="details-container">
				<h2 className="heading">Weather Details </h2>
				{current && (
					<div className="details">
						<DetailsBlock
							category={"temperatre Felt"}
							value={current.main.feels_like}
							unit={` °C`}
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
