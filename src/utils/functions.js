/**
 * function to convert temperature from degree celcius to fahrenheit.
 * with decimal place rounded to two places.
 * uses formula f = c*(9/5) + 32
 * @param {string | Number} celciusValue
 * @return {string} fahrenheit value
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
 * @return {string} Eg: Fri
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

/**
 * get time string without the seconds in it( in AM or PM)
 * @param {string} timeInSeconds value of time in seconds from 1 jan 1970
 * @return {string} Eg: 12:13 PM
 */
export const getTimeWithoutSecondsFromTimeInSeconds = (timeInSeconds) => {
  if (timeInSeconds === null || timeInSeconds === undefined) return;
  const ArrayOfTime = new Date(timeInSeconds * 1000).toLocaleTimeString().split(" ");
  const timeValues = ArrayOfTime[0].split(":");
  const amOrPm = ArrayOfTime[1];
  return `${timeValues[0]}:${timeValues[1]} ${amOrPm}`
};
