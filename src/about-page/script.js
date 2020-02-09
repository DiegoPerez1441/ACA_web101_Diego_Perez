// Wait for the document to load before jQuery starts
$(document).ready(function() {

  var $element = $('.parallax');
    // Call Function on scroll  
    $(window).scroll(function () {
        parallax($element);
    });
    parallax($element);

    var speed = 0.2;
    function parallax($element) {
      // Difference
      var diff = $(window).scrollTop() - $element.offset().top;

      // New y position
      var yPos = -(diff * speed);
      // Calculate new y coordinates
      var coords = '50% ' + yPos + 'px';
      // Update coordinates in the CSS
      $element.css({
        backgroundPosition: coords
      });
    }

});