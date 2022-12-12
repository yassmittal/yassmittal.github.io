let questions = document.querySelectorAll('.question-wrapper');

questions.forEach((question)=>{
  question.addEventListener('click' ,()=>{
    question.classList.toggle('answered')
  })
})
