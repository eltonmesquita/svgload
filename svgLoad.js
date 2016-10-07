/**
 * Function to load SVG safely using AJAX, including fallback to png files when
 * SVG is not supported
 *
 * @param {Object} list     - List of objects with parameters for each file
 * @param {string} target   - The element on the page that'll get the image injected
 * @param {string} url      - The url to the asset, without the file extension
 *                            like: '/asets/image'
 * @param {string} callback - A callback function that'll be executed after each
 *                            element is injected
 */
module.exports = function(list) {
  var self   = this;

  // Test if SVG is supported
  self.isAble = (function() {
    var html = document.querySelectorAll('html')[0];
    var div  = document.createElement('div');
    div.innerHTML = '<svg/>';

    if((typeof SVGRect != 'undefined' && div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg') {
      return true;
    } else {
      return false;
    }
  })();

  // Request the SVG
  var svgLoad = function(target, url) {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url + ".svg", true);
    ajax.send();

    // Append the SVG to the target
    ajax.onload = function(e) {
      target.innerHTML = ajax.responseText;
    };
  };

  // Append the png if SVG is not supported
  var pngLoad = function(target, url) {
    target.innerHTML = "<img src='" + url + ".png' />";
  };

  // Choose which file to append
  var load = function(target, url, callback) {
    if(self.isAble) {
      svgLoad(target, url);
    } else {
      pngLoad(target, url);
    }
    if (typeof callback == "function") callback();
  };

  // Iterate through the objet(s) to append the files
  (function() {
    var current;
    for(var i in list) {
      current = document.querySelectorAll(list[i].target);

      for(var x = 0; x < current.length; x++) {
        load(current[x], list[i].url, list[i].callback);
      }
    }
  })();

};
