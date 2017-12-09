//Declare needed variables

//Time player has to make a choice
var countdown = 10;

//Question number to keep track of how many have been answered
var question = 0; 

//Number of questions gotten correct
var correct = 0;

//Variable to hold the timer
var timer;

//Freezes ability to click when unable to guess
var canGuess = false;

//List of questions and answers
var mythTrivia = [
{
	q: "some question",
	a1: "wrong",
	a2: "wrong",
	a3: "wrong",
	a4: "right",
	ans: "right"
},
{
	q: "some question",
	a1: "right",
	a2: "wrong",
	a3: "wrong",
	a4: "wrong",
	ans: "right"
},
{
	q: "some question",
	a1: "wrong",
	a2: "wrong",
	a3: "right",
	a4: "wrong",
	ans: "right"
},
{
	q: "some question",
	a1: "wrong",
	a2: "right",
	a3: "wrong",
	a4: "wrong",
	ans: "right"
},
{
	q: "some question",
	a1: "right",
	a2: "wrong",
	a3: "wrong",
	a4: "wrong",
	ans: "right"
},
{
	q: "some question",
	a1: "wrong",
	a2: "wrong",
	a3: "wrong",
	a4: "right",
	ans: "right"
},
{
	q: "some question",
	a1: "wrong",
	a2: "wrong",
	a3: "wrong",
	a4: "right",
	ans: "right"
},
{
	q: "some question",
	a1: "wrong",
	a2: "wrong",
	a3: "wrong",
	a4: "right",
	ans: "right"
},
{
	q: "some question",
	a1: "wrong",
	a2: "wrong",
	a3: "wrong",
	a4: "right",
	ans: "right"
},
{
	q: "some question",
	a1: "wrong",
	a2: "wrong",
	a3: "wrong",
	a4: "right",
	ans: "right"
}];

var questionList = mythTrivia;

//Display start button, question field and blank answer buttons
createButtons();

//Attach on click to start button to begin the game
$(document).on("click", "#start", gameStart);

//Attach on click to answer buttons
$(document).on("click", ".answerBtn", checkAnswer);


function createButtons(){
	var e = $("<button>").attr("id", "start").text("Start");
	$("#main").append(e);

	var b1 = $("<button>").attr("id", "a1").attr("class", "answerBtn");
	var b2 = $("<button>").attr("id", "a2").attr("class", "answerBtn");
	var b3 = $("<button>").attr("id", "a3").attr("class", "answerBtn");
	var b4 = $("<button>").attr("id", "a4").attr("class", "answerBtn");
	$("#answers").append(b1);
	$("#answers").append(b2);
	$("#answers").append(b3);
	$("#answers").append(b4);
}

function gameStart(){
	$("#start").remove();
	nextQuestion();
}

function renderTimer(counter){
	$("#timer").text(countdown);
	timer = setInterval(updateTimer, 1000);
}

function updateTimer(){
	countdown--;
	if(countdown == -1){
		$("#timer").text("Time's up!  The correct answer was " + questionList[question].ans + "!");
		stopTimer();
		setTimeout(nextQuestion, 3000);
	} else {
		$("#timer").text(countdown);
	}
}

function stopTimer(){
	clearTimeout(timer);
	countdown = 10;
}

function renderQuestion(){
	$("#textbox").text(questionList[question].q);
	$("#a1").text(questionList[question].a1);
	$("#a2").text(questionList[question].a2);
	$("#a3").text(questionList[question].a3);
	$("#a4").text(questionList[question].a4);
}

function nextQuestion(){
	if(question == 5){
		gameEnd();
	} else {
		renderQuestion();
		renderTimer(countdown);
		canGuess = true;
	}
}

function checkAnswer(event){
	if(canGuess){
		canGuess = false;
		stopTimer();
		if(event.target.innerHTML == questionList[question].ans){
			$("#timer").text("Correct!");
			correct++;
			question++;
			setTimeout(nextQuestion, 3000);
		} else {
			$("#timer").text("Incorrect!  The correct answer was " + questionList[question].ans + "!");
			question++;
			setTimeout(nextQuestion, 3000);
		}
	}

}

function gameEnd(){
	$("#timer").text("Game over, you got " + correct + " out of 5 questions correct!  Would you like to play again?");
	var e = $("<button>").attr("id", "start").text("Start");
	$("#main").append(e);
	$("#textbox").text("");
	$("#a1").text("");
	$("#a2").text("");
	$("#a3").text("");
	$("#a4").text("");
	canGuess = false;
	countdown = 10;
	question = 0;
	correct = 0;
}


