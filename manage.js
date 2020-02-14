/** Changes To-Do 
 * Fix Parallax Bug by setting background relative and fixed to parent element
**/



// Wait for the document to load before jQuery starts
$(document).ready(function() {

  // Call Function on scroll  
  $(window).scroll(function () {
    parallax();
  });
  
  function parallax() {
    var wScroll = $(window).scrollTop();

    $('.parallax').css('background-position', 'center '+(wScroll*0.5)+'px')

  }

});