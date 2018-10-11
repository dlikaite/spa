console.log("Pavyko!")

// Animated Navigation Bar
$(function(){
 var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
           $('.float-navigation').addClass('shrink');
        }
        else {
            $('.float-navigation').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

// FIRST CAROUSEL
$('.kar').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false, 
    responsive:{
        0:{
            items:1
        }
    },
    autoplay:true,
    autoplayTimeout:4000, // kaip padaryti letesni transition?
    autoplayHoverPause:false
});

// SECOND CAROUSEL IN THE NEWS SECTION
$('.kar2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true, 
    responsive:{
        0:{
            items:3
        }
    }
});


// FIXED Scroll Back To Top Button
// When the user scrolls down 100px from the top of the document, fade in the button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100){
        $('.myBtn').fadeIn(150);
    } else {
        $('.myBtn').fadeOut(150);
    }
});

// When the user clicks on the button, scroll to the top of the document
$('.myBtn').click(function(){
    $('body, html').animate({
        scrollTop: 0
    }, 500);
});