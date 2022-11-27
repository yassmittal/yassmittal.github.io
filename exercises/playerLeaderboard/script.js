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
  const formdata = new FormData(formEl)
  // console.log(entries)
  const entries = Object.fromEntries(formdata);
  const {firstName, lastName, score, country} = entries;
  const player = new Player(firstName, lastName, score, country)
  players.push(player)
  console.log(players)
  show_players();
  update_localStorage()
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
console.log('called');
const updated_players = players.filter(player => {
  if(player){
    player.id !== id;
  }
});
players = updated_players
update_localStorage();
show_players();
}

function increaseFive(id){
  // const updated_players = players.map(
  //   function(player){
  //     if(player.id === id){
  //       player.score = player.score + 5;
  //     }
  //     console.log(id);
  //   }
  // ); 
   const player = findPlayer(id);
   if(player){
    player.score = +player.score + 5;
   }

  // players = updated_players;
  update_localStorage();
  show_players();
}

function decreaseFive(id){
  // const updated_players = players.map(
  //   function(player){
  //     if(player.id === id){
  //       player.score = player.score - 5;
  //     }
  //     console.log(id);
  //   }
  // ); 
  const player = findPlayer(id);
  if(player){
    player.score = +player.score - 5;
  } 
  if(player.score < 0){
    player.score = 0;
  }
  // players = updated_players;
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


formEl.addEventListener('submit' , (e) => {
 e.preventDefault();
 const Formdata = new FormData(formEl);
 const entries  = Object.fromEntries(Formdata);
 const{firstName , lastName, country , score} = entries;

 function doBorderRedOfPrevSib(errorElement){
   errorElement.previousElementSibling.style.border = '2px solid red';
 }

 function removeBorderOfPrevSib(errorElement){
   errorElement.previousElementSibling.style.border = '2px solid green';
 }

 if(firstName === ''){
   firstNameErr.style.opacity = '1';
   doBorderRedOfPrevSib(firstNameErr);
 } else{
   firstNameErr.style.opacity = '0';
   removeBorderOfPrevSib(firstNameErr);
 }

 if(lastName === ''){
   lastNameErr.style.opacity = '1';
   doBorderRedOfPrevSib(lastNameErr);
 } else{
   lastNameErr.style.opacity = '0';
   removeBorderOfPrevSib(lastNameErr);
 }


 if(country === ''){
   countryErr.style.opacity  = '1';
   doBorderRedOfPrevSib(countryErr);
 } else{
   countryErr.style.opacity = '0'
   removeBorderOfPrevSib(countryErr);
 }

 if(score < 0 || score === ''){
   scoreErr.style.opacity = '1';
   doBorderRedOfPrevSib(scoreErr);
 } else{
   scoreErr.style.opacity = '0';
   removeBorderOfPrevSib(scoreErr);
 }

 // lastName === '' ? lastNameErr.style.opacity ='1' : lastNameErr.style.opacity = '0';
 // country === '' ? countryErr.style.opacity ='1' : countryErr.style.opacity = '0';
 // score < 0 || score == ''? scoreErr.style.opacity ='1' : scoreErr.style.opacity = '0';
 
})
