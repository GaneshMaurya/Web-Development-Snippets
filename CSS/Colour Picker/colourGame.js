var numSquares = 6;
var colours = generateRandomColours(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyBtn = document.getElementById("easybtn");
var hardBtn = document.getElementById("hardbtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i=0; i<squares.length; i++)
    {
        if (colours[i])
        {
            squares[i].style.backgroundColor = colours[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    this.textContent = "New Colours";
    for (var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

for (var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor = colours[i];
    squares[i].addEventListener("click", function(){
        var clickedColour = this.style.backgroundColor;
        if (clickedColour === pickedColour)
        {
            messageDisplay.textContent = "Correct";
            changeColour(clickedColour);
            h1.style.background = clickedColour;
            resetButton.textContent = "Play Again?";
        } 
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

var colourDisplay = document.getElementById("colourDisplay");
colourDisplay.textContent = pickedColour;

function changeColour(colour)
{
    for (var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour()
{
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num)
{
    var arr = []

    for (var i=0; i<num; i++)
    {
        arr.push(randomColour())
    }

    return arr;
}

function randomColour()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}