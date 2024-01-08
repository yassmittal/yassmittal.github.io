//Initilize the varialbes
const gameContainer = document.querySelector("#game-container");
const tiles = [...document.querySelectorAll(".tile")];
const body = document.querySelector("body");
let boardArr = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

function convertVerticalToHorintalArr(arr) {
  const numRows = arr.length;
  const numCols = arr[0].length;

  const resultArr = [];

  for (let colIndex = 0; colIndex < numCols; colIndex++) {
    const newRow = [];
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      newRow.push(arr[rowIndex][colIndex]);
    }
    resultArr.push(newRow);
  }

  return resultArr;
}

let toRenderArr = [];
initializeGame();
renderBoardArr();
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

  tiles.forEach((tile, tileIndex) => {
    tiles[tileIndex].textContent = toRenderArr[tileIndex];
  });
}

function change4By4ArrElToLineArrEl(arr, indexArr) {
  let number = indexArr[0] * arr.length + indexArr[1];
  return number;
}

function moveElToRightEnd(arr) {
  let emptyElements = arr.filter((element) => element === "");
  let filledElements = arr.filter((element) => element !== "");
  let resultElements = emptyElements.concat(filledElements);
  return resultElements;
}

function moveElToLeftEnd(arr) {
  let emptyElements = arr.filter((element) => element === "");
  let filledElements = arr.filter((element) => element !== "");
  let resultElements = filledElements.concat(emptyElements);
  return resultElements;
}

function addEqualAdjacentNumber(arr) {
  let newArr = [...arr];
  newArr.forEach((element, index) => {
    if (element != "" && element != null && element == newArr[index - 1]) {
      newArr[index] = +element + +newArr[index - 1];
      newArr[index - 1] = "";
    }
  });

  return newArr;
}

function moveAndAddArrayToRight(arr) {
  let resultArr = [];

  arr.forEach((row) => {
    let resultRow = moveElToRightEnd(row);
    resultRow = addEqualAdjacentNumber(resultRow);
    resultRow = moveElToRightEnd(resultRow);
    resultArr.push(resultRow);
  });
  // console.log(newBoardArr);
  return resultArr;
}

function moveAndAddArrayToLeft(arr) {
  let resultArr = [];
  arr.forEach((row) => {
    let resultRow = moveElToLeftEnd(row);
    resultRow = addEqualAdjacentNumber(resultRow);
    resultRow = moveElToLeftEnd(resultRow);
    resultArr.push(resultRow);
  });
  // console.log(newBoardArr);
  return resultArr;
}

function moveAndAddArrayDownward(arr) {
  let convertedArr = convertVerticalToHorintalArr(arr);
  let addedArr = moveAndAddArrayToRight(convertedArr);
  let finalResult = convertVerticalToHorintalArr(addedArr);
  return finalResult;
}

function moveAndAddArrayUpward(arr) {
  let convertedArr = convertVerticalToHorintalArr(arr);
  let addedArr = moveAndAddArrayToLeft(convertedArr);
  let finalResult = convertVerticalToHorintalArr(addedArr);
  return finalResult;
}

function initializeGame() {
  chooseInitialRandomTiles();
}

function onPressingRightKey() {
  boardArr = moveAndAddArrayToRight(boardArr);
}

function onPressingLeftKey() {
  boardArr = moveAndAddArrayToLeft(boardArr);
}

function onPressingUpKey() {
  boardArr = moveAndAddArrayUpward(boardArr);
}

function onPressingDownKey() {
  boardArr = moveAndAddArrayDownward(boardArr);
}

function renderRandomNumber(arr) {
  let emptyElementIndexes = [];
  let resultArr = [...arr];
  resultArr.map((row, rowIndex) => {
    row.map((element, colIndex) => {
      if (boardArr[rowIndex][colIndex] == "") {
        emptyElementIndexes.push([rowIndex, colIndex]);
      }
    });
  });

  let randomIndex = Math.floor(Math.random() * +emptyElementIndexes.length);

  let randomIndexes = emptyElementIndexes[randomIndex];
  resultArr[randomIndexes[0]][randomIndexes[1]] = 2;

  runTransition(tiles[change4By4ArrElToLineArrEl(resultArr, randomIndexes)]);

  setTimeout(() => {
    removeTransition(
      tiles[change4By4ArrElToLineArrEl(resultArr, randomIndexes)]
    );
  }, 500);
}

//Event listeners here
document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key === "ArrowRight") {
    onPressingRightKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  } else if (e.key === "ArrowLeft") {
    onPressingLeftKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  } else if (e.key === "ArrowUp") {
    onPressingUpKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  } else if (e.key === "ArrowDown") {
    onPressingDownKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  } else {
    return;
  }
});

console.log(body);
body.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  },
  false
);

body.addEventListener(
  "touchend",
  function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
  },
  false
);

function handleGesture() {
  if (touchendX < touchstartX) {
    console.log("Swiped Left");
    onPressingLeftKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  }

  if (touchendX > touchstartX) {
    console.log("Swiped Right");
    onPressingRightKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  }

  if (touchendY < touchstartY) {
    console.log("Swiped Up");
    onPressingUpKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  }

  if (touchendY > touchstartY) {
    console.log("Swiped Down");
    onPressingDownKey();
    renderRandomNumber(boardArr);
    renderBoardArr();
  }

  if (touchendY === touchstartY) {
    console.log("Tap");
  }
}

//function for transition

function runTransition(element) {
  element.classList.add("bounced");
}

function removeTransition(element) {
  element.classList.remove("bounced");
}
