let seats = document.querySelectorAll('.seats .row .seat');
let price = document.querySelector('#price');
let bookedSeatsNo = document.querySelector('.selected-seat-no');
let totalPrice = document.querySelector('.selected-seat-price');

let countOfBookedSeats = 0;
let sumOfPrice = 0;

for(let i = 0; i < seats.length; i++){
  if(!seats[i].classList.contains('occupied'))
  seats[i].addEventListener('click' , (e)=>{
    e.preventDefault;
    seats[i].classList.toggle('selected')

    if(seats[i].classList.contains('selected')){
      ++countOfBookedSeats;
      bookedSeatsNo.textContent = countOfBookedSeats;
      totalPrice.textContent = price.value * countOfBookedSeats;;
    }else{
      --countOfBookedSeats;
      bookedSeatsNo.textContent = countOfBookedSeats;
      totalPrice.textContent = price.value * countOfBookedSeats;;

    }
  })

}

price.addEventListener('input' ,(e)=>{
  e.preventDefault();
  totalPrice.textContent = price.value * countOfBookedSeats;;


})