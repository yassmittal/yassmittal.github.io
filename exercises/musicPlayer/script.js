let playButton = document.querySelector('.play-button');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button')
let sounds = document.querySelectorAll('.audio audio');
let images = document.querySelectorAll('.images img');
let filledLoader = document.querySelector('.filled-loader')

let index = 0;

playButton.addEventListener('click', startOrEndPlay);
nextButton.addEventListener('click' , nextSound);
prevButton.addEventListener('click' , prevSound);

function startOrEndPlay(){

  if(playButton.classList.contains('notplaying')){
    playSound(sounds[index])
    playButton.setAttribute('class' , 'playing')
    playButton.firstElementChild.setAttribute('class' , 'fas fa-pause pause-button-icon')
    images[index].classList.add('rotate')
    startLoading()

  }else if(playButton.classList.contains('playing')){
    stopSound(sounds[index])
    hideAllOtherImages()
    playButton.setAttribute('class' , 'notplaying')
    images[index].classList.add('show-image')
    images[index].classList.remove('rotate')
    playButton.firstElementChild.setAttribute('class' , 'fas fa-play play-button-icon')
    pauseLoading()
  }



}

function playSound(sound){
  sound.play();
}

function stopSound(sound){
  sound.pause();
}

function nextSound(){
  backToZero()
  setCurrentTimeZero();
  startLoading()
  ++index;
  if(index > sounds.length-1){
    index = 0;
  }
  console.log(index);
  hideAllOtherImages()
  stopAllSound()
  playSound(sounds[index])
  images[index].classList.add('rotate')
  playButton.firstElementChild.setAttribute('class' , 'fas fa-pause pause-button-icon')
  playButton.setAttribute('class' , 'playing')
}

function prevSound(){
  backToZero()
  setCurrentTimeZero();
  startLoading()
  --index;
  console.log(index);
  if(index < 0){
    index = sounds.length - 1;
  }
  hideAllOtherImages()
  stopAllSound()
  playSound(sounds[index]);
  images[index].classList.add('rotate')
  playButton.firstElementChild.setAttribute('class' , 'fas fa-pause play-button-icon')
  playButton.setAttribute('class' , 'playing')
}

function hideAllOtherImages(){
  for(let i = 0; i < images.length; i++){
    images[i].setAttribute("class", "hide-image")
    images[index].classList.add('show-image')
  }
}

function stopAllSound(){
  for(let i = 0; i < sounds.length; i++){
    stopSound(sounds[i])
  }
}

function setCurrentTimeZero(){
  for(let  i = 0; i < sounds.length; i++){
    sounds[i].currentTime = 0;
  }
}

let width = 0;

function setLoader(){
  width += +`${ 300 / (sounds[index].duration * 1000)}`
  // console.log(index);

  filledLoader.style.width = `${width}px`;
  if(width > 300){
    width = 0;
  }
}

let IntervalFunction;

function startLoading(){
  IntervalFunction  = setInterval(setLoader , 1);
}

console.log(index);

function pauseLoading(){
  console.log(width);
  filledLoader.style.width = `${width}px`;
  clearInterval(IntervalFunction);
}


function backToZero(){
  setTimeout(() => {
    clearInterval(filledLoader);
    width = 0;
  }, sounds[index].duration); 
} 

  

console.log(sounds[index].duration);