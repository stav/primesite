"use strict";

function focusElement ( name ) {

  // For some reason Firefox need the timeout
  setTimeout('document.getElementById("contact-name").focus()', 500)

}
