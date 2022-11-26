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

show_players()
submit_btn.addEventListener("click", function(e){
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
console.log(players)
update_localStorage();
show_players();
}


// function increaseFive(id){
//   const updated_players = players.map(
//     function(player){
//       if(player.id === id){
//         player.score = player.score + 5;
//       }
//       console.log(id);
//     }
//   ); 
//   players = updated_players;
//   update_localStorage();
//   show_players();
// }

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
