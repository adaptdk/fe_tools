/**
 * Throttle - Throttle the amount of execution a function is allowed within the delay.
 * @param   {function}  func          The function that you want to be executed
 * @param   {number}    delay         The time that has to go before the function is executed again
 * @param   {boolean}   [trailing]    Whether the function should be trailing or not
 * @returns {function}
 */
const throttle = (func, delay, trailing) => {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!trailing) func.apply(this, args);
    };
    const callNow = trailing && !timeout;
    if (!timeout) timeout = setTimeout(later, delay);
    if (callNow) func.apply(this, args);
  };
};

module.exports = throttle;
