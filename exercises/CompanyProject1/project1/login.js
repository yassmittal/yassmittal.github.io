let passwordBtn = document.querySelector('#password-button')
let passwordInput = document.querySelector('#password')


passwordBtn.addEventListener('click',   e => {
  e.preventDefault()
  passwordBtn.classList.toggle('show-password')


  if(passwordInput.type === 'text'){
    passwordInput.type = 'password'
  }else{
    passwordInput.type = 'text'
  }


  
  if(passwordBtn.firstElementChild.textContent === 'visibility'){
    passwordBtn.firstElementChild.textContent = 'visibility_off'
  }else{
    passwordBtn.firstElementChild.textContent = 'visibility'
  }
  

})