const questions=[
    {
        question:"which is largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue-whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"girafe",correct:false},
        ]
    },
    {
        question:"whcih is smallest country in the world?",
        answers:[
            {text:"Nepal",correct:false},
            {text:"Shrilanka",correct:true},
            {text:"Pakistan",correct:false},
            {text:"Afganistan",correct:false},
        ]
    },
    {
    question:"whcih is smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Antartica",correct:true},
            {text:"china",correct:false},
            {text:"America",correct:false},
        ]
    },
       
    
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.foreach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList>add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
       answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(){
    const selectionBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct===true;
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
}
startQuiz();