import 'swiper/css';
const Swiper = require('swiper').default;

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


module.exoprts = swiper;


