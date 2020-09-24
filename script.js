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

function presentQuestion(myQuestions)
myQuestionsElement.innerText = myQuestions.myQuestions

function selectAnswer() {


}


let myQuestions = 

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
















































