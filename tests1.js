/**
 * @function commonTestingFunctions
 * @description Contains common testing functions.
 *
 * @returns {object} - An object containing the common testing functions.
 *
 * @example
 * // Returns { isEqual: [Function], isTruthy: [Function] }
 * const testingFunctions = commonTestingFunctions();
 */
function commonTestingFunctions() {
  /**
   * @function isEqual
   * @description Checks if two values are equal.
   *
   * @param {*} value1 - The first value.
   * @param {*} value2 - The second value.
   * @returns {boolean} - True if the values are equal, false otherwise.
   *
   * @example
   * // Returns true
   * isEqual(5, 5);
   *
   * @example
   * // Returns false
   * isEqual(5, '5');
   */
  function isEqual(value1, value2) {
    return value1 === value2;
  }
 
  /**
   * @function isTruthy
   * @description Checks if a value is truthy.
   *
   * @param {*} value - The value to check.
   * @returns {boolean} - True if the value is truthy, false otherwise.
   *
   * @example
   * // Returns true
   * isTruthy(5);
   *
   * @example
   * // Returns false
   * isTruthy(0);
   */
  function isTruthy(value) {
    return Boolean(value);
  }
 
  // Return an object containing the common testing functions
  return {
    isEqual,
    isTruthy,
  };
}
 
// Example usage:
// Get the common testing functions
const testingFunctions = commonTestingFunctions();
 
// Use the isEqual function to check if two values are equal
console.log(testingFunctions.isEqual(5, 5)); // Output: true
 
// Use the isTruthy function to check if a value is truthy
console.log(testingFunctions.isTruthy(5)); // Output: true
