# Frontend Tools - Adapt Agency
[![npm version](https://badge.fury.io/js/%40adaptagency%2Ffe_tools.svg)](https://badge.fury.io/js/%40adaptagency%2Ffe_tools)

## What is it?
fe_tools is a utility collection made to make development more easy and effecient.
It include some common mixins, sass functions and js functions which easily is used on every project.

## Setup
* Add node module to your package.json
```console
yarn add -D @adaptagency/fe_tools
```

### SCSS
Include the adapt-mixins mixin file in your main.scss file
```scss
// With tilde importer
@import "~@adaptagency/fe_tools/main";

// Regular
@import "node_modules/@adaptagency/fe_tools/main";
```

### Javascript
Assuming you're using a compiler like babel, you can impor the main.js like the following
```js
// ES6
// Importing everything
import ft from '@adaptagency/fe_tools';
// Importing individual function
import { onKeyPress } from '@adaptagency/fe_tools;

// ES5 >=
var ft = require('@adaptagency/fe_tools/main');     // Importing everything
```

## Documentation
### Overview
**SCSS**
- [Inner](https://github.com/adaptdk/fe_tools#inner-max-width)
- [rootModifier](https://github.com/adaptdk/fe_tools#rootmodifier)
- [respTypo - Responsive Typography](https://github.com/adaptdk/fe_tools#resptypo-responsive-typography)
### SCSS

---

### Inner (Max-Width)
A mixin for centering, and setting max-width and padding dynamically, changable by breakpoints.

#### Params
```js
/**
 * A mixin for centering, and setting max-width and padding dynamically, changable by breakpoints.
 * @param {string} $padding - The padding in pixels - 20px
 * @param {number} [$maxWidth] - The max-width property in pixels - 900px
 * @param {number} [$breakpoint] - When the (min-width: breakpoint) should apply, in pixels - 1024px
 */

@params (
  $padding $maxWidth,
  $padding $breakpoint $maxWidth // Recursive
)
```

#### Examples
##### Example 1
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

##### Example 2
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

---

### Root Modifier (rootModifier)
A mixin for appending a string to the first selector. Useful if you're using BEM modifier on root level of your selector.

#### Params
```js
/**
 * A mixin for appending a string to the first selector. Useful if you're using BEM modifier on root level of your selector.
 * @param {string} $stringToAppend - The string which will be added to the first selector in the selector.
 */

@params (
  $stringToAppend
)
```

#### Examples
##### Example 1
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

##### Example 2
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

##### Example 3
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

### Responsive Typography (RespTypo)
Place the mixin in the root of the scss file, out of a selector in your base typography scss file

#### Params
```js
/**
 * Place the mixin in the root of the scss file, out of a selector in your base typography scss file
 * @param {object} $typoSize - A SCSS map of the sizes
 */

/**
 * variable: $typoSize Params
 * @param {string} $selector - The Selector
 * @param {number} $fontSize - The fontsize in pixels for that breakpoint.
 * @param {number} [$breakpoint] - When the (min-width: breakpoint) should apply, in pixels - 1024px
 */

@params (
  $typoSize: (
    $selector:
      $fontSize, // The first does not accept breakpoint, because it's not wrapped in a media query

      $fontSize, // Recursive
      // If a custom breakpoint is not entered, take the default breakpoint.

      ($fontSize, $breakpoint) // Recursive
      // If a custom breakpoint is entered, then your need to wrap $fontSize and $breakpoint in parenthesis ()
  )
)
```

#### Default Params
```scss
// Breakpoint
$breakpoint: (410px, 700px, 1200px);
```

#### Params Example
```scss
$typoSize: (
  p: (1rem, 1.2rem),
  h1: (2.4rem, (2.6rem 500px),
  h2: (2.2rem, 2.1rem),
)
```

#### Examples
##### Example 1
**Input (SCSS)**
```scss
$typoSize: (
  h1: (2.8rem, 3rem),
  h2: (2.2rem, (2.4rem 900px), 2.6rem), // Custom Breakpoint for the second param
  h3: (1.9rem, 2.1rem),
  h4: (1.6rem, 1.8rem, (2.1rem 1260px)), // Added third property with custom breakpoint as well
  h5: (1.3rem, 1.6rem),
  h6: (1.1rem, 1.2rem, 1.5rem), // Added third property using default breakpoint param
);

@include respTypo($typoSize);
```

**Output (CSS)**
```scss
h1 {
  font-size: 2.8rem;

  @media (min-width: 410px) {
    font-size: 3rem;
  }
}

h2 {
  font-size: 2.2rem;

  @media (min-width: 410px) {
    font-size: 2.4rem;
  }

  @media (min-width: 900px) {
    font-size: 2.6rem;
  }
}

// etc..
```
