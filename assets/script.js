// Click start button
var startEl = document.querySelector("#start");

var timeLeftEl = document.querySelector("#time-left");

var clickStart = true;

var answerEl = document.querySelector("#answer");
var titleEl = document.querySelector("#quiz-title")
var explanationEl = document.querySelector("#quiz-explanation")
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
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly-brackets",
      c: "quotes",
      d: "square-brackets",
      correct: "quotes",
    },
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "javascript",
      b: "terminal-bash",
      c: "for-loops",
      d: "console-log",
      correct: "console-log",
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
  titleEl.style.display = "none";
  explanationEl.style.display = "none";
  startEl.style.display = "none";
  
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
  answerChoiceA.setAttribute("correct", questions[number].answers.correct);
  answerChoiceA.addEventListener("click", handleAnswerChoice)

  var answerChoiceB = document.createElement("button");
  answerChoiceB.textContent = questions[number].answers.b;
  answerChoiceB.setAttribute("correct", questions[number].answers.correct);
  answerChoiceB.addEventListener("click", handleAnswerChoice)

  var answerChoiceC = document.createElement("button");
  answerChoiceC.textContent = questions[number].answers.c;
  answerChoiceC.setAttribute("correct", questions[number].answers.correct);
  answerChoiceC.addEventListener("click", handleAnswerChoice)

  var answerChoiceD = document.createElement("button");
  answerChoiceD.textContent = questions[number].answers.d;
  answerChoiceD.setAttribute("correct", questions[number].answers.correct);
  answerChoiceD.addEventListener("click", handleAnswerChoice)

  // place buttons in answer choices div
  answerChoicesEl.appendChild(answerChoiceA);
  answerChoicesEl.appendChild(answerChoiceB);
  answerChoicesEl.appendChild(answerChoiceC);
  answerChoicesEl.appendChild(answerChoiceD);
}

function handleAnswerChoice(event) {
  

  var choiceButton = event.srcElement;
  var choiceButtonText = choiceButton.textContent;
  var choiceButtonCorrect = choiceButton.getAttribute("correct");

  if (choiceButtonText === choiceButtonCorrect) {
    answerEl.textContent = "right"
  } else {
    answerEl.textContent = "wrong"
  }

  // questionNo++;
  // if questionNo > 5
  // then FINISH
  // else loadQuestion(questionNo)
}

startEl.addEventListener("click", startQuiz);
