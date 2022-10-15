import $ from "jquery";
import loadPhotos from "../js/images";
import "./index.js";
import "../scss/portfoliophoto.scss";

const imagesChildren = $(".portfoliophoto");

const onclickMenu = (url) => {
  imagesChildren.empty();
  loadPhotos((data) => {
    data.photos.forEach((photoUrl) => {
      let img = document.createElement("img");
      img.src = `/photos/${photoUrl}`;
      imagesChildren.append(img);
    });
  }, url);
};

function portfolio() {
  home.onclick = () => {
    document.querySelector(".swiper").hidden = false;
    document.querySelector(".portfoliophoto").hidden = true;
  };

  children.onclick = () => {
    document.querySelector(".swiper").hidden = true;
    document.querySelector(".portfoliophoto").hidden = false;
    onclickMenu("/photos?category=children");
  };

  wedding.onclick = () => {
    document.querySelector(".swiper").hidden = true;
    document.querySelector(".portfoliophoto").hidden = false;
    onclickMenu("/photos?category=wedding");
  };

  reportage.onclick = () => {
    document.querySelector(".swiper").hidden = true;
    document.querySelector(".portfoliophoto").hidden = false;
    onclickMenu("/photos?category=reportage");
  };

  portfolio.onclick = () => {
    console.log("jhd");
    document.querySelector(".swiper").hidden = true;
    document.querySelector(".portfoliophoto").hidden = false;
    onclickMenu("/photos?category=portfolio");
  };

  imagesChildren.on("click", enlargePhoto);
  function enlargePhoto(event) {
    document
      .querySelectorAll(".portfoliophoto img")
      .forEach((item) => item.classList.remove("img"));

    event.target.classList.toggle("ac");
  }
}

export default portfolio;
