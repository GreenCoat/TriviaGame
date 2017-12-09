//Declare needed variables

//Time player has to make a choice
var countdown = 10;

//Question number to keep track of how many have been answered
var question; 

//Number of questions gotten correct
var correct;

//List of questions and answers
var mythTrivia = [
{

},
{

},
{

},
{

},
{

}];

//Display start button, question field and blank answer buttons
createStart();

//Attach on click to start button to begin the game
$(document).on("click", "#start", gameStart);
//Hide start button
//start timer
//display first question

function createStart(){
	var e = $("<button>").attr("id", "start").text("Start");
	$("#main").append(e);
}

function gameStart(){
	
}


