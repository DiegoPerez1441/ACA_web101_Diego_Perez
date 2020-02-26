// Wait for the document to load before jQuery starts
$(document).ready(function() {

  setInterval( function() {
    // Create a newDate() object and extract the seconds of the current time on the visitor's
    // var seconds = 40*(new Date().getSeconds());
    var seconds = (new Date().getMilliseconds())/50;
    // $(body).css("background-image", "rgb(" + 255 + "," + 255 + "," + 255 + ")");
    $(".body").css("background-image", "linear-gradient(to bottom right," +"rgb(" + ((33+seconds)%255) + "," + ((60+seconds)%255) + "," + ((100+seconds)%255) + ")"+ "," +"rgb(" + ((20+seconds)%255) + "," + ((22+seconds)%255) + "," + ((24+seconds)%255) + ")");
  }, 10);
  
});

const x = "<h1>X</h1>";
const o = "<h2>O</h2>";

const EMPTY = '';
var matrix = [];
var click = 9;
var boxClass = document.getElementsByClassName('box');

window.onload = boardSetup();


function boardSetup() {
  // Initialize an array of nulls
  for (var i = 0; i < click; i++) {
    matrix.push(Number(0));
    boxClass[i].setAttribute("id", i); 
  }
  console.log('Created array matrix: ' + matrix);

}

function boxClicked(element) {
  if (element.innerHTML != EMPTY) {
    alert("This cell belongs to " + boxClass[click])
  } 
  else if (click % 2 === 1) {
    element.innerHTML = x;
    matrix[element.id] = 1;
    click = click - 1;
    console.log('Added ' + element.id + 'to matrix: ' + matrix);
  }
  else if (click % 2 === 0) {
    element.innerHTML = o;
    matrix[element.id] = 0;
    click = click - 1;
    console.log('Added ' + element.id + 'to matrix: ' + matrix);
  }
  checkBoard();

}

function checkBoard() {

}