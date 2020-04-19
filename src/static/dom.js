"use strict";

// Setup callback function for when the document is loaded
var DOMReady = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

function focusContactName () {
  // For some reason Firefox need the timeout
  setTimeout('document.getElementById("contact-name").focus()', 500)
}

function closeModal( id ) {

  document.getElementById( id ).classList.remove('is-active')

  // These overflows are set by modal-fx.js
  document.getElementsByTagName('html')[0].style.overflow = "";
  document.getElementsByTagName('body')[0].style.overflowY = "";

}

function closeAllModals() {

  var modals = document.getElementsByClassName('modal');

  for (let $modal of modals) {
    closeModal( $modal.id )
  }

}
