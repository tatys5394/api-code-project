// Click start button
var startEl = document.querySelector("#start");

var timeLeftEl = document.querySelector("#time-left");

var clickStart = true;

// // function startQuiz() {
// //   timeLeftEl.textContent = "HELLO?";
// // }

// // // function definition
// // function addNumbers(numberOne, numberTwo) {
// //   var sum = numberOne + numberTwo;
// //   return sum;
// // }

// // // calling or invoking a function
// // var answer1 = addNumbers(1, 2);

// // // assigning the return value of a function
// // var answer2 = addNumbers(10, 12);

// // Listen for any clicks within the start div
// startEl.addEventListener("click", startQuiz);

// // DEPENDENCIES(DOM ELEMENTS)

// // // USER INTERACTIONS
// // addButton.addEventListener("click", function () {
// //   if (count < 24) {
// //     //UPDATE THE DATA
// //     count++;
// //     //DISPLAY THE UPDATED DATA
// //     counter.textContent = count;
// //     //SAVE THE DATA
// //     localStorage.setItem("count", count);
// //   }
// // });

// // subtractButton.addEventListener("click", function () {
// //   if (count > 0) {
// //     count--;
// //     counter.textContent = count;
// //     localStorage.setItem("count", count);
// //   }
// // });

// // Starts timer
// // presented with question

// //Present a question

// //present second question

// //add if statement if something is not "true" subtract time from clock

// // add game over WHEN all questions are answered or the timer reaches 0

// // add function to save initials and scores

// // and return loop to start button

// // DATA - this is about saving your scores at the end

// // var count = localStorage.getItem("count");

// // counter.textContent = count;










var startEl = document.querySelector("#start");
var timeLeftEl = document.querySelector("#time-left");
var messageEl = document.querySelector("#message");
var questionEl = document.querySelector("#question");
var answerChoicesEl = document.querySelector("#answer-choices");
var timeLeft = 60;
var timer;
var questionNo = 0;
​
var questions = [
    {
        question: "Question: Do you like JavaScript?",
        answers: {
            a: "Yes",
            b: "Sorta",
            c: "Not really",
            d: "I despise it",
            correct: "b"
        }
    },
    {
        question: "Question: Do you really like JavaScript?"
    }
]
​
function everySecond() {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        messageEl.textContent = "You're out of time! Game over :(";
    }
}
​
function startQuiz() {
​
    timeLeftEl.textContent = timeLeft;
    timer = setInterval(everySecond, 1000);
​
    loadQuestion(questionNo);
}
​
function loadQuestion(number) { 
    // set question text to question element
    questionEl.textContent = questions[number].question;
​
    // create buttons and set text to answer choice text
    var answerChoiceA = document.createElement("button");
    answerChoiceA.textContent = questions[number].answers.a;
    answerChoiceA.setAttribute("correct", "false");
    
    var answerChoiceB = document.createElement("button");
    answerChoiceB.textContent = questions[number].answers.b;
    answerChoiceA.setAttribute("correct", "false");
    
    var answerChoiceC = document.createElement("button");
    answerChoiceC.textContent = questions[number].answers.c;
    answerChoiceA.setAttribute("correct", "false");
    
    var answerChoiceD = document.createElement("button");
    answerChoiceD.textContent = questions[number].answers.d;
    answerChoiceA.setAttribute("correct", "false");
    
    // place buttons in answer choices div
    answerChoicesEl.appendChild(answerChoiceA);
    answerChoicesEl.appendChild(answerChoiceB);
    answerChoicesEl.appendChild(answerChoiceC);
    answerChoicesEl.appendChild(answerChoiceD);
​
}
​
function handleAnswerChoice() {
​
}
​
startEl.addEventListener('click', startQuiz);