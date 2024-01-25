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

// const images = document.querySelectorAll(".img")

// function clearActiveImage() {
//    images.forEach(function (image) {
//       image.classList.remove("active");
//    });
// }

// images.forEach(function (image, index) {
//    image.onclick = function () {
//       event.stopPropagation() //important to not call the clearActiveImage() on every click
//       if (images[index].classList.contains("active")) {
//          images[index].classList.remove("active")
//       } else {
//          clearActiveImage(index)
//          images[index].classList.add("active")
//       }
//    }
// })

// window.addEventListener("click", () => {
//    clearActiveImage()
// })
const images = document.querySelectorAll(".img");

function clearActiveImage() {
   images.forEach(function (image) {
      image.classList.remove("active");
   });
}

images.forEach(function (image, index) {
   image.onclick = function (event) {
      event.stopPropagation(); // Important to not call the clearActiveImage() on every click
      if (!images[index].classList.contains("active")) {
         clearActiveImage();
         images[index].classList.add("active");
      }
   };
});

document.body.addEventListener("click", () => {
   clearActiveImage();
   // Initialize the first image as active after clicking on the body
   if (images.length > 0) {
      images[0].classList.add("active");
   }
});


// Initialize the first image as active
if (images.length > 0) {
   images[0].classList.add("active");
}




// sticky js
window.onscroll = function () {
   var header = document.querySelector("header");
   if (window.pageYOffset > 0) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 };
 



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


//pop up form






const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}



const items = document.querySelectorAll(".slide_inner");

const expand = (item, i) => {
  //remove active from all the other items
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
    it.classList.remove("active");
  });
  //toggle the item clicked
  item.clicked = !item.clicked;
  //add the active class to the element clicked
  if(item.clicked) {
    item.classList.add("active");
  }
};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener("click", () => expand(item, i));
});








// $(document).ready(function() {
//    $('.li_nav').click(function() {
//        $('.nav_ul')
//        .css('max-height','0px')
//       //  .siblings()
//       //  .css('backgroundColor','#ffffff');

//       //  $('#submit_button').removeAttr('disabled');
//       //  $('#number').removeAttr('disabled');
//    });
// });