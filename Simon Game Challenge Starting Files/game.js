
buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function(){
  if(!started){
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//stores id of color clicked
//then pushes id into userClickedPattern array
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.indexOf(userChosenColor));


    playSound(userChosenColor);
});

// function to play sound of colored tile.
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// adds shadow effect class (.pressed class) using jquery
// removes effect after 100 miliseconds
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){$("#" + currentColor).removeClass("pressed");}, 100);
}

// compares userClickedPattern to gamePattern to check answer
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
    if (gamePattern.length === userClickedPattern.length){
      setTimeout(function(){nextSequence();}, 1000);
      console.log("end of pattern");

    }
  }
  else if (gamePattern[currentLevel] !== userClickedPattern[currentLevel]){
    console.log("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function(){$("body").removeClass("game-over");}, 200);
    startOver();
  }
}

//generates random number from 0 to 3
// uses it to pick color from buttonColors array
// pushes randomChosenColor into gamePattern array
function nextSequence(){

  userClickedPattern = []; // when nextSequence() is called. the user pattern resets

  level++;
  $("h1").text("level " + level);

  var n = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[n];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); // fadeout effect
  playSound(randomChosenColor);
}

// resets level, gamePattern, and started variables
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
