console.log("Pavyko!")


// https://codepen.io/malZiiirA/pen/cbfED
// 
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

// PIRMA KARUSELE
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

// ANTRA KARUSELE
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

// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}