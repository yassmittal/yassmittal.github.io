const imagesEl = document.querySelectorAll(".image");
console.log(imagesEl)

for(let i = 0; i < imagesEl.length; i++){
  imagesEl[i].addEventListener("click", function(){
    removeActiveClass();
    imagesEl[i].classList.add("active")
  })
}


function removeActiveClass(){
  for(let i = 0; i < imagesEl.length; i++){
    imagesEl[i].classList.remove("active")
  }
}

