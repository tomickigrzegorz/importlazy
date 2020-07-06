## An example of using dynamic file loading.

Dynamic import() js file with aync/await

> [Live DEMO](https://tomik23.github.io/importlazy/)

If you want this example to work in IE11, just add it to index.html

```html
<script type="text/javascript">
  if (!('Promise' in window)) {
    var script = document.createElement("script");
    script.src = "https://polyfill.io/v3/polyfill.min.js?features=Promise";
    document.getElementsByTagName('head')[0].appendChild(script);
  }
</script>
```

## How its work?

If you want to load a js file, all you have to do is add `data-module="js-module-name"`. An example below: 

```html
<button id="background" class="button-primary" data-module="background">change the background</button>
```
In this case, background.js will be dynamically loaded.