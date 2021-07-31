// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  changeColorNavbar();
});
$(window).scroll(function () {
  changeColorNavbar();
});
$(window).resize(function () {});
function changeColorNavbar() {
  if ($(window).scrollTop() > 100) {
    $("#pre-nav").css({
      height: "0px",
    });
    $(".navbar").css({
      "background-color": "#90ccc6",
    });
  } else {
    $("#pre-nav").css({
      height: "20px",
    });
    $(".navbar").css({
      "background-color": "#90ccc6aa",
    });
  }
}
