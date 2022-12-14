let inputForChoices = document.querySelector('#choices-input');
let resultChoices = document.querySelector('.result-choices-wrapper')

inputForChoices.addEventListener('keypress' , (e)=>{
  if(e.key === 'Enter'){
    e.preventDefault();
    console.log(inputForChoices.value.split(','));
    addChoice()
  }

})


function addChoice(){
  if(inputForChoices.value.trim() !== ''){
    let resultArr = inputForChoices.value.split(',');

    for(let i = 0; i < resultArr.length; i++){
      let newchoice = document.createElement('div');
      newchoice.textContent = resultArr[i];
      newchoice.classList.add('choice');
      resultChoices.append(newchoice)
    }
  }

}