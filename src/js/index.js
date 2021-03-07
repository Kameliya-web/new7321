$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: false,
  });
});
