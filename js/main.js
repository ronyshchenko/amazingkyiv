$(function(){
  $('.slider').slick({
    arrows: true,
    asNavFor: '.thumbs'
  });
  $('.thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider',
    focusOnSelect: true
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });
});
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});