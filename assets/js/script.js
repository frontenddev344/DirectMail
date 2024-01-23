var menuUL = document.getElementsByTagName("ul");
var heightOful = menuUL[0].scrollHeight;
var btnToggle = document.getElementsByClassName("btn-toggle");
btnToggle[0].addEventListener("click", function () {
   if (menuUL[0].style.maxHeight) {
      menuUL[0].style.maxHeight = null;
   } else {
      menuUL[0].style.maxHeight = menuUL[0].scrollHeight + "px";
   }
});

// slick

$(document).ready(function () {
   $('.my-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true,
      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 1,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });
});


//   accordian image

const images = document.querySelectorAll(".img")

function clearActiveImage() {
   images.forEach(function (image) {
      image.classList.remove("active");
   });
}

images.forEach(function (image, index) {
   image.onclick = function () {
      event.stopPropagation() //important to not call the clearActiveImage() on every click
      if (images[index].classList.contains("active")) {
         images[index].classList.remove("active")
      } else {
         clearActiveImage(index)
         images[index].classList.add("active")
      }
   }
})

window.addEventListener("click", () => {
   clearActiveImage()
})

// sticky js

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// var header = document.getElementById("myHeader");

// Get the offset position of the navbar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



// top scroll btn

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

