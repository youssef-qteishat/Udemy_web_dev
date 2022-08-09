// apply event listener to one button
//document.querySelector("button").addEventListener("click", function (){alert("I got clicked!");} );

//detecting button press
var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick(){

  var buttonInnerHTML = this.innerHTML;
  //passing in button that was pressed
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
  alert(buttonInnerHTML);
}

// detecting keyboard press

document.addEventListener("keydown", keyDown);

// pass in event type into keyDown() function
function keyDown(event){
  //passes in event's key property to call makeSound() and buttonAnimation() functions
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(key);
    }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");


  setTimeout(function(){ activeButton.classList.remove("pressed");}, 100);
}
