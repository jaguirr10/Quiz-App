var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var numOfQC = 0;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var opt5 = document.getElementById('opt5');
var opt6 = document.getElementById('opt6');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.innerHTML = (questionIndex + 1) + '. ' + q.question;
	opt1.innerHTML = q.option1;
	opt2.innerHTML = q.option2;
	opt3.innerHTML = q.option3;
	opt4.innerHTML = q.option4;
	opt5.innerHTML = q.option5;
	opt6.innerHTML = q.option6;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
		numOfQC == answer;
		numOfQC++;
		
		
		
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.innerHTML = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.innerHTML = 'Your Score: ' + score + '<br>'+ '  You Answered ' + numOfQC +  '&nbsp;'+'Out ' + '&nbsp;' + 'of' + '&nbsp;' + totQuestions + '&nbsp;' + 'Questions' + '&nbsp;'+ 'Correctly';
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);