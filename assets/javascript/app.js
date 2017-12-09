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
	q: "This Greek creature is famous for its single eye, and appears in many legends.",
	a1: "Cyclops",
	a2: "Catobelpas",
	a3: "Cetus",
	a4: "Carcinos",
	ans: "Cyclops"
},
{
	q: "This Greek monster was known for demanding sacrifices in the form of maidens chained to a rock until its defeat by the hero Perseus.",
	a1: "Cetus",
	a2: "Kraken",
	a3: "Carcinos",
	a4: "Cyclops",
	ans: "Cetus"
},
{
	q: "This legendary Greek monster was once beautiful, but was cursed into a monster whose gaze turns victims to stone.",
	a1: "Stheno",
	a2: "Euryale",
	a3: "Medusa",
	a4: "Medea",
	ans: "Medusa"
},
{
	q: "Said to be the product of a chicken egg laid upon by a toad, this creature's gaze turns its victims to stone.",
	a1: "Gorgon",
	a2: "Cockatrice",
	a3: "Basilisk",
	a4: "Manticore",
	ans: "Cockatrice"
},
{
	q: "This monster possesses a human-like face, a lion-like body and a scorpion-like tail and feeds on humans.",
	a1: "Griffin",
	a2: "Chimera",
	a3: "Dragon",
	a4: "Manticore",
	ans: "Manticore"
},
{
	q: "This abominable crossbreed has the traits of a lion, bird, goat, and serpent.",
	a1: "Chimera",
	a2: "Manticore",
	a3: "Wendigo",
	a4: "Griffin",
	ans: "Chimera"
},
{
	q: "This cold weather spirit feeds on humans and is created when a human commits cannibalism.",
	a1: "Qiqirn",
	a2: "Baykok",
	a3: "Piasa",
	a4: "Wendigo",
	ans: "Wendigo"
},
{
	q: "This noble creature is a cross between a lion and an eagle.",
	a1: "Pegasus",
	a2: "Phoenix",
	a3: "Griffin",
	a4: "Roc",
	ans: "Griffin"
},
{
	q: "This dog-like creature guards the gate to the underworld.",
	a1: "Cerberus",
	a2: "Scylla",
	a3: "Cynocephalus",
	a4: "Minotaur",
	ans: "Cerberus"
},
{
	q: "This snake-like creature is famed for its regenerative abilities, if its head is struck off, two more will take its place.",
	a1: "Basilisk",
	a2: "Python",
	a3: "Hydra",
	a4: "Ladon",
	ans: "Hydra"
}];

var questionList = $.extend(true, [], mythTrivia);

var currentQuestion;

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
	var num = Math.floor(Math.random()*questionList.length);
	currentQuestion = questionList.splice(num, 1);
	console.log(currentQuestion);
	console.log(questionList);
	$("#textbox").text(currentQuestion[0].q);
	$("#a1").text(currentQuestion[0].a1);
	$("#a2").text(currentQuestion[0].a2);
	$("#a3").text(currentQuestion[0].a3);
	$("#a4").text(currentQuestion[0].a4);
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
		if(event.target.innerHTML == currentQuestion[0].ans){
			$("#timer").text("Correct!");
			correct++;
			question++;
			setTimeout(nextQuestion, 3000);
		} else {
			$("#timer").text("Incorrect!  The correct answer was " + currentQuestion[0].ans + "!");
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
	questionList = $.extend(true, [], mythTrivia);
}


