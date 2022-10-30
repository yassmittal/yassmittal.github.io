const smallCups = document.querySelectorAll(".small-cup");
const bigCup = document.querySelector(".big-cup");
const remainingWaterQnty = document.querySelector(".remaining-water-qnty");
const filledPrcnt = document.querySelector(".filled-prcnt");
const remained = document.querySelector(".remained")

updateBigCup();

smallCups.forEach(function(cup, index){
  cup.addEventListener("click", function(){
    highlightCup(index)
  })
})


function highlightCup(index){
 smallCups.forEach(function(cup, index2){
 if(index2 <= index){
  cup.classList.add("full")
 } else{
  cup.classList.remove("full") ////////
 }
 });

 updateBigCup();
}


function updateBigCup(){
  const filledSmallCups = document.querySelectorAll('.full'); //error in this line;
  const totalFilledSmallCups = filledSmallCups.length;
  const totalsmallCups = smallCups.length;
  

    if(filledSmallCups.length === 0){
      filledPrcnt.style.visibility = 'hidden';
      filledPrcnt.style.hidden = 0;
    }  else{
      filledPrcnt.style.visibility = 'visible';
      filledPrcnt.style.height = `${(totalFilledSmallCups / totalsmallCups) * 330}px`;
      filledPrcnt.innerText = `${(totalFilledSmallCups /  totalsmallCups) * 100}%`
  }

  if(totalFilledSmallCups === totalsmallCups){
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
  } else{
    remained.style.visibility = 'visible';
    remainingWaterQnty.innerText = `${ 2 - (totalFilledSmallCups * 250) / 1000  }L `;
  }
}
