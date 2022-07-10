import '../scss/index.scss';
import Swiper from 'swiper';
const images = require("./images.js");
const adminPanelPopup = require("./admin.js");

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

for (let i = 0; i < images.length; i++) {
  let div = document.createElement("div");
  div.className = "swiper-slide";
  let img = document.createElement("img");
  img.src = images[i];
  div.appendChild(img);
//   swiper.appendSlide(div);
}

adminPanelPopup();
