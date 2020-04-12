"use strict";

(function () {

  // Setup callback function for when the document is loaded
  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  ready(() => { // Document is now loaded

    // Whenever you click on a burger, toggle the "is-active" class of the menu
    // as well as of the burger itself
    for (let $el of document.querySelectorAll(".navbar-burger")) {
      $el.addEventListener("click", function() {
        $el.classList.toggle("is-active");
        var $target = document.getElementById($el.dataset.target);
        $target.classList.toggle("is-active");
      });
    };

    // Whenever you click on a menu item then make the burger and the menu non-active
    for (let $nav of document.querySelectorAll("#mobile-nav .navbar-item")) {
      $nav.addEventListener("click", function() {
          document.getElementById('mobile-nav').classList.remove('is-active')
          document.getElementById('mobile-burger').classList.remove('is-active')
      });
    };

  });

})();
