# CGBB CSS System
CGBB CSS System - A system that I use CSS and JavaScript to create my own CSS system.
## Embed
Before to start, please copy the code and paste it in your HTML file.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/codeguybutbackrooms/cgbb-css-system@main/css/embed.css">
<script src="https://cdn.jsdelivr.net/gh/codeguybutbackrooms/cgbb-css-system@main/js/embed.js"></script>
```

## Blur text
To make it blur, create an element with class "blr". It's like this
```html
<p class="blr">Idk</p>
```
The default is 0.5rem. If you want custom, please use inline CSS to change `--blr-amount`
```html
<p class="blr" style="--blr-amount: 0.07rem;">Blur text</p>
```
0.07 is good to be honest.
