let leftButton = document.querySelector('.left-button')
let rightButton = document.querySelector('.right-button')
let images = document.querySelectorAll('.image');


let i = 0;


rightButton.addEventListener('click' , ()=>{
  if(i > 3){
    i = 0;
  }else{
    ++i;
  }

  for( i = 0; i < images.length ; i++){
    images[i].classList.add('active');
  }
})

