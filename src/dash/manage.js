// Wait for the document to load before jQuery starts
$(document).ready(function() {

  // Active Class Handler
  function handleActiveClass(event) {
    $(".misc").click(function(event) {

      if ($(this).hasClass("not-active")) {
        $(this).removeClass("not-active");
        $(this).addClass("active");

        $(".projects").removeClass("active");
        $(".projects").addClass("not-active");
        console.log("Misc Toggled");

        $(".overview_card_projects").css("display", "none");
        $(".overview_card_misc").css("display", "flex");
      }
    })
    $(".projects").click(function(event) {

      if ($(this).hasClass("not-active")) {
        $(this).removeClass("not-active");
        $(this).addClass("active");

        $(".misc").removeClass("active");
        $(".misc").addClass("not-active");
        console.log("Projects Toggled");

        $(".overview_card_misc").css("display", "none");
        $(".overview_card_projects").css("display", "flex");
      }
    })

    // Handle Mobile Menu Bar
    $(".menu-icon").click(function(event) {

      if ($(this).hasClass("not-active")) {
        $(this).removeClass("not-active");
        $(this).addClass("active");

        $(".grid-container").css("margin-left", "250px");
        $(".sidenav").css("width", "250px");
      } else if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).addClass("not-active");

        $(".grid-container").css("margin-left", "0");
        $(".sidenav").css("width", "0px");
      }
    })

  }
  handleActiveClass(event);


  // Fix sidenav bug where it doesn't reopen after resizing up
  $(window).on('resize', function() {

    if($("body").width() < 700) {
      $(".grid-container").css("margin-left", "0");
      $(".sidenav").css("width", "0");
    }

    if(($("body").width() > 700)) {
      $(".grid-container").css("margin-left", "250px");
      $(".sidenav").css("width", "250px");

      $(".menu-icon").removeClass("active");
      $(".menu-icon").addClass("not-active");
    }
  })

});