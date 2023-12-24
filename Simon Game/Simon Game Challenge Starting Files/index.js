
var gamePattern=[];
var userClickedpattern=[];
var level=0;
var head="Level"
$("body").on("keypress",function(){
    if(level===0){
        nextSequence();
    }
    
})


// Creating random pattern 
var buttonColours=["red","blue","green","yellow"];
$(".btn").click(function() {
    // console.log($(this).attr("id"));
    var userChosenColour = $(this).attr("id");
    userClickedpattern.push(userChosenColour);
    console.log(userClickedpattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedpattern.length-1);
});
function nextSequence(){
    userClickedpattern=[]
    var randomNumber=Math.floor(Math.random()*4);
    var randomChooseColour=buttonColours[randomNumber];
    gamePattern.push(randomChooseColour);
    console.log(gamePattern);
    $("#" + randomChooseColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChooseColour);
    level++;
    $("h1").text("Level "+level);
    
   
}


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $('#'+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}

function checkAnswer(lev){
    if(level-1===lev && userClickedpattern[lev]===gamePattern[lev]){
        console.log("correct");
        setTimeout(function () {
            nextSequence();
          }, 1000)
    }
    if(userClickedpattern[lev]===gamePattern[lev]){
        console.log("correct");
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over , Press Any Key to Restart");
      level=0;
      gamePattern=[];
    }
}