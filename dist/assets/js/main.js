// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  changeColorNavbar();
  changeDesktopNavbar();
  
  tabcontentInitial = document.querySelector(".tabcontent.tab-ppal");
  tabcontentInitial.style.display = "block";
});
$(window).scroll(function () {
  changeColorNavbar();
  changeDesktopNavbar();
});
$(window).resize(function () {
  changeDesktopNavbar();
});
function changeColorNavbar() {
  if ($(window).scrollTop() > 100) {
    $(".navbar").css({
      "background-color": "#90ccc6",
    });
  } else {
    $(".navbar").css({
      "background-color": "#90ccc6aa",
    });
  }
}
function changeDesktopNavbar() {
  if ($(window).width() >= 1200) {
    if ($(window).scrollTop() > 100) {
      $("#pre-nav").css({
        height: "0px",
      });
      $(".navbar").css({
        "height": "65px",
      });
      $(".logo-navbar").css({
        "transform": "translateY(0px)",
      });
    } else {
      $("#pre-nav").css({
        height: "20px",
      });
      $(".navbar").css({
        "height": "45px",
      });
      $(".logo-navbar").css({
        "transform": "translateY(-10px)",
      });
    }
  } else {
    $(".navbar").css({
      "height": "auto",
    });
    $(".logo-navbar").css({
      "transform": "translateY(0px)",
    });
  }
}

$(function () {
  $(".box").click(function () {
    $("html, body").animate(
      { scrollTop: $("section.section2").offset().top },
      "slow"
      );
      return false;
    });
  });
  
function openCity(evt, cardMenus) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cardMenus).style.display = "block";
  evt.currentTarget.className += " active";
}
  