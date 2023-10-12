let circleWrapper = document.querySelector('.circle-wrapper');
let instructiveText = document.querySelector('.instructive-text')

// circleWrapper.addEventListener('click' ,(e)=>{
//   circleWrapper.classList.toggle('expand')
// } )


// let breathInInterval = window.setInterval(() => {
//   circleWrapper.classList.toggle('expand')
// }, 3000);


// let clearbreathInInterval = breathInInterval.clearbreathInInterval()



const totalTime = 7500;

const breathingTime = 3000;
const holdTime = 1500;

breathAnimation();

// setInterval(() => {
//   breathAnimation()
  
// }, totalTime);


function breathAnimation(){

  instructiveText.textContent = 'breathe In';
  circleWrapper.classList.add('expand');

  setTimeout(() => {
    instructiveText.textContent = 'hold';
    circleWrapper.classList.remove('expand');


    setTimeout(() => {
      circleWrapper.classList.add('expand')
      
    }, holdTime);


  }, breathingTime);

}