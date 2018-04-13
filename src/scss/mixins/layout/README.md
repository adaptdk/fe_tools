# Inner (Max-Width)
A mixin for centering, and setting max-width and padding dynamically, changable by breakpoints. 

## Params
```js
/**
 * @mixin inner Params
 * @param {string} $padding - The padding in pixels - 20px
 * @param {number} [$maxWidth] - The max-width property in pixels - 900px
 * @param {number} [$breakpoint] - When the (min-width: breakpoint) should apply, in pixels - 1024px
 */
 
@params (
  $padding $maxWidth,
  $padding $breakpoint $maxWidth // Recursive
)
```

## Examples
### Example 1
#### Input (SCSS)
```scss
.h1 {
  @include inner(20px 900px);
}
```

#### Output (CSS)
```scss
.h1 {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
```

### Example 2
#### Input (SCSS)
```scss
.h1 {
  @include inner(10px 600px, 20px 900px, null 1200px 900px);
}
```

#### Output (CSS)
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
