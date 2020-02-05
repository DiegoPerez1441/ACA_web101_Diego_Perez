$(function(){
  var $el = $('#wrapper3'); 
  // Run when window gets scrolled 
  $(window).scroll(function () {
      parallax($el);
  });
  parallax($el);
});

var speed = 1;
function paralax($el) {
  var diff = $(window).scrollTop() - $el.offset().top;
  var yPos = -(diff * speed);
  var coords = '50% ' + yPos + 'px';
  $el.css({
      backgroundPosition: coords
  });
}