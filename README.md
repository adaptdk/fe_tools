# Frontend Tools - Adapt Agency
[![npm version](https://badge.fury.io/js/%40adaptagency%2Ffe_tools.svg)](https://badge.fury.io/js/%40adaptagency%2Ffe_tools)

## Setup 
* Add node module to your package.json
```console
yarn add -D @adaptagency/fe_tools
```

### SCSS
Include the adapt-mixins mixin file in your main.scss file
```scss
@import "~@adaptagency/fe_tools/main";
```

#### What's included
##### Mixins
- Multiplier
- Full width (Force element to be full width when restricted by a container max-width)
- RespTypo (Reponsive Typography)
- Visually Hidden (Accessibility)
- Inner (Max Width)
##### Functions
- string split
- sum

### Javascript
Assuming you're using a compiler like babel, you can impor the main.js like the following
```js
// ES6
import ft from '@adaptagency/fe_tools/main';

// ES5 >=
var ft = require('@adaptagency/fe_tools/main');
```

#### What's included
##### Utilities
- Is Browser
