/** Info
====================
*Based the Parralax Scrolling Effect on https://www.codementor.io/@lautiamkok/js-tips-creating-a-simple-parallax-scrolling-with-css3-and-jquery-efp9b2spn

====================
**/


// Wait for the document to load before jQuery starts
$(document).ready(function() {

  // Check if element is in the viewport
  function isInViewport(node) {
    var rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Call Function on scroll  
  $(window).scroll(function () {

    var scrolled = $(window).scrollTop();
    // Loop through every element that contains the class 'parallax'
    // so that every element has its own info/properties
    $('.parallax').each(function(index, element) {
      // offset from top of the page
      var initY = $(this).offset().top;
      var height = $(this).height();
      var endY  = initY + $(this).height();

      // Check if the element is in the viewport, then proceed
      var visible = isInViewport(this);
      if(visible) {
        var diff = scrolled - initY;
        // ratio of where the element is from its total height
        var ratio = Math.round((diff / height) * 100);
        // Update CSS by changing the elements' coordinates to the ratio of the elements' scroll value times the speed
        $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px');
      }
    })
  });
  
});