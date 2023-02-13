// Click start button
var startEl = document.querySelector("#start");

var timeLeftEl = document.querySelector("#time-left");

var clickStart = true;

var startEl = document.querySelector("#start");
var timeLeftEl = document.querySelector("#time-left");
var messageEl = document.querySelector("#message");
var questionEl = document.querySelector("#question");
var answerChoicesEl = document.querySelector("#answer-choices");
var timeLeft = 75;
var timer;
var questionNo = 1;
var questions = [
  {
    question: "Commonly used data types DO NOT include",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
      correct: "c",
    },
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    answers: {
      a: "quotes",
      b: "curly-brackets",
      c: "parenthesis",
      d: "square-brackets",
      correct: "",
    },
  },
  {
    question: "Arrays in Javascript can be used to store ___.",
    answers: {
      a: "quotes",
      b: "curly-brackets",
      c: "parenthesis",
      d: "square-brackets",
      correct: "",
    },
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly-brackets",
      c: "quotes",
      d: "square-brackets",
      correct: "",
    },
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "javascript",
      b: "terminal-bash",
      c: "for-loops",
      d: "console-log",
      correct: "",
    },
  }
];
function everySecond() {
  timeLeft--;
  timeLeftEl.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(timer);
    messageEl.textContent = "You're out of time! Game over :(";
  }
}

function startQuiz() {
  timeLeftEl.textContent = timeLeft;
  timer = setInterval(everySecond, 1000);
  loadQuestion(questionNo);
}

function loadQuestion(number) {
  // set question text to question element
  questionEl.textContent = questions[number].question;
  // create buttons and set text to answer choice text
  var answerChoiceA = document.createElement("button");
  answerChoiceA.textContent = questions[number].answers.a;
  answerChoiceA.setAttribute("correct", "false");

  var answerChoiceB = document.createElement("button");
  answerChoiceB.textContent = questions[number].answers.b;
  answerChoiceB.setAttribute("correct", "false");

  var answerChoiceC = document.createElement("button");
  answerChoiceC.textContent = questions[number].answers.c;
  answerChoiceC.setAttribute("correct", "false");

  var answerChoiceD = document.createElement("button");
  answerChoiceD.textContent = questions[number].answers.d;
  answerChoiceD.setAttribute("correct", "false");

  // place buttons in answer choices div
  answerChoicesEl.appendChild(answerChoiceA);
  answerChoicesEl.appendChild(answerChoiceB);
  answerChoicesEl.appendChild(answerChoiceC);
  answerChoicesEl.appendChild(answerChoiceD);
}

function handleAnswerChoice() {
  // questionNo++;
  // if questionNo > 5
  // then FINISH
  // else loadQuestion(questionNo)
}

startEl.addEventListener("click", startQuiz);
