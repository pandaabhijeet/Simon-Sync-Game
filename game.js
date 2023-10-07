var buttonColors = ["green","red","yellow","blue"];

var gamePattern = [];



$('.btn').on("click", function(){

var randomNum = nextSequence();
console.log(randomNum);
var randomChosenColour = buttonColors[randomNum];

console.log(randomChosenColour);

gamePattern.push(randomChosenColour);
console.log(gamePattern);

console.log($("#"+randomChosenColour));
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var clickSound = new Audio('sounds/'+randomChosenColour+'.mp3');
console.log('sounds/'+randomChosenColour+'.mp3');
clickSound.play();

})

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);

    return randomNumber;
}