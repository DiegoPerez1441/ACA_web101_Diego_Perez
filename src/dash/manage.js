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

        // $(".overview_card-projects").css("display", "none");
      }
    })
    $(".projects").click(function(event) {

      if ($(this).hasClass("not-active")) {
        $(this).removeClass("not-active");
        $(this).addClass("active");

        $(".misc").removeClass("active");
        $(".misc").addClass("not-active");
        console.log("Projects Toggled");

        // $(".overview_card-projects").css("display", "flex");
      }
    })

  }
  handleActiveClass(event);

});