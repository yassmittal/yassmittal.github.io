const boxes =  document.querySelectorAll('.card');

window.addEventListener('scroll' ,showcard)
showcard();
function showcard() {
  const triggerbottom = (window.innerHeight / 5) * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < triggerbottom){
      box.classList.add('show')
    } else{
      box.classList.remove('show')
    }
    console.log(boxTop)
  });

  console.log(triggerbottom)
}