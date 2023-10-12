let inputEl = document.querySelector('input');

let lastMsg = document.querySelector('.lastMsg');

let button = document.querySelector('button')

const errorMsg = document.querySelector('.error')



button.addEventListener('click' , (e)=> {
  e.preventDefault();
  lastMsg.innerText = inputEl.value;

  if(!inputEl.value){
    errorMsg.style.opacity = 1;
    setInterval(() => {
    errorMsg.style.opacity = 0;
    }, 4000);
  }else{
    errorMsg.style.opacity = 0;
  }
})
