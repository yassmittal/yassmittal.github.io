const images = document.querySelectorAll(".image");
const prevButton = document.querySelector(".prev-btn")
const nextButton = document.querySelector(".next-btn")


function removeActiveClass(){
  for( i = 0; i<images.length ; i++){
    images[i].classList.remove("active");
  }
}

let activeIndex = 0;

prevButton.addEventListener('click' , function(){
  if(activeIndex > 0){
    activeIndex--;
    console.log('if ')
  }
  else{
    activeIndex = images.length - 1;
    console.log('else')
  }

  removeActiveClass();
  images[activeIndex].classList.add('active');

})

nextButton.addEventListener('click' , function(){
  if( activeIndex < images.length - 1){
    activeIndex++;
    console.log('if')
  } else{
    activeIndex = 0;
    console.log('else')
  }

  removeActiveClass();
  images[activeIndex].classList.add('active');
})








