"use strict";

function closePromo() {

  document.getElementById('promo-card').classList.remove('is-active')

  // These overflows are set by modal-fx.js
  document.getElementsByTagName('html')[0].style.overflow = "";
  document.getElementsByTagName('body')[0].style.overflowY = "";

}

function contactPromo() {

  closePromo()
  focusContactName()

}
