import $ from 'jquery';

const loadPhotos = async (callback) => {
  $.ajax({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    context: document.body,
    url: '/photos',
    cache: false,
    success: function (data) {
      callback(data);
    }
  });
}

export default loadPhotos;
