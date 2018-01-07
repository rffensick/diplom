$(function () {

  $("button.hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass('is-active')) {

      $(".header-menu__main ul").animate({
        height: "400px"
      }, 500)
    } else {
      $(".header-menu__main ul").animate({
        height: '0px'
      }, 500)
    }
  });

});