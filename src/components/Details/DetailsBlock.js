import React from "react";

import "./DetailsBlock.css";

const DetailsBlock = ({ category, value, unit }) => {
	return (
		<div className="details-block">
			<div className="details-block__value">{value}<span>{unit}</span> </div>
			<div className="details-block__category">{category}</div>
		</div>
	);
};

export default DetailsBlock;