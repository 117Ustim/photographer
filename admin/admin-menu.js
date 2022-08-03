import $ from "jquery";
import loadPhotos from "../js/images";
import deletePhotos from "../js/imagesdel";
import "../scss/admin-foto.scss";

// const imagesChildren = document.querySelector(".childrenphotos");

document.querySelector(".button-exit").onclick = function () {
  window.location.href = "index.html";
};

// выбориз списка
let photosCategory = document.querySelector("select");

$('.add-photo').on('submit', (e) => {
  e.preventDefault();
  const files = $('#photoUpload').prop('files');
  const form = new FormData();
  form.append('new-photo', files[0]);
  $.ajax({
    method: 'POST',
    url: `/save/photoshome`,
    data: form,
    cache: false,
    contentType: false,
    processData: false,
    success: () => {
      document.location.reload();
    }
  })
});

const imagesOut = $(".admin-foto");

function choose(event) {
  document
    .querySelectorAll(".admin-foto img")
    .forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  ondblclick = (event) => {
    document.querySelector(".delete-foto").appendChild(event.target);
  };
}

function photosCallback(data) {
  imagesOut.empty();
  data.photos.forEach((photoUrl) => {
    let img = document.createElement("img");
    img.src = `photos/${photoUrl}`;
    img.onclick = choose;
    imagesOut.append(img);
  });

}

const elem = document.querySelector(".delete-foto");

document.querySelector("#delFotos").onclick = () => {
  let photosToDelete = Array.from(elem.getElementsByTagName("img")).map(el => {
    return el.getAttribute("src").split("/")[1]
  });


  deletePhotos((data) => {
    window.location.reload();
  }, photosToDelete);
};

loadPhotos((data) => photosCallback(data), `/photos?category=${photosCategory.value}`);

photosCategory.addEventListener("change", function () {
  let selectedCategory = this.value;

  loadPhotos((data) => photosCallback(data), `/photos?category=${selectedCategory}`);

  function choose(event) {
    document
      .querySelectorAll(".admin-foto img")
      .forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");

    ondblclick = (event) => {
      document.querySelector(".delete-foto").appendChild(event.target);
    };
  }
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
