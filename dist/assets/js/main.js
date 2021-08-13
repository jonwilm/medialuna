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
      "background-color": "rgba(144, 204, 198, .85)",
    });
  } else {
    $(".navbar").css({
      "background-color": "rgba(144, 204, 198, .85)",
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
        "height": "55px",
      });
      $(".logo-navbar").css({
        "transform": "translateY(0px)",
      });
    } else {
      $("#pre-nav").css({
        height: "20px",
      });
      $(".navbar").css({
        "height": "35px",
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

$(".box").click(function() {
  $("html, body").animate({ scrollTop: $("section.section2").offset().top }, "slow");
  return false;
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

let cantidad = $('#cantidad');
let min = parseInt(cantidad.attr('min'));
let max = parseInt(cantidad.attr('max'));
$('#mas, #menos').click("on", function(e) {
  e.preventDefault();
  let current_value = parseInt(cantidad.val());
  let classname = $(this).attr("id");
  if (classname === "menos") {
    if (current_value == min) {
      return;
    } else {
      cantidad.val(current_value - 1);
    }
  } else {
    if (current_value == max) {
      return;
    } else {
      cantidad.val(current_value + 1);
    }
  }
})
cantidad.change(function() {
  if (parseInt(cantidad.val()) < min) {
    cantidad.val(min)
  } else if (parseInt(cantidad.val()) > max) {
    cantidad.val(max)
  }
})

let shoppingCart = 'close'
$('#btn-shopping-cart').click(function() {
  if (shoppingCart == 'close') {
    $('#shopping-cart').css('right', '0%')
    shoppingCart = 'open'
  } else {
    $('#shopping-cart').css('right', '-100%')
    shoppingCart = 'close'
  }
})
$('#close-shopping-cart').click(function() {
  $('#shopping-cart').css('right', '-100%')
  shoppingCart = 'close'
})