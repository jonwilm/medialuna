// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  changeColorNavbar();
});
$(window).scroll(function () {
  changeColorNavbar();
});
$(window).resize(function () {
  if ($(window).width() < 1200) {
    $(".navbar").css("background-color", "#2d52a5");
  } else {
    if ($(window).scrollTop() < 100) {
      $(".navbar").css("background-color", "transparent");
    }
  }
});
function changeColorNavbar() {
  if ($(window).scrollTop() > 100) {
    $("#pre-nav").css({
      "background-color": "#F7CF55",
      height: "0px",
    });
    if ($(window).width() > 1200) {
      $(".navbar").css("background-color", "#2d52a5");
    }
  } else {
    $("#pre-nav").css({
      "background-color": "#F7CF55",
      height: "35px",
    });
    if ($(window).width() > 1200) {
      $(".navbar").css("background-color", "transparent");
    }
  }
}
