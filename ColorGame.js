var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grap color of clicked square
        var clickedColor = this.style.background;

        console.log(clickedColor)
        console.log(pickedColor)
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            messageDisplay.textContent = "CORRECT!"; 
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "TRY AGAIN";
        }
    });
}

function changeColor(color){
    //loop ,through all squares
    for(var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i=0; i<num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}