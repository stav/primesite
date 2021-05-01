"use strict";

function setAppModalImage( url, figure ) {

  console.log(figure.dataset.desc)

  document.getElementById("appDescription").innerText = figure.dataset.desc;

  document.getElementById("appImage").src = url;

  document.getElementById("app-content").scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth"
  })

}
