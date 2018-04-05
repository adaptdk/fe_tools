// Collection of all the JS Functions
var ftCollection = {
  isBrowser: function () {
    return typeof window !== 'undefined';
  }
};

// Exporting them so they'll be available for the other node modules
module.exports = ftCollection;