import $ from 'jquery';

function fadeInAnimation() {
  $('.main-container').addClass('fade-in-weather').on('animationend',
    function() {
      $(this).removeClass('fade-in-weather');
    }
  );
}

export default fadeInAnimation;
