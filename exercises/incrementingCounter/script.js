const counters = document.querySelectorAll(".counter");


for(let i=0; i<counters.length; i++){

function updateCounter (){
let counterCurrent_value = parseInt(counters[i].innerText)
let target = counters[i].getAttribute('data-target');
target = parseInt(target)
let increment = target / 300
if(counterCurrent_value <= target){
counters[i].innerText = `${Math.ceil(counterCurrent_value + increment)}`
setTimeout(updateCounter, parseInt(Math.random() * 500))
}
else {
  counters[i].innerText= target
}

}
 updateCounter() 
}
