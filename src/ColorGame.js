var squareNums = 6 ;
var colors = generateRandonColor(squareNums);
var square = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');


for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    modeButtons[2].classList.remove("selected");
    this.classList.add("selected");
    if (this.textContent === "Easy") {
      squareNums = 3;
    } else if (this.textContent === "Medium"){
      squareNums = 6;
    } else {
      squareNums = 9;
    }
    resett();
  });
}

reset.addEventListener("click", function(){
  resett();
});

function resett(){
  colors = generateRandonColor(squareNums);
  pickedColor = pickColor();
  reset.textContent = "New Colors";
  colorDisplay.textContent = pickedColor ;
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block" ;
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none" ;
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
}

colorDisplay.textContent = pickedColor ;

for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor ;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!" ;
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323" ;
      messageDisplay.textContent = "Try Again" ;
      // messageDisplay.style.backgroundColor = clickedColor;
    }
  });
}

function changeColors(color){
  for (var i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = color ;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random] ;
}

function generateRandonColor(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr ;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + b + ", " + g + ")";
}
