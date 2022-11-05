const slides = document.querySelectorAll(".slide")
const leftArrowBtn = document.querySelector(".left-arrow");
const rightArrowBtn = document.querySelector(".right-arrow");
const body = document.querySelector("body");

let activeIndex = 0;
setBackgroundImage()

leftArrowBtn.addEventListener("click", function(){
  if(activeIndex > 0){
    activeIndex--
  }
  else{
    activeIndex = slides.length-1;
  }
  removeActiveClass();
  slides[activeIndex].classList.add("active");
  setBackgroundImage()
})

rightArrowBtn.addEventListener("click", function(){
  if(activeIndex < slides.length-1){
    activeIndex++
}
  else {
    activeIndex = 0;
  }
  removeActiveClass();
  slides[activeIndex].classList.add("active");
  setBackgroundImage()
})

function removeActiveClass(){
  for(let i = 0; i < slides.length; i++){
    let slide = slides[i];
    slide.classList.remove("active");
  }
}

function setBackgroundImage(){
  body.style.backgroundImage = slides[activeIndex].style.backgroundImage
}

