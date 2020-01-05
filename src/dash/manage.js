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

  function openCard(event) {
    // $(".overview_card_projects").click(function(event) {
    // })
    // Projects
    $(".overview_card_projects-inner-1").click(function() {
      window.open("https://diegoperez1441.github.io/ACA_web101_Diego_Perez/");
    })
    $(".overview_card_projects-inner-2").click(function() {
      window.open("https://diegoperez1441.github.io/ACA_web101_Diego_Perez/src/blog/blog.html");
    })
    $(".overview_card_projects-inner-3").click(function() {
      window.open("https://diegoperez1441.github.io/ACA_web101_Diego_Perez/src/NASA-LandingPage/");
    })
    $(".overview_card_projects-inner-4").click(function() {
      window.open("https://diegoperez1441.github.io/ACA_web101_Diego_Perez/src/ResponsiveWebpage/");
    })
    $(".overview_card_projects-inner-5").click(function() {
      window.open("https://diegoperez1441.github.io/ACA_web101_Diego_Perez/src/calculator/");
    })

    // $(".overview_card_misc").click(function(event) {
    // })
    // Misc
    $(".overview_card_misc-inner-1").click(function() {
      window.open("https://github.com/DiegoPerez1441");
    })
    $(".overview_card_misc-inner-1").click(function() {
      window.open("https://www.youtube.com/channel/UC63wmNyIqyJNCPfSmLUUZFg");
    })
    $(".overview_card_misc-inner-1").click(function() {
      window.open("https://www.linkedin.com/in/diegoperez14/");
    })
    $(".overview_card_misc-inner-1").click(function() {
      window.open("https://codepen.io/diegoperez14/");
    })
    $(".overview_card_misc-inner-1").click(function() {
      window.open("https://www.khanacademy.org/profile/diegooperez14/projects");
    })
  }
  openCard(event);

  // Fix sidenav bug where it doesn't reopen after resizing up
  $(window).on('resize', function() {

    // Close sidenav when mobile view is resized
    if($("body").width() < 700) {
      $(".grid-container").css("margin-left", "0");
      $(".sidenav").css("width", "0");
    }

    // Open sidenav when browser is resized to laptop view
    if(($("body").width() > 700)) {
      $(".grid-container").css("margin-left", "250px");
      $(".sidenav").css("width", "250px");

      $(".menu-icon").removeClass("active");
      $(".menu-icon").addClass("not-active");
    }
  })

});