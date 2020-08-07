import { useEffect, useState } from "react";

export const usePosition = () => {
	const [position, setPosition] = useState({});
	const [posError, setPosError] = useState();

	const onChange = ({ coords }) => {
		setPosition({
			lat: coords.latitude,
			lon: coords.longitude,
        });
        console.log(coords);
	};

	const OnError = (error) => {
		setPosError(error.message);
		console.log(error);
	};

	const clearPosError = () => {
		setPosError(null);
	};

	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setPosError("Geolocation not Supported.");
			return;
		}

		const watcher = geo.watchPosition(onChange, OnError,{enableHighAccuracy:true});

		return () => geo.clearWatch(watcher);
	}, []);

	return { ...position, posError,clearPosError };
};
