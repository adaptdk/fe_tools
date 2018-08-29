/**
 * A debounce function
 * @param   {function}  func          The function which should be executed
 * @param   {number}    delay         The amount of delay because the function should be executed
 * @param   {boolean}   [trailing]    Whether the function should be trailing or not
 * @returns {function}
 */
const debounce = (func, delay, trailing) => {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!trailing) func.apply(this, args);
    };
    const callNow = trailing && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    if (callNow) func.apply(this, args);
  };
};

module.exports = debounce;
