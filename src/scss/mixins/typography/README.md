## Reponsive Typography

### Usage and Parameters
```scss
$headerSizes: (
  h1: (2.8rem, 3rem),
  h2: (2.2rem, (2.4rem 900px)), // Custom Breakpoint for the second param
  h3: (1.9rem, 2.1rem),
  h4: (1.6rem, 1.8rem, (2.1rem 1260px), // Added third property with custom breakpoint as well
  h5: (1.3rem, 1.6rem),
  h6: (1.1rem, 1.2rem, 1.5rem), // Added third property using default breakpoint param
);

@include responsive-typography($headerSizes);
```

#### Default Params
```scss
// Breakpoint
$bps: (410px, 700px, 1200px, 1440px, 1900px, 2100px);
```