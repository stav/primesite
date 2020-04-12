"use strict";

function setModalImage(small_url, big_url) {

  // In order to remove the image's event listeners, we (hackishly) clone it
  var old_element = document.getElementById("profileImage");
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);

  // The first thing is to drop in the small image
  new_element.src = small_url;
  new_element.classList.remove('big1')
  new_element.addEventListener("click", toggle)

  // If we are currently showing the small, then show the big and vise versa
  function toggle() {
    console.log('toggle', this)

    if ( this.classList.contains('big1') )
    {
      this.src = small_url;
      this.classList.remove('big1')
    }
    else
    {
      this.src = big_url;
      this.classList.add('big1')
    }
  }
}
