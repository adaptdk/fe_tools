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


## Documentation
### SCSS

#### Inner (Max-Width)
A mixin for centering, and setting max-width and padding dynamically, changable by breakpoints. 

##### Params
```js
/**
 * mixin: inner Params
 * @param {string} $padding - The padding in pixels - 20px
 * @param {number} [$maxWidth] - The max-width property in pixels - 900px
 * @param {number} [$breakpoint] - When the (min-width: breakpoint) should apply, in pixels - 1024px
 */
 
@params (
  $padding $maxWidth,
  $padding $breakpoint $maxWidth // Recursive
)
```

##### Examples
###### Example 1
**Input (SCSS)**
```scss
.h1 {
  @include inner(20px 900px);
}
```

**Output (CSS)**
```scss
.h1 {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
```

###### Example 2
**Input (SCSS)**
```scss
.h1 {
  @include inner(10px 600px, 20px 900px, null 1200px 900px);
}
```

**Output (CSS)**
```scss
.h1 {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  
  @media (min-width: 900px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  @media (min-width: 1200px) {
    max-width: 900px;
  }
}
```

#### rootModifier
##### Params
```js
/**
 * A mixin for appending a string to the first selector. Useful if you're using BEM modifier on root level of your selector.
 * @param {string} $stringToAppend - The string which will be added to the first selector in the selector.
 */
 
@params (
  $stringToAppend
)
```

##### Examples
###### Example 1
**Input (SCSS)**
```scss
.lol {
  .mort {
    @include rootModifier('de') {
      ...styling
    }
  {
}
```

**Output (CSS)**
```scss
.lolde .mort {
  ...styling
}
```

###### Example 2
**Input (SCSS)**
```scss
.lol {
  & &de {
    &mort {
      @include rootModifier('de') {
        ...styling
      }
    }
  {
}
```

**Output (CSS)**
```scss
.lol .loldemort {
  ...styling
}
```

###### Example 3
**Input (SCSS)**
```scss
.block {
  // The extra "&" is important, because we need the first selector to exist isolated.
  & &__element {
    .block {
      &__element {
        @include rootModifier('--myModifier') {
          ...styling
        }
      }
    }
  }
}
```

**Output (CSS)**
```scss
.block--myModifier .block__element .block__element { 
  ...styling
}
```

