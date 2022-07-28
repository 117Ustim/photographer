import $ from "jquery";
import loadPhotos from "../js/images";
import deletePhotos from "../js/imagesdel";
import "../scss/admin-foto.scss";

document.querySelector(".button-exit").onclick = function () {
  window.location.href = "../index.html";
};

const imagesOut = document.querySelector(".admin-foto");

// выбориз списка
// let photosDir = document.querySelector('#ttt').value; 
loadPhotos((data) => {
  data.photos.forEach((photoUrl) => {
    let img = document.createElement("img");
    img.src = `/photos/${photoUrl}`;
    imagesOut.append(img);
  });
},'/photos');// `/${photosDir}`

imagesOut.addEventListener("click", choose);
function choose(event) {
  document
    .querySelectorAll(".admin-foto img")
    .forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  // console.log(event.target);

  ondblclick = (event) => {
    document.querySelector(".delete-foto").appendChild(event.target);
  };
}

const elem = document.querySelector(".delete-foto");
document.querySelector("#delFotos").onclick = function () {
  let myimg = elem.getElementsByTagName("img")[0];
  
  

  // arrimg.forEach((myimg) => {
    let mysrc = myimg.getAttribute("src").split("/")[2];

    deletePhotos((data) => {
      window.location.reload();
      servicesIco.removeAttribute("src");
    }, mysrc);
 
    
 
 
};



// url: '/photo-delete?' + $.param({'photo': photoToDelete}), путь для удаления фото
