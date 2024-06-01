$(document).ready(function () {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';

  // Update the status based on the API response.
  function updateApiStatus() {
    $.get(apiUrl, function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }).fail(function () {
      $('#api_status').removeClass('available');
    });
  }

  // Update the status initially
  updateApiStatus();

  setInterval(updateApiStatus, 5000);
});
