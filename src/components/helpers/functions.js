/**
 * function to convert temperature from degree celcius to fahrenheit.
 * with decimal place rounded to two places.
 * uses formula f = c*(9/5) + 32
 * @param {string | Number} celciusValue
 * @return {string}
 */
export const celciusTofahrenheit = (celciusValue) => {
	if (celciusValue === null || celciusValue === undefined) return;
	const fahrenheitValue = Number(celciusValue) * (9 / 5) + 32;
	return (fahrenheitValue % 1 === 0
		? fahrenheitValue
		: fahrenheitValue.toFixed(2)
	).toString();
};

/**
 * function to get day from time in seconds since 1 jan 1970
 * @param {string} timeInSeconds value of time in seconds from 1 jan 1970
 * @return {string}
 */
export const getDayFromTimeInSeconds = (timeInSeconds) => {
	if (timeInSeconds === null || timeInSeconds === undefined) return;
	return new Date(timeInSeconds * 1000).toDateString().split(" ")[0];
};

/**
 * get month and date from time in seconds since 1 jan 1970
 * @param {string} timeInSeconds value of time in seconds from 1 jan 1970
 * @return {string} Format:- Month date
 */
export const getMonthAndDateFromTimeInSeconds = (timeInSeconds) => {
	if (timeInSeconds === null || timeInSeconds === undefined) return;
	const date = new Date(timeInSeconds * 1000).toDateString().split(" ");
	return `${date[1]} ${date[2]}`;
};

export const getTime = (time) => {
	const t = new Date(time * 1000).toLocaleTimeString();
	const x = t.split(" ")[0];
	const y = t.split(" ")[1];

	return x.slice(0, x.length - 3) + " " + y;
};
