const images = document.querySelectorAll(".image");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let timer = setInterval(seeNextImage, 2000);

function removeActiveClass(){
  for( i = 0; i<images.length ; i++){
    images[i].classList.remove("active");
  }
}

let activeIndex = 0;

prevButton.addEventListener('click' , function(){
  if(activeIndex > 0){
    activeIndex--;
  }
  else{
    activeIndex = images.length - 1;
  }
  removeActiveClass();
  images[activeIndex].classList.add('active');
  clearInterval(timer)
  timer = setInterval(seeNextImage, 2000)
})

nextButton.addEventListener('click' , seeNextImage )

function seeNextImage(){
  if( activeIndex < images.length - 1){
    activeIndex++;
  } else{
    activeIndex = 0;
  }

  clearInterval(timer)
  timer = setInterval(seeNextImage, 2000);
  removeActiveClass();
  images[activeIndex].classList.add('active');
}


