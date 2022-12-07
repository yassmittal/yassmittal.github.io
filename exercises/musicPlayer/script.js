let playButton = document.querySelector('.play-button');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button')
let sounds = document.querySelectorAll('.audio audio');
let images = document.querySelectorAll('.images img')

let index = 0;


playButton.addEventListener('click', startOrEndPlay);
nextButton.addEventListener('click' , nextSound)
prevButton.addEventListener('click' , prevSound)

// playButton.addEventListener('click', startOrEndPlay)

function startOrEndPlay(){

  if(playButton.classList.contains('notplaying')){
    playSound(sounds[index])
    playButton.setAttribute('class' , 'playing')
    playButton.firstElementChild.setAttribute('class' , 'fas fa-pause pause-button-icon')
    images[index].classList.add('rotate')

  }else if(playButton.classList.contains('playing')){
    stopSound(sounds[index])
    hideAllOtherImages()
    playButton.setAttribute('class' , 'notplaying')
    images[index].classList.add('show-image')
    images[index].classList.remove('rotate')
    playButton.firstElementChild.setAttribute('class' , 'fas fa-play play-button-icon')
  }

}

function playSound(sound){
  sound.play();
}

function stopSound(sound){
  sound.pause();
}

function nextSound(){
  ++index;
  if(index > sounds.length-1){
    index = 0;
  }
  hideAllOtherImages()
  stopAllSound()
  playSound(sounds[index])
  images[index].classList.add('rotate')
  playButton.firstElementChild.setAttribute('class' , 'fas fa-pause pause-button-icon')
}

function prevSound(){
  --index;
  if(index < 0){
    index = sounds.length - 1;
  }
  hideAllOtherImages()
  stopAllSound()
  playSound(sounds[index]);
  images[index].classList.add('rotate')
  
  // startOrEndPlay()

  playButton.firstElementChild.setAttribute('class' , 'fas fa-play play-button-icon')
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

console.log(images[0])

console.log(images[1])