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
      },
    });
  }

  function main(event) {
    initVueApp();
  };

  document.addEventListener("DOMContentLoaded", main);

})(this);