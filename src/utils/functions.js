import queryString from 'query-string';

/**
 * function to convert temperature from degree celcius to fahrenheit.
 * with decimal place rounded to two places.
 * uses formula f = c*(9/5) + 32
 * @param {string | Number} celciusValue
 * @return {string} fahrenheit value
 */
export const celsiusToFahrenheit = (celciusValue) => {
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


export const setQueryStringValue = (key, value) => {

  /**
   * get current url
   * get the previous query strings (parsed)
   * add new key value pair
   * then stringify the new query strings
   * then add the new query strings to the url
   *
   */

  const queryParsed = queryString.parse(window.location.search);
  let parsed = {} ;

  if (queryParsed.data) {
    parsed = JSON.parse(queryParsed.data);
  }
  console.log("parsed", parsed);

  parsed[key] = value;


  const stringified = queryString.stringify({data: JSON.stringify(parsed)});
  console.log("stringified", stringified);

  window.history.pushState({}, "", `${window.location.pathname}?${stringified}`);
}

export const getQueryStringValue = (key) => {

  /**
   * get current url
   * get the previous query strings (parsed)
   * get the value of the key
   *
   */

  const stringified = queryString.parse(window.location.search);
  // console.log("stringified at parse", stringified);
  let parsed = {}

  if (stringified.data) {
    parsed = JSON.parse(stringified.data);
  }

  // console.log("parsed", parsed);

  return parsed[key];

}
