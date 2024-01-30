
$(document).ready(function (){
   $("#toggle_bar").hide();
 $(".btn-toggle").click(function(){
   $("#toggle_bar").slideToggle();
 });
});

$(document).ready(function (){
   $(".li_nav").click(function(){
     $("#toggle_bar").slideToggle();
   });
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
            breakpoint: 1299,
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



$(document).ready(function() {
   // Click event on the button with ID 'changeContentButton'
   $("#yearly_id").click(function() {
     // Change the content of the div with ID 'myDiv'
     $("#business_price").html("$100<span>/ye</span>");
     $("#Agency_price").html("$120<span>/ye</span>");
     
   });
 });

 $(document).ready(function() {
   // Click event on the button with ID 'changeContentButton'
   $("#montly_id").click(function() {
     // Change the content of the div with ID 'myDiv'
     $("#business_price").html("$99 <span>/mo</span>");
     $("#Agency_price").html("$399<span>/mo</span>");
   });
 });


