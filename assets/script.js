// Click start button
var startEl = document.querySelector("#start");
var quizViewEl = document.querySelector("#quiz-view");

var timeLeftEl = document.querySelector("#time-left");

var clickStart = true;

var answerChoiceA = document.createElement("button");
var answerChoiceB = document.createElement("button");
var answerChoiceC = document.createElement("button");
var answerChoiceD = document.createElement("button");

var highscoresEl = document.querySelector("#highscores")

var scoresEl = document.querySelector("#scores")

var answerEl = document.querySelector("#answer");
var answerText = document.querySelector("#answer-text");
var nextQuestion = document.createElement("button");

var endOfGame = document.querySelector("#end-of-game");

var titleEl = document.querySelector("#quiz-title");
var explanationEl = document.querySelector("#quiz-explanation");
var startEl = document.querySelector("#start");
var timeLeftEl = document.querySelector("#time-left");
var messageEl = document.querySelector("#message");
var questionEl = document.querySelector("#question");
var answerChoicesEl = document.querySelector("#answer-choices");
var timeLeft = 75;
var timer;
var questionNo = 0;
var questions = [
  {
    question: "Commonly used data types DO NOT include",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
      correct: "alerts",
    },
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    answers: {
      a: "quotes",
      b: "curly-brackets",
      c: "parenthesis",
      d: "square-brackets",
      correct: "parenthesis",
    },
  },
  {
    question: "Arrays in Javascript can be used to store ___.",
    answers: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
      correct: "all of the above",
    },
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly-brackets",
      c: "quotes",
      d: "square-brackets",
      correct: "quotes",
    },
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "javascript",
      b: "terminal-bash",
      c: "for-loops",
      d: "console-log",
      correct: "console-log",
    },
  },
];

function everySecond() {
  timeLeft--;
  timeLeftEl.textContent = timeLeft;
  if (timeLeft < 0) {
    clearInterval(timer);
    messageEl.textContent = "You're out of time! Game over :("
    endQuiz();
  }
}

function startQuiz() {
  questionNo = 0;
  timeLeft = 76
  answerChoicesEl.style.visibility = "visible";
  nextQuestion.style.visibility = "visible";
  questionEl.style.visibility = "visible";
  titleEl.style.display = "none";
  explanationEl.style.display = "none";
  startEl.style.display = "none";

  nextQuestion.textContent = "Next";
  nextQuestion.addEventListener("click", loadQuestion);
  nextQuestion.style.visibility = "hidden"; //visible
  answerEl.appendChild(nextQuestion);

  timeLeftEl.textContent = timeLeft;
  timer = setInterval(everySecond, 1000);
  loadQuestion();

  // place buttons in answer choices div
  answerChoicesEl.appendChild(answerChoiceA);
  answerChoicesEl.appendChild(answerChoiceB);
  answerChoicesEl.appendChild(answerChoiceC);
  answerChoicesEl.appendChild(answerChoiceD);
}

function loadQuestion() {
  if (questionNo > 4) {
    endQuiz();
  }
  answerText.textContent = "";

  // set question text to question element
  if(questions[questionNo]){
    questionEl.textContent = questions[questionNo].question;
    // create buttons and set text to answer choice text
    answerChoiceA.textContent = questions[questionNo].answers.a;
    answerChoiceA.setAttribute("correct", questions[questionNo].answers.correct);
    answerChoiceA.addEventListener("click", handleAnswerChoice);
  
    answerChoiceB.textContent = questions[questionNo].answers.b;
    answerChoiceB.setAttribute("correct", questions[questionNo].answers.correct);
    answerChoiceB.addEventListener("click", handleAnswerChoice);
  
    answerChoiceC.textContent = questions[questionNo].answers.c;
    answerChoiceC.setAttribute("correct", questions[questionNo].answers.correct);
    answerChoiceC.addEventListener("click", handleAnswerChoice);
  
    answerChoiceD.textContent = questions[questionNo].answers.d;
    answerChoiceD.setAttribute("correct", questions[questionNo].answers.correct);
    answerChoiceD.addEventListener("click", handleAnswerChoice);
  
    questionNo++;
  }
}

function handleAnswerChoice(event) {
  var choiceButton = event.srcElement;
  var choiceButtonText = choiceButton.textContent;
  var choiceButtonCorrect = choiceButton.getAttribute("correct");

  nextQuestion.style.visibility = "visible";

  if (choiceButtonText === choiceButtonCorrect) {
    answerText.textContent = "right";
  } else {
    answerText.textContent = "wrong";
    timeLeft = timeLeft - 10;
  }

}

var inputBox = document.createElement("input");

function endQuiz() {
  endOfGame.style.visibility = "visible";
  answerChoicesEl.style.display = "none";
  nextQuestion.style.display = "none";
  questionEl.style.display = "none";

  finalText.textContent = "Your final score is: " + timeLeft;

  clearInterval(timer)

}


var finalText = document.createElement("p");

function createEndOfGameView() {
  var allDoneTitle = document.createElement("h1");
  allDoneTitle.textContent = "All Done!!";
  
  finalText.textContent = "Your final score is: " + timeLeft;

  var inputBoxText = document.createElement("p");
  inputBoxText.textContent = "Enter initials: ";

  inputBox.setAttribute("type", "text");

  var inputBoxButton = document.createElement("button");
  inputBoxButton.textContent = "Submit";
  inputBoxButton.addEventListener("click", saveScore);


  endOfGame.appendChild(allDoneTitle);
  endOfGame.appendChild(finalText)
  endOfGame.appendChild(inputBoxText)
  endOfGame.appendChild(inputBox)
  endOfGame.appendChild(inputBoxButton)
}

function saveScore() {

  localStorage.setItem(inputBox.value, timeLeft)
  endOfGame.style.visibility = "hidden";

  titleEl.style.visibility = "visible";
  explanationEl.style.visibility = "visible";
  startEl.style.visibility = "visible";

}



var scoresTitle = document.createElement("h1");
scoresTitle.textContent = "Highscores";

var goBackButton = document.createElement("button");
goBackButton.textContent = "Go Back";
goBackButton.addEventListener("click", showStartQuiz);
var clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.addEventListener("click", clearLocalStorage);


function showScore() {
  scoresEl.style.visibility = "visible";
  quizViewEl.style.visibility = "hidden";
  titleEl.style.visibility = "hidden";
  explanationEl.style.visibility = "hidden";
  startEl.style.visibility = "hidden";

  showAllStorage();
}

function clearLocalStorage() {
  localStorage.clear()
  showStartQuiz()
}

function showAllStorage() {

  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
    var item = document.createElement("p");
    item.textContent = keys[i] + ": " + localStorage.getItem(keys[i]);
    scoresEl.appendChild(item);
  }

  return values;
}

function showStartQuiz() {
  quizViewEl.style.visibility = "visible";
  scoresEl.style.visibility = "hidden";
  titleEl.style.visibility = "visible";
  explanationEl.style.visibility = "visible";
  startEl.style.visibility = "visible";
}



startEl.addEventListener("click", startQuiz);

highscoresEl.addEventListener("click", showScore);

function setUp() {
  // scores view
  scoresEl.appendChild(scoresTitle);
  scoresEl.appendChild(goBackButton)
  scoresEl.appendChild(clearButton)

  scoresEl.style.visibility = "hidden";

  // Example values
  localStorage.clear();
  localStorage.setItem("Tatiana",75);
  localStorage.setItem("Sara",76);

  // End of game
  createEndOfGameView()
  endOfGame.style.visibility = "hidden";

}

setUp()
