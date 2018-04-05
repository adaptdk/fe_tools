# Frontend Tools - Adapt Agency

## Setup 
* Add node module to your package.json
```console
yarn add -D adapt-mixins
```

### SCSS
Include the adapt-mixins mixin file in your main.scss file
```scss
@import "~@adaptagency/fe_tools/main";
```

#### What's included
##### Mixins
- Multiplier
- Visually Hidden (Accessibility)
- Inner (Max Width)

### Javascript
Assuming you're using a compiler like babel, you can impor the main.js like the following
```js
// ES6
import ft from '@adaptagency/fe_tools/main';

// ES5 >=
var ft = require('@adaptagency/fe_tools/main');
```

#### What's included
##### Mixins
- Is Browser
