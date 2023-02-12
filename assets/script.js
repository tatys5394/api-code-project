
// Click start button
var startEl = document.querySelector("#start");
var clickStart = true;

function(StartQuiz);
if (clickStart === true)
    prompt ("")

    

// Listen for any clicks within the start div
startEl.addEventListener("click", function(StartTimer) {
  
  
  
    var element = event.target;
})

// DEPENDENCIES(DOM ELEMENTS) 

var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

// USER INTERACTIONS 
addButton.addEventListener("click", function() {
  if (count < 24) {
   //UPDATE THE DATA
    count++;
     //DISPLAY THE UPDATED DATA 
    counter.textContent = count;
     //SAVE THE DATA 
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

// Starts timer 
    // presented with question

    //Present a question

    //present second question

    //add if statement if something is not "true" subtract time from clock

    // add game over WHEN all questions are answered or the timer reaches 0

    // add function to save initials and scores

    // and return loop to start button 

    // DATA - this is about saving your scores at the end
var count = localStorage.getItem("count");

counter.textContent = count;

