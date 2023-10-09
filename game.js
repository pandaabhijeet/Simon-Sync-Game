var buttonColors = ["green","red","yellow","blue"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;


$(document).keypress(function(){

    if(!started){
       // $("#level-start").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$('.btn').on("click", function(){

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length-1)

});


function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-start").text("Haha! You Failed. Dare to start over?");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },300);

        startOver();
    }


}

function nextSequence(){
    
    userClickedPattern = [];
    level++;
    $("#level-start").text("You are on level: "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}


function playSound(sound){
    var clickSound = new Audio('sounds/'+sound+'.mp3');
    clickSound.play();
}

function animatePress(button){
    $("#"+button).addClass("pressed");

    setTimeout(function(){
        $("#"+button).removeClass("pressed");
    }, 100)
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}