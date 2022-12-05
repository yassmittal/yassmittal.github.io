const formEl = document.querySelector("#form");
const submit_btn = document.querySelector(".submit_btn");
const leaderboard_tbd = document.querySelector("#leaderboard_tbd");
const firstNameErr = document.querySelector('.first-name-error');
const lastNameErr = document.querySelector('.last-name-error');
const countryErr = document.querySelector('.country-error');
const scoreErr = document.querySelector('.score-error');

let players = [];
 
class Player {
 constructor(firstName, lastName, score, country){
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
  this.country = country;
  this.id = new Date().getTime();
 }
}

try {
 let players_arr = localStorage.getItem("players");
 if(players_arr){
  players = JSON.parse(players_arr)
 }
} catch (error) {
  players = []
}

show_players()
formEl.addEventListener("submit", function(e){
 e.preventDefault();
  validate();

  if(validate() === true){
    const formdata = new FormData(formEl)
    const entries = Object.fromEntries(formdata);
    const {firstName, lastName, score, country} = entries;
    const player = new Player(firstName, lastName, score, country)
    players.push(player)
    console.log(players)
    show_players();
    update_localStorage()
  }else{
    validate()
  }
})

function show_players(){
  leaderboard_tbd.innerText = "";
  players.forEach(player => {
    if(player){
    const {firstName, lastName, country, score, id} = player
    const fullName = `${firstName} ${lastName}`
    const rowEl = document.createElement("tr");
    rowEl.innerHTML = `<td>${fullName}</td><td>${country}</td><td>${score}</td><td><i class="fas fa-trash score" onclick="delete_player(${id})"></i></td><td class="increase-five"><span onclick="increaseFive(${id})">+5</span></td><td class="decrease-five"><span onclick="decreaseFive(${id})">-5</span></td>` 
    leaderboard_tbd.appendChild(rowEl)
    }
    })
}

function update_localStorage(){
localStorage.setItem("players", JSON.stringify(players))
}

function delete_player(id){
console.log('called' , id);
const updated_players = players.filter(player => {
  if(player){
   return player.id !== id; // just added return here..
  }
});
players = updated_players
update_localStorage();
show_players();
}

function increaseFive(id){
 
   const player = findPlayer(id);
   if(player){
    player.score = +player.score + 5;
   }

  update_localStorage();
  show_players();
}

function decreaseFive(id){
  const player = findPlayer(id);
  if(player){
    player.score = +player.score - 5;
  } 
  if(player.score < 0){
    player.score = 0;
  }
  update_localStorage();
  show_players();
}

 function findPlayer(id){
  return players.find(player => 
    {
      if(player){
        return player.id === id;
      }
    }
    );
}


// ***********adding Validation of Form Below***********

function validate(){
  let result = [];
  const Formdata = new FormData(formEl);
  const entries  = Object.fromEntries(Formdata);
  const{firstName , lastName, country , score} = entries;
 
  function doBorderRedOfPrevSib(errorElement){
    errorElement.previousElementSibling.style.border = '2px solid red';
  }
 
  function removeBorderOfPrevSib(errorElement){
    errorElement.previousElementSibling.style.border = '2px solid green';
  }
 
  if(firstName.trim() === ''){
    firstNameErr.style.opacity = '1';
    doBorderRedOfPrevSib(firstNameErr);
     result.push(false)
    } else{
     firstNameErr.style.opacity = '0';
     removeBorderOfPrevSib(firstNameErr);
     result.push(true)
  }
 
  if(lastName.trim() === ''){
    lastNameErr.style.opacity = '1';
    doBorderRedOfPrevSib(lastNameErr);
    result.push(false)
  } else{
    lastNameErr.style.opacity = '0';
    removeBorderOfPrevSib(lastNameErr);
    result.push(true)
  }
 
  if(country.trim() === ''){
    countryErr.style.opacity  = '1';
    doBorderRedOfPrevSib(countryErr);
    result.push(false)
   } else{
    countryErr.style.opacity = '0'
    removeBorderOfPrevSib(countryErr);
    result.push(true)
  }
 
  if(score.trim < 0 || score.trim() === ''){
    scoreErr.style.opacity = '1';
    doBorderRedOfPrevSib(scoreErr);
    result.push(false)
  } else{
    scoreErr.style.opacity = '0';
    removeBorderOfPrevSib(scoreErr);
    result.push(true)
  }

  if(result.includes(false)){
    return false;
  } else{
    return true
  }
  
 }
