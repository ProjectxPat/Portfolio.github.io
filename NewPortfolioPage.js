// Navbar fade
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
// End Navbar fade

// Navbar scroll
$(function () {
    $('body').on('input propertychange', '.form-item', function (e) {
        $(this).toggleClass('form-item-filled', !!$(e.target).val());
    }).on('focus', '.form-item', function () {
        $(this).addClass('form-item-focused');
    }).on('blur', '.form-item', function () {
        $(this).removeClass('form-item-focused');
    });
});


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$('.navbar-collapse ul li a').click(function () {
    $('.navbar-collapse').collapse('hide');
});


// Parallex scroll
(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.08;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (-(windowYOffset * speed)) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();
