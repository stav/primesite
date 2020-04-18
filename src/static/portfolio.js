"use strict";

(function () {

  DOMReady(() => { // Document is now loaded

    var i01 = new Image(); i01.src = 'img/project-01_1082x5333.jpg';
    var i02 = new Image(); i02.src = 'img/project-02_1186x4493.jpg';
    var i03 = new Image(); i03.src = 'img/project-03_1216x6740.jpg';
    var i04 = new Image(); i04.src = 'img/project-04_563x2143.jpg';

  });

})();

function setModalImage( url ) {

  document.getElementById("profileImage").src = url;

  document.getElementById("portfolio-content").scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth"
  })

}

function closePortfolio() {

  document.getElementById('portfolio-card').classList.remove('is-active')

  // These overflows are set by modal-fx.js
  document.getElementsByTagName('html')[0].style.overflow = "";
  document.getElementsByTagName('body')[0].style.overflowY = "";

}

function contactPortfolio() {

  closePortfolio()
  focusContactName()

}
