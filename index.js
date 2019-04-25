;(function(exports) {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateTiles() {
    var result = [];
    for(var i = 0; i < 1500; i++) {
      result.push({
        hex: getRandomColor()
      });
    }
    return result;
  }

  function initVueApp() {
    console.log("initVueApp")
    app = new Vue({
      el: '#app',
      data: {
        tiles: generateTiles(),
      },
      methods: {
        randomizeTiles: function() {
          this.tiles = generateTiles();
        },
        sortTiles: function() {
          // Note, sorting colors seems to be something I know nothing about.
          // I wonder what the correct function here is. Probably some sort of
          // distance preserving curve like Hilbert.
          this.tiles.sort((a, b) => {
            a = a.hex;
            b = b.hex;
            var ai = a[1] + a[3] + a[5] + a[2] + a[4] + a[6];
            var bi = b[1] + b[3] + b[5] + b[2] + b[4] + b[6];
            return (ai).localeCompare(bi);
            //return a.hex.localeCompare(b.hex);
          });
        }
      },
    });
  }

  function main(event) {
    initVueApp();
  };

  document.addEventListener("DOMContentLoaded", main);

})(this);