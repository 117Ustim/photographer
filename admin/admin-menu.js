import $ from "jquery";
import loadPhotos from "../js/images";
import deletePhotos from "../js/imagesdel";
import "../scss/admin-foto.scss";

document.querySelector(".button-exit").onclick = function () {
  window.location.href = "index.html";
};

let photosCategory = document.querySelector("select");

$(".add-photo").on("submit", (e) => {
  e.preventDefault();
  const files = $("#photoUpload").prop("files");
  const form = new FormData();
  form.append("new-photo", files[0]);
  $.ajax({
    method: "POST",
    url: `/save/${photosCategory.value}`,
    data: form,
    cache: false,
    contentType: false,
    processData: false,
    success: () => {
      document.location.reload();
    },
  });
});

const imagesOut = $(".admin-foto");

function choose(event) {
  document
    .querySelectorAll(".admin-foto img")
    .forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  ondblclick = () => {
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
  let photosToDelete = Array.from(elem.getElementsByTagName("img")).map(
    (el) => {
      return el.getAttribute("src").split("/")[1];
    }
  );

  deletePhotos((data) => {
    window.location.reload();
  }, photosToDelete);
};

loadPhotos(
  (data) => photosCallback(data),
  `/photos?category=${photosCategory.value}`
);

photosCategory.addEventListener("change", function () {
  let selectedCategory = this.value;

  loadPhotos(
    (data) => photosCallback(data),
    `/photos?category=${selectedCategory}`
  );
});
