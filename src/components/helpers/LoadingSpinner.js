import React from "react";
import "./LoadingSpinner.css"

const LoadingSpinner = ({ overlay }) => {
	return <div className="loading-spinner">
        <div className="spinner"></div>
    </div>;
};

export default LoadingSpinner;
