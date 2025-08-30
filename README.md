# CGBB CSS System
CGBB CSS System - A system that I use CSS and JavaScript to create my own CSS system.
## Embed
Before to start, please copy the code and paste it in your HTML file.

```html
<script src="https://cdn.jsdelivr.net/gh/codeguybutbackrooms/cgbb-css-system@main/js/embed.js"></script>
```

## Blur Effect (`.blr`)
It will apply a blur filter to any elements, customize intensity with `data-blur` <br>
Example usage:
```html
<p class="blr" data-blur="50">Blur Text</p>
```

## Circular Text (`crcle-txt`)
It will display a text as a circle, use `<div>`. We can let the text as `data-text` and radius is `data-radius`, make sure the `<div>` doesn't has any content except attributes<br>
Example Usage:
```html
<div class="crcle-txt" data-text="Hello World" data-radius="60"></div>
```

## Hover Radial Mask (`.hover-prg`)
Makes the text only show up around the cursor. 
