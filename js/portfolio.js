import loadPhotos from "../js/images";
import "./index.js";
import "../scss/portfoliophoto.scss";

let home = document.getElementById("home");
let children = document.getElementById("children");

const imagesChildren = document.querySelector(".portfoliophoto");

function portfolio() {
  home.onclick = function () {
    document.querySelector(".swiper").hidden = false;
    document.querySelector(".portfoliophoto").hidden = true;
  };

  children.onclick = function () {
    document.querySelector(".swiper").hidden = true;
    document.querySelector(".portfoliophoto").hidden = false;
  };

  loadPhotos((data) => {
    data.photos.forEach((photoUrl) => {
      let img = document.createElement("img");
      img.src = `photos/photoschildren/${photoUrl}`;
      imagesChildren.append(img);
    });
  }, "/photoschildren");

  imagesChildren.addEventListener("click", choose);
  function choose(event) {
    document
      .querySelectorAll(".portfoliophoto img")
      .forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
  }
}

export default portfolio;
