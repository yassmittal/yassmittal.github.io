const formEl = document.querySelector("#form");
const submit_btn = document.querySelector(".submit_btn");
const leaderboard_tbd = document.querySelector("#leaderboard_tbd");

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

// show_players()
submit_btn.addEventListener("click", function(e){
 e.preventDefault();
  const formdata = new FormData(formEl)
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
    const {firstName, lastName, country, score, id} = player
    const fullName = `${firstName} ${lastName}`
    const rowEl = document.createElement("tr");
    rowEl.innerHTML = `<td>${fullName}</td><td>${country}</td><td>${score}</td><td><i class="fas fa-trash score" onclick="delete_player(${id})"></i></td><td class="increase-five">+5</td><td class="decrease-five">-5</td>` 
    leaderboard_tbd.appendChild(rowEl)
    })
}

function update_localStorage(){
localStorage.setItem("players", JSON.stringify(players));
}

function delete_player(id){
const updated_players = players.filter(player => player.id !== id);
players = updated_players
update_localStorage();
show_players();
}

