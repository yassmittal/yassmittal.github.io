let playButton = document.querySelector('.play-button');
let prevButton = document.querySelector('.prev-button');
let sound1 = document.querySelector('.audio audio');
let image = document.querySelector('.image img')

playButton.addEventListener('click', startOrEndPlay)

function startOrEndPlay(){

  if(playButton.classList.contains('notplaying')){
    playSound(sound1)
    playButton.setAttribute('class' , 'playing')
    image.classList.add('rotate')
  }else if(playButton.classList.contains('playing')){
    stopSound(sound1)
    playButton.setAttribute('class' , 'notplaying')
    image.classList.remove('rotate')
  }

}

function playSound(sound){
  sound.play();
}

function stopSound(sound){
  sound.pause();
}
