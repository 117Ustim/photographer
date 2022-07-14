import loadPhotos from '../js/images';

let addFile = document.querySelector('.form-control');
let addButton = document.querySelector('.b-2');

document.querySelector(".b-1").onclick = function () {
  window.location.href = "../index.html";
};

document.querySelector(".f-1").onclick = function () {
  window.location.href = "admin-foto.html";
};

document.querySelector(".tel-1").onclick = function () {
  window.location.href = "admin-tel.html";
};

const imagesOut = document.querySelector(".admin-foto");

const images = loadPhotos((data) => {
  data.photos.forEach(photoUrl => {
    let img = document.createElement("img");
    img.src = `/photos/${photoUrl}`;
    imagesOut.append(img);
  })
});
