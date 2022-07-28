import $ from 'jquery';

const deletePhotos = (callback,photoToDelete) => {
    $.ajax({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      context: document.body,
      url:'/photo-delete?' + $.param({'photo': photoToDelete}),
      cache: false,
      success: function (data) {
        
        callback(data);
      }
    });
  };

  export default deletePhotos;