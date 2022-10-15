import $ from "jquery";

const deletePhotos = (callback, photosToDelete) => {
  console.log(photosToDelete);
  $.ajax({
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    context: document.body,
    url: `/photos/${photosToDelete}`,
    cache: false,
    success: function (data) {
      callback(data);
    },
  });
};

export default deletePhotos;
