# Frontend Tools - Adapt Agency

### Setup 
* Add node module to your package.json
```
yarn add -D adapt-mixins
```

#### SCSS
Include the adapt-mixins mixin file in your main.scss file
```
@import "~fe_tools/main.scss";
```

##### What's included
- **Mixins**
- - Multiplier
- - Visually Hidden (Accessibility)
- - Inner (Max Width)

#### Javascript
Assuming you're using a compiler like babel, you can impor the main.js like the following
```
// ES6
import * as ft from 'fe_tools/main.js';

// ES5 >=
const ft = require('fe_tools/main.js');
```

##### What's included
- **Mixins**
- - Multiplier
- - Visually Hidden (Accessibility)
- - Inner (Max Width)