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
