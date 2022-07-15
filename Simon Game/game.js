
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var  gamePattern = [];
var flag = 0
var level = 0 

$(document).keypress(function(){
    if (flag === 0)
    {
        setTimeout(function()
        {
            nextSequence();
        },500)

        flag = 1; 
        $("h1").html("level " + level);

    }
})


// play sound when user click on button
$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    check_answer(userClickedPattern.length - 1)



});


function check_answer(level)
{


    if(userClickedPattern[level] === gamePattern[level])
    {
        console.log("success");

        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function(){ 
            nextSequence()
        },1000)

        }
    }
    else
    {
        console.log("wrong");
        playSound("wrong")

        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 500)

        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
    }

}


function startOver()
{a
    flag = 0;
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
}

function playSound(name)
{
    var audio = new Audio("sounds/" + name +".mp3");
    audio.play();
}



 function nextSequence()
{
    userClickedPattern = [];


    var random_number = Math.floor(Math.random() * 3) + 1;
    var randomChosenColour = buttonColors[random_number];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    level++;
    $("h1").html("level " + level);
}


function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    },100);
}



