"use strict";

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
  focusElement('contact-name')

}
