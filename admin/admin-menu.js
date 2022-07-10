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

const images = [
  "../img/foto/08.jpg",
  "../img/foto/357.jpg",
  "../img/foto/603.jpg",
  "../img/foto/f1.jpg",
  "../img/foto/f2.jpg",
  "../img/foto/f3.jpg",
  "../img/foto/f4.jpg",
  "../img/foto/sa.jpg",
  "../img/foto/19.jpg"
];

for (let i = 0; i < images.length; i++) {
  let img = document.createElement("img");
  img.src = images[i];
  imagesOut.append(img);
}


addButton.onclick = function() {
console.log(addFile.value);
images.push(addFile.value);
console.log(images);
}