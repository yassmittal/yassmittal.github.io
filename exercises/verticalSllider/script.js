let upButton = document.querySelector('.button-up');
let downButton = document.querySelector('.button-down');
let flyingEagleImg = document.querySelector('.flying-eagle-img');
let lonelyCastleImg = document.querySelector('.lonely-castle-img');
// let flyingEagleImg = document.querySelector('.flying-eagle-img');
// let flyingEagleImg = document.querySelector('.flying-eagle-img');
let backgroundColorsEl =  document.querySelectorAll('.left-slider div');

upButton.addEventListener('click' , Upbuttonfunction)

function Upbuttonfunction(){
  flyingEagleImg.classList.add('moveUp');
  lonelyCastleImg.classList.add('moveUp');
  backgroundColorsEl.forEach(item => {
    item.classList.add('moveUP')
  });
  

}