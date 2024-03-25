const DateTime = require('luxon').DateTime;

/**
 * @param {Date} date Receives a date
 * @returns Returns a date
 * @description Function to format a date into UNIX timestamp format
 */
exports.formatDateToTimestamp = (date) => {
  return DateTime.fromJSDate(date).toSeconds();
};

/**
 * @param {Date} date Receives a date
 * @param {string} format Receives the format to change in the date
 * @returns Returns a date
 * @description Function to format a date into a specific format (e.g., "DD/MM/YYYY" for Argentina)
 */
exports.formatDateInCustomFormat = (date, format) => {
  format = format || 'yyyy-MM-dd HH:mm:ss';
  return DateTime.fromJSDate(date).toFormat(format);
};

/**
 * @returns Returns the current date in UNIX timestamp format
 * @description Function to get the current date in UNIX timestamp format
 */
exports.getCurrentTimestamp = () => DateTime.local().toSeconds();

/**
 * @param {string} format Receives the format
 * @returns Returns the current date in a specific format
 * @description Function to get the current date in a specific format
 */
exports.getCurrentDateInCustomFormat = (format) => DateTime.local().toFormat(format);
