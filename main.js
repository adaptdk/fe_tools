// Collection of all the JS Functions
const onKeyPress = require('./src/js/onKeyPress');
const resolvePath = require('./src/js/resolvePath');
const throttle = require('./src/js/throttle');
const debounce = require('./src/js/debounce');

const ftCollection = {
  onKeyPress,
  resolvePath,
  throttle,
  debounce,
};

// Exporting them so they'll be available for the other node modules
module.exports = ftCollection;
