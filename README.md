#SVG Files Loader for SystemJS and JSPM

This plugin allows to handle SVG files with DOM as specified by the [W3C](https://www.w3.org/TR/SVG/svgdom.html) . However If you simply want to display a SVG image in your html document, the [official image plugin](https://github.com/systemjs/plugin-image) could be a better choice for you.

## Compatibility

### &#x2714; Browsers
Although *SystemJS* is compatible  with Internet Exlplorer 8, it is not the case of this plugin: the compatibility of IE with SVG is limited to the version 9 (and more recents).

For more details about the SVG support by browsers: [read the dedicated caniuse feature](http://caniuse.com/#feat=svg).

### &#x2718; NodesJS
The plugin uses a *DOMParser* object and the *SVGDocument* interface which are not availables from NodeJS. Consequently, this plugin is not usable without browsers.

## SVG File
The SVG loaded file must be *well-formed*, else an exception can be catched or the parser can interpret the document elements like [unknowns](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement).

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.0">
<!--
- DOCTYPE is optional
- NAMESPACE is required
- VERSION is optional
-->

  <!-- Insert your content here... -->
</svg>
```

##Examples

It is possible to appends the SVG file as picture.

```html
<figure id="fig-1">
  <!-- The SVG file will be inserted here. -->
  <figcaption>Inserted SVG File.</figcaption>
</figure>

<script src=".../system.js" charset="utf-8"></script>
<script type="text/javascript">
  // Loads a SVG file with SystemJS:
  System.import('./test.svg!svg.js').then(function(doc) {
    var fig = document.getElementById("fig-1");
    // Gets the root <svg> element of the imported document.
    var rootElem = doc.documentElement;
    // Insert the svg element into the html document.
    fig.appendChild(rootElem);
  });
</script>
```

You can also handle the loaded file: 
```js
System.import('./test.svg!svg.js').then(function(doc) {
  var rootElem = doc.documentElement;
  var color = "#f00";
  var children = rootElem.childNodes
  var n = children.length - 1;
  for(; n > -1;  n - 2) {
    children[n].setAttribute("fill", color);
  }
});
```

