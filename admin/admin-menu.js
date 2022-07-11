import getImages from '../js/images';

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

const images = getImages();

for (let i = 0; i < images.length; i++) {
  let img = document.createElement("img");
  img.src = images[i];
  imagesOut.append(img);
}


addButton.onclick = function () {
  console.log(addFile.value);
  images.push(addFile.value);
  console.log(images);
}
