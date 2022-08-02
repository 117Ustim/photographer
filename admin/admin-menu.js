import $ from "jquery";
import "bootstrap";
import loadPhotos from "../js/images";
import deletePhotos from "../js/imagesdel";
import "../scss/admin-foto.scss";

// const imagesChildren = document.querySelector(".childrenphotos");

document.querySelector(".button-exit").onclick = function () {
  window.location.href = "../index.html";
};

const imagesOut = $(".admin-foto");

// выбориз списка
let photosDir = document.querySelector("select");

function choose(event) {
  document
    .querySelectorAll(".admin-foto img")
    .forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  ondblclick = (event) => {
    document.querySelector(".delete-foto").appendChild(event.target);
  };
}

function photosCallback(data,photoDir){
  imagesOut.empty();
  data.photos.forEach((photoUrl) => {
    let img = document.createElement("img");
    img.src = `photos/${photoDir}/${photoUrl}`;
    img.onclick = choose;
    imagesOut.append(img);
  });

}

  loadPhotos((data )=> photosCallback(data,'photoshome'), `/photoshome`);


photosDir.addEventListener("change", function () {
  let theObject = this.value;

  if (theObject == "home") {
    link2 = "photoshome";
  }

  if (theObject == "children") {
    link2 = "photoschildren";
  }

  if (theObject == "wedding") {
    link2 = "photoswedding";
  }
 

  loadPhotos((data )=> photosCallback(data,`${link2}`), `/${link2}`);


 
  function choose(event) {
    document
      .querySelectorAll(".admin-foto img")
      .forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");

    ondblclick = (event) => {
      document.querySelector(".delete-foto").appendChild(event.target);
    };
  }
  const elem = document.querySelector(".delete-foto");
  document.querySelector("#delFotos").onclick = function () {
    let myimg = elem.getElementsByTagName("img")[0];

    let mysrc = myimg.getAttribute("src").split("/")[2];

    deletePhotos((data) => {
      window.location.reload();
    }, mysrc);
  };
});

// photosDir.addEventListener('change', function() {
//   let sel = this.value;
//   if(sel === 'children'){
//         document.querySelector(".admin-foto").hidden = true;
//         console.log(sel);

// });
//   if(sel === 'children'){
//     document.querySelector(".admin-foto").hidden = true;
//     console.log(sel);

//       loadPhotos((data) => {
//        data.photos.forEach((photoUrl) => {
//          let img = document.createElement("img");
//          img.src = `../photos/photoschildren/${photoUrl}`;
//          imagesChildren.append(img);
//        });
//      }, "/photoschildren");

//  }
// });

//  else if  (this.value === 'wedding') {

//   document.querySelector(".admin-foto").hidden = true;

//   loadPhotos((data) => {
//    data.photos.forEach((photoUrl) => {
//      let img = document.createElement("img");
//      img.src = `../photos/photoswedding/${photoUrl}`;
//      imagesChildren.append(img);
//    });
//  }, "/photoswedding");

//   }

// });

// function choice(event) {

//   document.querySelector(".admin-foto").hidden = true;

//   loadPhotos((data) => {
//       data.photos.forEach((photoUrl) => {
//         let img = document.createElement("img");
//         img.src = `../photos/photoschildren/${photoUrl}`;
//         imagesChildren.append(img);
//       });
//     }, "/photoschildren");

// }

// loadPhotos((data) => {
//   data.photos.forEach((photoUrl) => {
//     let img = document.createElement("img");
//     img.src = `/photos/${photoUrl}`;
//     imagesOut.append(img);
//   });
// },'/photos');// `/${photosDir}`

// imagesOut.addEventListener("click", choose);
// function choose(event) {
//   document
//     .querySelectorAll(".admin-foto img")
//     .forEach((item) => item.classList.remove("active"));
//   event.target.classList.add("active");

//   ondblclick = (event) => {
//     document.querySelector(".delete-foto").appendChild(event.target);
//   };
// }

// const elem = document.querySelector(".delete-foto");
// document.querySelector("#delFotos").onclick = function () {
//   let myimg = elem.getElementsByTagName("img")[0];

//   // arrimg.forEach((myimg) => {
//   let mysrc = myimg.getAttribute("src").split("/")[2];

//   deletePhotos((data) => {
//     window.location.reload();
//     // servicesIco.removeAttribute("src");
//   }, mysrc);
// };

// url: '/photo-delete?' + $.param({'photo': photoToDelete}), путь для удаления фото
