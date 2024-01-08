//Initilize the varialbes
const gameContainer = document.querySelector("#game-container");
const tiles = [...document.querySelectorAll(".tile")];

// const boardArr = [
//   ["2", "3", "f", "d"],
//   ["x", "d", "d", "d"],
//   ["f", "d", "g", "sd"],
//   ["v", "x", "z", "7"],
// ];

const boardArr = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

initializeGame();
// utilities functions

//When this function runs:- This function will only run once while starting the Game.
//What this function does:- This function chooses any 2 random tiles from the game And initialize them with the value of '2'
function chooseInitialRandomTiles() {
  let randomNum1 = Math.floor(Math.random() * 4);
  let randomNum2 = Math.floor(Math.random() * 4);
  let randomNum3 = Math.floor(Math.random() * 4);
  let randomNum4 = Math.floor(Math.random() * 4);

  if (randomNum1 == randomNum3 || randomNum2 == randomNum4) {
    console.log("equal");
    return chooseInitialRandomTiles();
  } else {
    boardArr[randomNum1][randomNum2] = 2;
    boardArr[randomNum3][randomNum4] = 2;
  }
}

let toRenderArr = [];

(function renderBoardArr() {
  boardArr.map((row, rowIndex) => {
    row.map((element, colIndex) => {
      toRenderArr.push(boardArr[rowIndex][colIndex]);
    });
  });
})();

tiles.forEach((tile, tileIndex) => {
  tiles[tileIndex].textContent = toRenderArr[tileIndex];
});

function initializeGame() {
  chooseInitialRandomTiles();
}
