import React from "react";

import "./DetailsBlock.css";

const DetailsBlock = ({ category, value }) => {
	return (
		<div className="details-block">
			<div className="details-block__value">{value}</div>
			<div className="details-block__category">{category}</div>
		</div>
	);
};

export default DetailsBlock;