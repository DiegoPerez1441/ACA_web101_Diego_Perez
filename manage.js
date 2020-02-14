/** Changes To-Do 
 * Fix Parallax Bug by making sure element is in viewport and dont activate it until it is to prevent unessesary translating of background
**/



// Wait for the document to load before jQuery starts
$(document).ready(function() {

  // function isInViewport(node) {
  //   var rect = node.getBoundingClientRect()
  //   return (
  //     (rect.height > 0 || rect.width > 0) &&
  //     rect.bottom >= 0 &&
  //     rect.right >= 0 &&
  //     rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  //   )
  // }

  // $(window).scroll(function() {
  //   var scrolled = $(window).scrollTop()
  //   $('.parallax').each(function(index, element) {
  //     var initY = $(this).offset().top
  //     var height = $(this).height()
  //     var endY  = initY + $(this).height()
  
  //     // Check if the element is in the viewport.
  //     var visible = isInViewport(this)
  //     if(visible) {
  //       var diff = scrolled - initY
  //       var ratio = Math.round((diff / height) * 100)
  //       $(this).css('background-position','center ' + parseInt(-(ratio * 0.5)) + 'px')
  //     }
  //   })
  // })

  // Call Function on scroll  
  $(window).scroll(function () {
    parallax();
  });
  
  function parallax() {
    var wScroll = $(window).scrollTop();

    $('.parallax').css('background-position', 'center '+(wScroll*0.5)+'px')

  }

});