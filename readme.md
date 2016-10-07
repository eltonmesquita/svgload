# svgLoad
Simple function that detects SVG support and appends the SVG or the png fallback to the document

The library loads and injects SVG files inline with support for fallback to a png file in case the browser doesn't support SVG.

## How to use it
Add the script to your page the classic way, inside a script tag or load it using a module loader (it's UMD packed).
If you're using npm just npm install it:

`npm install svgload`

Execute the function passing an object with the following parameters:
target   - The element on the page that'll get the image injected
url      - The url to the asset, without the file extension like: '/asets/image'
callback - A callback function that'll be executed after each element is injected

### Example
    <h1></h1>
    <div class="img"></div>
    <script>
      svgLoad([{
        target: '.img',
        url: 'test/assets/test',
        callback: function() {
          var hOne = document.querySelector('h1');
          hOne.innerHTML = 'It worked!';
        }
      }])
    </script>

## Compatibilty
It should work on:
- IE8+
- Android 2.1+
- Firefox 3.5+
- Safari/Safari Mobile (iOS)
- Chrome/Chrome Mobile
- Edge
- Opera/Opera Mobile

Any browser that supports `querySelector` and `XHR` should work too.


