import $ from "jquery";

const loadPhotos = (callback, fotoUrl) => {
  $.ajax({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    context: document.body,
    url: fotoUrl,
    cache: false,
    success: (data) => callback(data),
  });
};

export default loadPhotos;
