const nextBtn = document.querySelector('.next-btn');
const submitBtn = document.querySelector('.submit-btn');
const currentQuestion = document.querySelector('.current-question');
const radioButtons = [...document.querySelectorAll('.radio-input')];
const mainContent = document.querySelector('.main-wrapper')
const errorMsg = document.querySelector('.error-msg');
let currentQuestionCount = document.querySelector('.current-question-count');
let totalQuestionCount = document.querySelector('.total-question');
let resultMsg = document.querySelector('.result-message')

let presentQuestion = 0;

const questions = [
  { id: 1, question: 'You need to know code to be a web designer.' },
  {
    id: 2,
    question:
      'A Full Stack developer should know is called MEAN: MongoDB, Express, Angular and NodeIS.',
  },
  {
    id: 3,
    question:
      'A Full Stack developer must understand how to export data from analytical tools such as Google Analytics.',
  },
  {
    id: 4,
    question:
      'Full Stack developers are “developer generalists” who possesses a wealth of technical knowledge.',
  },
  {
    id: 5,
    question:
      'A Full Stack developer needs to know how to use version control tools such as GIT.',
  },
  {
    id: 6,
    question:
      'The Full Stack Developer must be 100% up-to-date on their knowledge and skills, including how to create mobile apps.',
  },
];

totalQuestionCount.textContent = questions.length;

setquestion();
updateQuestionCount();




nextBtn.addEventListener('click', e =>{
  console.log('next question function');
  nextQuestion();
})

function nextQuestion(){

  if(validateResponse()){
    ++presentQuestion;
  
    if(presentQuestion === questions.length - 1){
      showHideElement(nextBtn);
      showHideElement(submitBtn);
    }
    
     if(presentQuestion <= questions.length && presentQuestion >= 0){
      setquestion();
      updateQuestionCount();
      ClearResponse()
      errorMsg.classList.add('hide')
      
    }
  }else{
    errorMsg.classList.remove('hide')
    console.log(validateResponse());
  }

}

function setquestion(){
  currentQuestion.textContent = `${questions[presentQuestion].question}`
}

function showHideElement(element){
  element.classList.toggle('hide')
}

function updateQuestionCount(){
  currentQuestionCount.textContent = presentQuestion + 1;
}

submitBtn.addEventListener('click', ()=>{
  if(validateResponse()){
    showHideElement(mainContent);
    showHideElement(resultMsg);
  }else{
    errorMsg.classList.remove('hide')
  }
})

function validateResponse(){
 return radioButtons.some((button) => {
    return button.checked;
  })
}

function ClearResponse(){
  radioButtons.forEach(button => {
    button.checked = false;
  })
}