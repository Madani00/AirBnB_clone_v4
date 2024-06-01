$(document).ready(function () {
  const selectedAmenities = {};

  // changes made on amenity
  $('input[type="checkbox"][data-id]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    // update
    updateAmenitiesList();
  });

  function updateAmenitiesList() {
    const amenitiesArray = Object.values(selectedAmenities);
    let amenitiesList = amenitiesArray.join(', ');

    // Truncate the list
    if (amenitiesList.length > 31) {
      amenitiesList = amenitiesList.slice(0, 31) + '...';
    }

    $('.amenities h4').text(amenitiesList);
  }
});
