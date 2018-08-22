
/**
 * Traverses through the object returning the variable further down the object
 * @param   {object} object     The object you want to traverse through
 * @param   {string} path       The string of the path you want. ex obj.nthObj.nthObj
 * @returns {*}                 Whatever the object is containing
 */
export const resolvePath = (object, path) => {
  const newValue = path.split(/\./);
  let current = object;
  while (newValue.length) {
    if (typeof current !== 'object') return undefined;
    current = current[newValue.shift()];
  }
  return current;
};

module.exports = resolvePath;
