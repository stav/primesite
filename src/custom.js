"use strict";

(function () {

  // Get that hamburger menu cookin' //
  document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ( $navbarBurgers.length > 0 ) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function( $el ) {
        $el.addEventListener("click", function() {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });

  // When the user scrolls down 20px from the top, show the scroll up button
  window.onscroll = function() {
    function low() {
      return document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    }
    document.getElementById("toTop").style.display = low() ? 'block' : 'none';
  };

  // Show loading spinner
  document.querySelector("body").classList.add('preloader-site');

  // Setup callback function for when the document is loaded
  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  ready(() => { // Document is now loaded

    // Stop showing the spinner
    document.querySelector(".preloader-wrapper").style.display = 'none';

    // Undo the preloader style
    document.querySelector("body").classList.remove('preloader-site');

    // Navigation
    for (let $nav of document.querySelectorAll("#main-nav ul li")) {
      $nav.addEventListener("click", function() {
        for (let $active of document.querySelectorAll("#main-nav ul li.is-active")) {
          $active.classList.remove("is-active");
        };
        $nav.classList.toggle("is-active");
      });
    };

  });

})();
