const board = document.querySelector("#board");

const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
const moveSound = new Audio(".move.mp3");
const musicSound = new Audio(".music.mp3");

const position = { x: 12, y: 13 };

const TailPositions = [];
let numberOfTails = 0;

let isGameRunning = false;
let score = 0;

let head = document.createElement("div");
head.classList.add("head");
head.style.gridColumnStart = position.x;
head.style.gridRowStart = position.y;
board.replaceChildren(head);

let food = document.createElement("div");
food.classList.add("food");
food.style.gridColumnStart = 5;
food.style.gridRowStart = 12;
board.appendChild(food);

let curentDirection = "up";
let snakeInterval;

function GameStart() {
  if (isGameRunning) return;
  snakeInterval = setInterval(snakeStart, 400);
  isGameRunning = true;
}

function addNewTail() {
  if (
    head.style.gridColumnStart === food.style.gridColumnStart &&
    head.style.gridRowStart === food.style.gridRowStart
  ) {
    // console.log("add new tail");
    let snake = document.createElement("div");
    snake.classList.add("snake");
    setPositionOfTail(snake);
    board.appendChild(snake);
  }
}

function resetFood() {
  food.style.gridColumnStart = Math.floor(Math.random() * 19);
  food.style.gridRowStart = Math.floor(Math.random() * 19);
}

function setPositionOfTail(snake) {
  console.log(TailPositions);

  resetFood();
  if (curentDirection === "up") {
    snake.style.gridRowStart = position.y + 1;
    snake.style.gridColumnStart = position.x;
  } else if (curentDirection === "down") {
    snake.style.gridRowStart = position.y - 1;
    snake.style.gridColumnStart = position.x;
  } else if (curentDirection === "left") {
    snake.style.gridColumnStart = position.x + 1;
    snake.style.gridRowStart = position.y;
  } else if (curentDirection === "right") {
    snake.style.gridColumnStart = position.x - 1;
    snake.style.gridRowStart = position.y;
  }

  TailPositions[numberOfTails] = {
    x: snake.style.gridRowStart,
    y: snake.style.gridColumnStart,
  };

  numberOfTails = numberOfTails + 1;
  console.log(numberOfTails);
}

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    // left arrow is pressed
    case 37:
      GameStart();
      --position.x;
      curentDirection = "left";
      setCurrentPosition();
      break;

    // up arrow is pressed
    case 38:
      GameStart();
      curentDirection = "up";
      --position.y;
      setCurrentPosition();
      break;

    // right arrow is pressed
    case 39:
      GameStart();
      curentDirection = "right";
      ++position.x;
      setCurrentPosition();
      break;

    // down arrow is pressed
    case 40:
      GameStart();
      curentDirection = "down";
      ++position.y;
      setCurrentPosition();
      break;

    case 13:
      console.log("only enter key is pressed");
      gameOver();
      break;

    case 17:
      console.log("only ctrl key is pressed");
      GameStart();
      break;

    default:
      break;
  }
});

function snakeStart() {
  if (curentDirection == "up") {
    --position.y;
  } else if (curentDirection == "down") {
    ++position.y;
  } else if (curentDirection == "left") {
    --position.x;
  } else if (curentDirection == "right") {
    ++position.x;
  }

  addNewTail();
  setCurrentPosition();
  checkGamePosition();
}

function checkGamePosition() {
  if (
    position.x <= 0 ||
    position.y <= 0 ||
    position.x >= 19 ||
    position.y >= 19
  ) {
    gameOver();
    return;
  }
}

function setCurrentPosition() {
  head.style.gridColumnStart = position.x;
  head.style.gridRowStart = position.y;
}

function gameOver() {
  resetGame();
}

function resetGame() {
  isGameRunning = false;
  clearInterval(snakeInterval);
  alert("game over");

  position.x = 12;
  position.y = 13;
  setCurrentPosition();
  curentDirection = "up";
  board.replaceChildren(head);
}
