"use strict";

function closePromo() {

  document.getElementById('promo-card').classList.remove('is-active')

  // These overflows are set by modal-fx.js
  document.getElementsByTagName('html')[0].style.overflow = "";
  document.getElementsByTagName('body')[0].style.overflowY = "";

}

function contactPromo() {

	closePromo()
	focusElement('contact-name')

}

function focusElement ( name ) {

  // For some reason Firefox need the timeout
  setTimeout('document.getElementById("contact-name").focus()', 500)

}
