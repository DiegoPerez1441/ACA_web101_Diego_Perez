// Wait for the document to load before jQuery starts
$(document).ready(function() {

  var answer = "0";
  var currentValue = "0";
  var opperationString = "";
  var symbols = ["*", "/", "+", "-"];

  function removeLeadingZero(string) {
    var tmpString = string;
    if (tmpString[0] === '0') {
      tmpString = tmpString.slice(1);
    }
    return tmpString;
  }

  function removeLeadingSymbol(string) {
    var tmpString = string;
    if (symbols.includes(tmpString[0])) {
      tmpString = tmpString.slice(1);
    }
    return tmpString;
  }

  function replaceTimesAndDivide(string) {
    var tmpString = string;
    tmpString = tmpString.replace("x", "*");
    tmpString = tmpString.replace("÷", "/");
    return tmpString;
  }

  function buttonClicked(event) {
    // Event Handler for when user presses a button
    $(".button").click(function(event) {
      var button_pressed = this.innerHTML;
      console.log("you clicked: ", button_pressed);

      // Manage type of button pressed
      if ($(this).hasClass("dark")) {
        // console.log("dark class pressed: " + button_pressed);
        newNumber(button_pressed);
      }
      if ($(this).hasClass("orange")) {
        // console.log("orange class pressed: " + button_pressed);
        opperation(button_pressed);
      }
      if ($(this).hasClass("light")) {
        // console.log("light class pressed: " + button_pressed);
        modify(button_pressed);
      }

     })
  }
  buttonClicked(event);


  function newNumber(string) {
    $(".button_ac").html("C");
    var button_pressed = string;
    var newValue = currentValue + button_pressed;
    var l_opperationString = opperationString + button_pressed;
    
    if (string !== ".") {
      newValue = removeLeadingZero(newValue);
    }
    newValue = removeLeadingSymbol(newValue);
    // console.log(newValue);
    
    currentValue = newValue;
    opperationString = l_opperationString;

    $(".display").html(currentValue);
    
    // Debug info
    $("#debug").html(opperationString);
    // console.log(opperationString);
  }

  function opperation(string) {
    if (string !== "=") {
      currentValue = "";
      // $(".display").html(currentValue);

      var button_pressed = string;
      button_pressed = replaceTimesAndDivide(button_pressed);
      var l_opperationString = opperationString + button_pressed;
      console.log(l_opperationString);

      if (symbols.includes()) {

      }

      opperationString = l_opperationString;
      // Debug info
      $("#debug").html(opperationString);
      // console.log(opperationString);
    }
    else if (string === "=") {
      answer = eval(opperationString);
      $(".display").html(answer);
      currentValue = answer;
      opperationString = answer;
      console.log("Calculated: " + answer);
    }
    
  }

  function modify(string) {
    if (string === "C") {
      $(".button_ac").html("AC");
      console.log("Cleared");
      currentValue = "0";
      answer = "0";
      opperationString = "";
      $("#debug").html("");
      $(".display").html(currentValue);
    }
    
  }

});