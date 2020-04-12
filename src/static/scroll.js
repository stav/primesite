"use strict";

(function () {

  // When the user scrolls down 20px from the top, show the scroll up button
  window.onscroll = function() {
    function low() {
      return document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    }
    document.getElementById("toTop").style.display = low() ? 'block' : 'none';
  };

})();
