# svgLoad
Simple function that detects SVG support and appends the SVG or the png fallback to the document

The library loads and injects SVG files inline with support for fallback to a png file in case the browser doesn't support SVG.

##How to use it
Add the script to your page or use browserify (highly recommended) and require it. I recomend using npm as your package manager to make your life easier.

    svgLoad([{
        target: '.img',
          url: 'test/assets/test',
          callback: function() {
            var hOne = document.querySelector('h1');
            hOne.innerHTML = 'It worked!';
          }
      }])
