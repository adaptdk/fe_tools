# Reponsive Typography
Place the mixin in the root of the scss file, out of a selector in your base typography scss file

## Params
```js
/**
 * mixin: responsiveTypography Params
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

### Default Params
```scss
// Breakpoint
$breakpoint: (410px, 700px, 1200px);
```

### Params Example
```scss
$typoSize: (
  p: (1rem, 1.2rem),
  h1: (2.4rem, (2.6rem 500px),
  h2: (2.2rem, 2.1rem),
)
```

## Examples
### Example 1
#### Input (SCSS)
```scss
$typoSize: (
  h1: (2.8rem, 3rem),
  h2: (2.2rem, (2.4rem 900px), 2.6rem), // Custom Breakpoint for the second param
  h3: (1.9rem, 2.1rem),
  h4: (1.6rem, 1.8rem, (2.1rem 1260px), // Added third property with custom breakpoint as well
  h5: (1.3rem, 1.6rem),
  h6: (1.1rem, 1.2rem, 1.5rem), // Added third property using default breakpoint param
);

@include responsiveTypography($typoSize);
```

#### Output (CSS)
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
