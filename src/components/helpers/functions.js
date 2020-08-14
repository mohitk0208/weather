/**
 * function to convert temperature from degree celcius to fahrenheit.
 * with decimal place rounded to two places.
 * uses formula f = c*(9/5) + 32
 * @param {value in celcius } celciusValue
 * @returns string
 */
export const celciusTofahrenheit = (celciusValue) => {
	if (celciusValue === null || celciusValue === undefined) return;
	const fahrenheitValue = Number(celciusValue) * (9 / 5) + 32;
	return (fahrenheitValue % 1 === 0
		? fahrenheitValue
		: fahrenheitValue.toFixed(2)
	).toString();
};

export const getDay = (time) => {
	return new Date(time * 1000).toDateString().split(" ")[0];
};

export const getDate = (time) => {
	const x = new Date(time * 1000).toDateString().split(" ");
	return x[1] + " " + x[2];
};

export const getTime = (time) => {
	const t = new Date(time * 1000).toLocaleTimeString();
	const x = t.split(" ")[0];
	const y = t.split(" ")[1];

	return x.slice(0, x.length - 3) + " " + y;
};
