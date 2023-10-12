let decrementButton = document.querySelector('.decrement-btn');
let incrementButton = document.querySelector('.increment-btn');
let result = document.querySelector('#result');

decrementButton.addEventListener('click' , ()=>{
  result.textContent = --result.textContent;
  changeColor()
})

incrementButton.addEventListener('click' , ()=>{
  result.textContent = ++result.textContent;
  changeColor()
})

function changeColor(){
if(result.textContent < 0){
  result.style.color = 'red'
} else if(result.textContent > 0){
  result.style.color = 'green'
} else{
  result.style.color = 'black'
}
}