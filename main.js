// Collection of all the JS Functions
const onKeyPress = require('./src/js/onKeyPress');
const resolvePath = require('./src/js/resolvePath');

const ftCollection = {
  onKeyPress,
  resolvePath,
}

// Exporting them so they'll be available for the other node modules
module.exports = ftCollection;
