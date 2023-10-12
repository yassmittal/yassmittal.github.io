let hand = [...document.querySelectorAll('.hand')];
console.log(hand);

const [hourHand , minuteHand , secondHand ] = hand;

console.log(hourHand);
console.log(minuteHand);
console.log(secondHand);



function setClock(){
  const currentDate = new Date();
  let secondsPassedRatio = currentDate.getSeconds() / 60;
  let minutesPassedRatio =  (secondsPassedRatio + currentDate.getMinutes()) / 60;
  let hoursPassedRatio = (minutesPassedRatio + currentDate.getHours()) / 12;
  
  hourHand.style.setProperty('--rotation' , hoursPassedRatio * 360);
  secondHand.style.setProperty('--rotation' , secondsPassedRatio * 360);
  minuteHand.style.setProperty('--rotation' , minutesPassedRatio * 360);
  
}

setInterval(setClock, 1);

setClock();