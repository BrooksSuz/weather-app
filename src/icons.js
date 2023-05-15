import $ from 'jquery';

function changeIconShown(weatherData) {
  $('.show-icon').addClass('hide-icon').removeClass('show-icon');
  $('.fa-splotch').addClass('show-icon').removeClass('hide-icon');

  switch (weatherData.weather[0].main) {
    case 'Clouds':
      $('.show-icon').addClass('hide-icon').removeClass('show-icon');
      $('.fa-cloud').addClass('show-icon').removeClass('hide-icon');
      break;
    case 'Clear':
      $('.show-icon').addClass('hide-icon').removeClass('show-icon');
      $('.fa-sun').addClass('show-icon').removeClass('hide-icon');
      break;
    case 'Rain':
      $('.show-icon').addClass('hide-icon').removeClass('show-icon');
      $('.fa-cloud-rain').addClass('show-icon').removeClass('hide-icon');
      break;
    case 'Haze':
      $('.show-icon').addClass('hide-icon').removeClass('show-icon');
      $('.fa-smog').addClass('show-icon').removeClass('hide-icon');
      break;
    default:
      console.log('default');
  }
}


export default changeIconShown;
