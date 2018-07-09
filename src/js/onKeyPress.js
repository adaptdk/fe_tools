/**
 * Execute the function if the key is pressed
 * @param   {number}   key        The key that should be pressed for the function to be executed
 * @param   {function} func       The function that should be executed
 * @returns {function}            The exectued function
 */
const onKeyPress = (key, func) => {
  document.addEventListener('keydown', e => {
    const keycode = ((typeof e.keyCode !== 'undefined' && e.keyCode) ? e.keyCode : e.which);
    if (key === keycode) {
      func();
    }
  });
};

module.exports = onKeyPress;
