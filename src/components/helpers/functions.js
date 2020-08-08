export const toFahrenheit = (celcius) => {
	const f = Number(celcius) * (9 / 5) + 32;
	return f % 1 === 0 ? f : f.toFixed(2);
};

export const getDay = (time) => {
	return new Date(time * 1000).toDateString().split(" ")[0];
};

export const getDate = (time) => {
	const x = new Date(time * 1000).toDateString().split(" ");
	return x[1] + " " + x[2];
};
