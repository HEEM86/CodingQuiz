let startButton = document.getElementById('startButton')
let myQuestionsContainerElement = document.getElementById       
('theQuestions')
let myQuestionsElement = document.getElementById ('myQuestions')
let answerButtonsElement= document.getElementById('answer-buttons')

let mixedQuestions, radarQuestiontracking

startButton.addEventListener('click', startQuiz)


function startQuiz()  {
	console.log('Started')
	mixedQuestions = myQuestions.sort(() => Math.random() - .5)
	radarQuestiontracking = 0
	setQuestion()

}

function nextQuestion() {
	presentQuestion(mixedQuestions[radarQuestiontracking])


}

function presentQuestion(myQuestions) {
myQuestionsElement.innerText = myQuestions.myQuestions

}

function selectAnswer() 





let myQuestions = [

	question1 = {
		question: "What does the JavaScript function do alert do?",
		correctAnsw: "Pops up a dialog box with text",
		answers: ["Pops up a dialog box with text", "A file that add styles like fonts and colors to a website", "Diplays a dialog box with a message along with an OK or Cancel button", "Is the standard markup language for creating web page"]
	},
	question2 = {
		question: "What does the JavaScript fucntion confirm do?",
		correctAnsw: "Diplays a dialog box with a message along with an OK or Cancel buttone",
		answers: ["Is the standard markup language for creating web page", "Log values in the console", "A language used for developing operating systems, browsers, games etc.", "Diplays a dialog box with a message along with an OK or Cancel button"]
	},
	question3 = {
		question: "What does the JavaScript fuction prompt do?",
		correctAnsw: "Programming Language",
		answers: ["Display text in a dialog box that pops up on screeny", "A pop up dialog box that allows user iput", "Diplays a dialog box with a message along with an OK or Cancel button", "A general-purpose scripting language that is especially suited to web development"]
	},
	question4 = {
		question: "What is a Javascript?",
		correctAnsw: "A language used for developing operating systems, browsers, games",
		answers: ["A file that add styles like fonts and colors to a website", "Is the standard markup language for creating web pages", "A general-purpose scripting language that is especially suited to web development", "A language used for developing operating systems, browsers, games etc."]
	}
	
]


// // empty array for highscores

// //Header
// let viewScores = document.getElementById("viewScores");
// let timer = document.getElementById("timer");

// //Main section
// let startBtn = document.getElementById("start-game");

// //Questions & Answers

// //Highscore PageP


// //Add event hadnler to the elements

// startBtn.addEventListener("click", startQuiz);



// function startQuiz() {
// 	alert("quiz has started");




var statusSpan = document.querySelector("#startButton");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
var inputs = document.querySelector(".inputs")
var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;
/* One thing to distinguish here is that not all functions are created equal.
   Some functions just change settings, some functions just call other functions,
   some functions just format strings or numbers, etc. */
// This launches the app by calling setTime() and renderTime()
getTimePreferences();
// These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {
  //
  var secondsLeft = totalSeconds - secondsElapsed;
  var minutesLeft = Math.floor(secondsLeft / 60);
  var formattedMinutes;
  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }
  return formattedMinutes;
}
function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  var formattedSeconds;
  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
}
/* This function retrieves the values from the html input elements; Sort of
   getting run in the background, it sets the totalSeconds variable which
   is used in getFormattedMinutes/Seconds() and the renderTime() function.
   It essentially resets our timer */
function setTime() {
  var minutes;
  if (status === "Working") {
    minutes = workMinutesInput.value.trim();
  } else {
    minutes = restMinutesInput.value.trim();
  }
  clearInterval(interval);
  totalSeconds = minutes * 60;
}
// This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
  // When renderTime is called it sets the textContent for the timer html...
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
 // ..and then checks to see if the time has run out
  if (secondsElapsed >= totalSeconds) {
    if (status === "Working") {
      alert("Time for a break!");
    } else {
      alert("Time to get back to work!");
    }
    stopTimer();
  }
}
// This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed var
function startTimer() {
  setTime();
  // We only want to start the timer if totalSeconds is > 0
  if (totalSeconds > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
      interval = setInterval(function() {
        secondsElapsed++;
        // So renderTime() is called here once every second.
        renderTime();
      }, 1000);
  } else {
    alert("Minutes of work/rest must be greater than 0.")
  }
}
/* This function stops the setInterval() set in startTimer but does not
   reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
function pauseTimer() {
  clearInterval(interval);
  renderTime();
}
/* This function stops the interval and also resets secondsElapsed
   and calls "setTime()" which effectively reset the timer
   to the input selections workMinutesInput.value and restMinutesInput.value */
function stopTimer() {
  secondsElapsed = 0;
  setTime();
  renderTime();
}
/* Our timer is fancy enough to handle 2 different settings at once this toggle
   function basically just specifies which of our 2 timer settings to use. */
function toggleStatus(event) {
  var checked = event.target.checked;
  if (checked) {
    status = "Working";
  } else {
    status = "Resting";
  }
  statusSpan.textContent = status;
  secondsElapsed = 0;
  setTime();
  renderTime();
}
function getTimePreferences() {
  /* Here we check to see if any preferences have
     been set in the local storage via "setTimePreferences()" */
  var preferences = JSON.parse(localStorage.getItem("preferences"));
  // If preferences have been set then use any value available
  if (preferences) {
    if (preferences.workMinutes) {
      workMinutesInput.value = preferences.workMinutes;
    }
    if (preferences.restMinutes) {
      restMinutesInput.value = preferences.restMinutes;
    }
  }
  // This is where the app is really kicked-off, setTime and renderTime are the two main routines.
  setTime();
  renderTime();
}
function setTimePreferences() {
  localStorage.setItem(
    "preferences",
    JSON.stringify({
      workMinutes: workMinutesInput.value.trim(),
      restMinutes: restMinutesInput.value.trim()
    })
  );
}
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
statusToggle.addEventListener("change", toggleStatus);
inputs.addEventListener("change", setTimePreferences);
inputs.addEventListener("keyup", setTimePreferences);











































