import $ from 'jquery';

function changeIconShown(weatherData) {
  $('.show-icon').addClass('hide-icon').removeClass('show-icon');
  $('.fa-house').addClass('show-icon').removeClass('hide-icon');

  if (weatherData.weather[0].main === 'Clouds') {
    $('.show-icon').addClass('hide-icon').removeClass('show-icon');
    $('.fa-cloud').addClass('show-icon').removeClass('hide-icon');
  }

  if (weatherData.weather[0].main === 'Clear') {
    $('.show-icon').addClass('hide-icon').removeClass('show-icon');
    $('.fa-sun').addClass('show-icon').removeClass('hide-icon');
  }

  if (weatherData.weather[0].main === 'Rain') {
    $('.show-icon').addClass('hide-icon').removeClass('show-icon');
    $('.fa-cloud-rain').addClass('show-icon').removeClass('hide-icon');
  }
}

export default changeIconShown;