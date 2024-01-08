//Initilize the varialbes
const gameContainer = document.querySelector("#game-container");
const tiles = [...document.querySelectorAll(".tile")];

let boardArr = [
  ["2", "", "", ""],
  ["", "4", "16", ""],
  ["", "", "8", ""],
  ["4", "", "32", ""],
];

let toRenderArr = [];
renderBoardArr();
// initializeGame();
// utilities functions

//When this function runs:- This function will only run once while starting the Game.
//What this function does:- This function chooses any 2 random tiles from the game And initialize them with the value of '2'
function chooseInitialRandomTiles() {
  let randomNum1 = Math.floor(Math.random() * 4);
  let randomNum2 = Math.floor(Math.random() * 4);
  let randomNum3 = Math.floor(Math.random() * 4);
  let randomNum4 = Math.floor(Math.random() * 4);

  if (randomNum1 == randomNum3 || randomNum2 == randomNum4) {
    return chooseInitialRandomTiles();
  } else {
    boardArr[randomNum1][randomNum2] = 2;
    boardArr[randomNum3][randomNum4] = 2;
  }
}

//When this function runs: This function will be called when you want to render the data on the DOM according to the boardArr.
//What this function does: This function renders the whole boardArr array into the actual DOM
function renderBoardArr() {
  toRenderArr = [];
  boardArr.map((row, rowIndex) => {
    row.map((element, colIndex) => {
      toRenderArr.push(boardArr[rowIndex][colIndex]);
    });
  });

  console.log(toRenderArr);

  tiles.forEach((tile, tileIndex) => {
    tiles[tileIndex].textContent = toRenderArr[tileIndex];
  });
}

function moveElToRightEnd(arr) {
  let emptyElements = arr.filter((element) => element === "");
  let filledElements = arr.filter((element) => element !== "");
  let resultElements = emptyElements.concat(filledElements);
  return resultElements;
}

// console.log(moveElToRightEnd(["3", "2", "", ""]));
// console.log(moveElToRightEnd(["", "2", "", ""]));
// console.log(moveElToRightEnd(["3", "2", "3", "6"]));
// console.log(moveElToRightEnd(["3", "2", "3", ""]));
// console.log(moveElToRightEnd(["", "2", "3", ""]));
// console.log(moveElToRightEnd(["", "2", "3", "5"]));
function moveElementsToRight() {
  let newBoardArr = [];

  boardArr.forEach((row) => {
    moveElToRightEnd(row);
    newBoardArr.push(moveElToRightEnd(row));
  });
  boardArr = newBoardArr;
}

function initializeGame() {
  chooseInitialRandomTiles();
}

function onPressingRightKey() {
  moveElementsToRight();
  console.log("right arrow key pressed");
}

function onPressingLeftKey() {
  console.log("left arrow key pressed");
}

function onPressingUpKey() {
  console.log("Up arrow key pressed");
}

function onPressingDownKey() {
  console.log("Down arrow key pressed");
}

//Event listeners here
document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "ArrowRight") {
    onPressingRightKey();
  } else if (e.key === "ArrowLeft") {
    onPressingLeftKey();
  } else if (e.key === "ArrowUp") {
    onPressingUpKey();
  } else if (e.key === "ArrowDown") {
    onPressingDownKey();
  }
  console.log(boardArr);
  renderBoardArr();
});
