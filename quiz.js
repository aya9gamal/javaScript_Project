const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");
const next = document.getElementById("next");
const timer=document.getElementById('timer');
const coursename= document.getElementById('coursename');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let quizQusetions={
    quizname:"javascript",
    quizTime:"30:00",
    totalDegree:100,
 questions :[
    {
        Header: "What is 1 * 1",
        choice1: "2",
        choice2: "1",
        choice3: "4",
        choice4: "5",
        answer:2,
        degree: 10
    },
    {
        Header: "What is 1 * 2",
        choice1: "2",
        choice2: "5",
        choice3: "1",
        choice4: "0",
        answer:1,
        degree: 10
    },
    {
        Header: "What is 3 * 6",
        choice1: "18",
        choice2: "20",
        choice3: "10",
        choice4: "12",
        answer:1,
        degree: 10
    },
    {
        Header: "What is 10 * 6",
        choice1: "40",
        choice2: "50",
        choice3: "79",
        choice4: "60",
        answer:4,
        degree: 10
    },
    {
        Header: "What is 2 * 5",
        choice1: "10",
        choice2: "11",
        choice3: "12",
        choice4: "20",
        answer:1,
        degree: 10
    },
    {
        Header: "What is 3 * 5",
        choice1: "15",
        choice2: "12",
        choice3: "20",
        choice4: "50",
        answer:1,
        degree: 10
    },
    {
        Header: "What is 10 * 5",
        choice1: "20",
        choice2: "30",
        choice3: "40",
        choice4: "50",
        answer:4,
        degree: 10
    },
    {
        Header: "What is 3 * 10",
        choice1: "40",
        choice2: "30",
        choice3: "60",
        choice4: "70",
        answer:2,
        degree: 10
    },
    {
        Header: "What is 4 * 10",
        choice1: "40",
        choice2: "30",
        choice3: "60",
        choice4: "70",
        answer:1,
        degree: 10
    },
    {
        Header: "What is 10 * 10",
        choice1: "40",
        choice2: "30",
        choice3: "100",
        choice4: "70",
        answer:3,
        degree: 10
    },
    {
        Header: "What is 1 * 10",
        choice1: "40",
        choice2: "30",
        choice3: "60",
        choice4: "10",
        answer:4,
        degree: 10
    },
    {
        Header: "What is 9 * 10",
        choice1: "40",
        choice2: "30",
        choice3: "90",
        choice4: "70",
        answer:3,
        degree: 10
    },
    {
        Header: "What is 7 * 10",
        choice1: "40",
        choice2: "30",
        choice3: "60",
        choice4: "70",
        answer:4,
        degree: 10
    },

]
}



coursename.innerHTML=quizQusetions.quizname;
timer.innerHTML=quizQusetions.quizTime;

//CONSTANTS



const correctBonus = 10;
const incorrectPenalty = -10;
const maxQuestions = 10;
startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...quizQusetions.questions]
    console.log (availableQuestions);
    newQuestion();
};
newQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions){

        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("./end.html");

    }
    
    if(questionCounter===maxQuestions-1)
    {
        next.innerText="Finish"
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.Header;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
   

    availableQuestions.splice(questionIndex, 1);
};

 function nextx(e) {
       
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if(classToApply === 'correct') {
            incrementScore(correctBonus);
        }
        if(selectedAnswer==null)
        {
           return e.preventDefault();
        }

         newQuestion();
 }

    choices.forEach(choice =>choice.addEventListener('click', nextx));
    next.addEventListener('click', nextx);



    incrementScore = num => {
        score +=num;
        scoreText.innerText = score;
    }


startQuiz(); 
const startMinutes=30;
let time=startMinutes * 60;

let countDown=()=>{
    const Minutes=Math.floor(time/60);
    const seconds=time % 60;
    timer.innerHTML=`${Minutes}: ${seconds}`;
    time--;
    if(Minutes===0 && seconds===0)
    return window.location.assign("./end.html");
}
setInterval(countDown,1000);

