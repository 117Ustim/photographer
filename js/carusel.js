let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let images = [
  'img/foto/08.jpg',
  'img/foto/357.jpg',
  'img/foto/603.jpg',
  'img/foto/f1.jpg',
  'img/foto/f2.jpg',
  'img/foto/f3.jpg',
  'img/foto/f4.jpg',
  'img/foto/sa.jpg'
];

for (let i = 0; i < images.length; i++) {
  let div = document.createElement("div");
  div.className = 'swiper-slide';
  let img = document.createElement("img");
  img.src = images[i];
  div.appendChild(img);
  swiper.appendSlide(div);
}