window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > 400) {
        let nav = document.querySelector(".navbar");
        nav.classList.add("fixed");
    } else {
        let nav = document.querySelector(".navbar");
        nav.classList.remove("fixed");
    }
});



$(".gototop").on("click", function () {
    scroll({
        top: 0,
    });
});
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 1000) {
        $(".gototop").addClass("back_to_top");
    } else {
        $(".gototop").removeClass("back_to_top");
    }
});

// var a =  document.getElementById('num').innerHTML;
var a =  0;
let scroll = window.scrollY;
if (scroll > 500) {
  $(window).scroll(function () {
    $(".count-val").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  });
}


$(document).ready(function () {
  $(".all1").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 3,
    mousewheel: false,
    dots: true,
    slideBy: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      900: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
});
$(".slider__btnright").click(function () {
  var owl = $(".all1");
  owl.trigger("next.owl.carousel");
});
$(".slider__btnleft").click(function () {
  var owl = $(".all1");
  owl.trigger("prev.owl.carousel");
});


$(document).ready(function () {
  $(".navbar li.forhover:has(ul)").addClass("arrowDown");
});

$(document).ready(function () {
  $(".navbar li.forhover ul li:has(ul)").addClass("arrowRight");
});