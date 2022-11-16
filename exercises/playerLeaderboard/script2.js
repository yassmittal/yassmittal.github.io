 const formEl = document.querySelector('#form');
 const firstNameErr = document.querySelector('.first-name-error')
 const lastNameErr = document.querySelector('.last-name-error')
 const countryErr = document.querySelector('.country-error')
 const scoreErr = document.querySelector('.score-error')

 

 formEl.addEventListener('submit' , (e) => {
  e.preventDefault();
  const Formdata = new FormData(formEl);
  const entries  = Object.fromEntries(Formdata);
  const{firstName , lastName, country , score} = entries;

  // let formarr = Object.keys(entries);

  // formarr.forEach(item => {

  //   if(firstName == ''){
  //     console.log('empty')
  //   } else{
  //     console.log('if condition not working')
  //   }
  // });

  function doBorderRedOfPrevSib(errorElement){
    errorElement.previousElementSibling.style.border = '2px solid red';
  }


  function removeBorderOfPrevSib(errorElement){
    errorElement.previousElementSibling.style.border = '2px solid green';
  }

  if(firstName === ''){
    firstNameErr.style.opacity = '1';
    doBorderRedOfPrevSib(firstNameErr);
  } else{
    firstNameErr.style.opacity = '0';
    removeBorderOfPrevSib(firstNameErr);
  }


  if(lastName === ''){
    lastNameErr.style.opacity = '1';
    doBorderRedOfPrevSib(lastNameErr);
  } else{
    lastNameErr.style.opacity = '0';
    removeBorderOfPrevSib(lastNameErr);
  }


  if(country === ''){
    countryErr.style.opacity  = '1';
    doBorderRedOfPrevSib(countryErr);
  } else{
    countryErr.style.opacity = '0'
    removeBorderOfPrevSib(countryErr);
  }


  if(score < 0 || score === ''){
    scoreErr.style.opacity = '1';
    doBorderRedOfPrevSib(scoreErr);
  } else{
    scoreErr.style.opacity = '0';
    removeBorderOfPrevSib(scoreErr);
  }
  // lastName === '' ? lastNameErr.style.opacity ='1' : lastNameErr.style.opacity = '0';
  // country === '' ? countryErr.style.opacity ='1' : countryErr.style.opacity = '0';
  // score < 0 || score == ''? scoreErr.style.opacity ='1' : scoreErr.style.opacity = '0';
  
  
})


// firstName === '' ? firstNameErr.style.opacity ='1' & console.log('working'): firstNameErr.style.opacity = '0';