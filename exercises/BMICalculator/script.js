let calculateBtn = document.querySelector('.calculation-button');
let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let result = document.querySelector('.result p')
let bmiCategory = document.querySelector('.bmiCategory')
let heightError = document.querySelector('.height-error');
let weightError = document.querySelector('.weight-error');
let resetButton = document.querySelector('.reset-button')


calculateBtn.addEventListener('click' , (e)=>{
  let weightInteger = +weight.value;
  let heightInteger = +height.value;
  let BMI = weightInteger / heightInteger ** 2;
   BMI = BMI.toFixed(2)

   if(weightInteger && heightInteger){
     result.textContent = `BMI = ${BMI}`;
     
     if(BMI < 18.5){
       bmiCategory.textContent = 'Underweight'
        bmiCategory.style.color = 'red'
      }else if(BMI < 24.9){
        bmiCategory.textContent = 'Normal Weight'
        bmiCategory.style.color = '#06ff06'
      }else if(BMI >= 24.9){
        bmiCategory.style.color = 'red'
        bmiCategory.textContent = 'Obese'
      }

     bmiCategory.classList.add('present')
     heightError.classList.remove('present')
     weightError.classList.remove('present')
    //  errrorMsg.classList.remove('present')
   }else{
     if(!heightInteger){
       heightError.classList.add('present')
     }else{
       heightError.classList.remove('present')
     }
     
     if(!weightInteger){
       weightError.classList.add('present')
     } else{
       weightError.classList.remove('present')
     }
    
     bmiCategory.classList.remove('present')
     result.textContent = `BMI = ___`;
  }
  
})


resetButton.addEventListener('click' , ()=>{
  weight.value = '';
  height.value = '';
  result.textContent = `BMI = ___`;
  bmiCategory.classList.remove('present')
  errrorMsg.classList.remove('present')
})