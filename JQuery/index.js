
// adding event listen for mouse Click
$("h1").click(function(){
  $("h1").css("color", "purple");
});

$("h1").addClass("big");

$("button").click(function(){
  $("h1").css("color", "green");
});

$("button").html("<em>Click Me </em>")
$("a").attr("href", "https://yahoo.com");

// //detecting keystrokes in entire page

// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });
//
// // applying event listners using on() method in JQuery

// $("h1").on("mouseover", function(){
//   $("h1").css("color", "pink");
// });

//collapsing element with event

// // there is also .slideUp, .slideDown

// $("button").on("click", function(){
//   $("h1").slideToggle();
// });

$("button").on("click", function(){
  $("h1").fadeOut(100).fadeIn(100);
});
