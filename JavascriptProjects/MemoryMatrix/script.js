const allDOMTiles = [...document.querySelectorAll(".game-container > div")];
const TimerWrapper = document.querySelector(".TimerWrapper");
const TimerContent = TimerWrapper.querySelector(".TimerContent");
const result = document.querySelector(".result");
const levelEl = document.querySelector('[data-id="current-level"]');
const startBtn = document.querySelector('[data-id="start-btn"]');
const prevLevelBtn = document.querySelector('[data-id="previous-level"]');
const nextLevelBtn = document.querySelector('[data-id="next-level"]');
const hiddenTilesNumEl = document.querySelector(
  '[data-id="hidden-tiles-number"]'
);
let modalContent = document.querySelector(".modal-content");
const questionBtn = document.querySelector(".question-btn");
const modalWrapper = document.querySelector(".modalWrapper");
const currentScoreEl = document.querySelector('[data-id="current-score"]');
const totalScoreEl = document.querySelector('[data-id="total-score"]');
const resetGameBtn = document.querySelector('[data-id="reset-game"]');

let currentLevel = 1;
let totalTiles = 16;
let NumOfTiles = currentLevel + 3;
let allJSTiles = [];
let randomNumArr = [];
let clickedItemArr = [];
let isPlaying = false;
let clickedTiles = 0;
let arrToRender;
let currentScore = 0;
let totalScore = localStorage.getItem("totalScore")
  ? JSON.parse(localStorage.getItem("totalScore"))
  : 0;
renderCurrentState();

function calculateLevelAndtiles() {
  NumOfTiles = currentLevel + 3;
}

function generateRandomUniqueNumsArr(num) {
  let randomNum;

  function generateRandomNum() {
    randomNum = Math.floor(Math.random() * totalTiles);
    if (randomNumArr.includes(randomNum)) {
      generateRandomNum();
    }
    return randomNum;
  }
  for (let i = 0; i < num; i++) {
    randomNumArr.push(generateRandomNum());
  }
  return randomNumArr;
}

function resetVariables() {
  allJSTiles = [];
  randomNumArr = [];
  clickedTiles = 0;
  clearDomTiles();
  arrToRender = [];
  currentScore = 0;
  renderCurrentLevelScore();
}

function showHiddenTiles() {
  let randomNumArr = generateRandomUniqueNumsArr(NumOfTiles);
  renderDOMTiles(randomNumArr);
}

function renderDOMTiles(tilePositionArr) {
  allDOMTiles.forEach((domTile, index) => {
    domTile.id = index;
  });

  tilePositionArr.forEach((tileIndex) => {
    allDOMTiles[tileIndex].classList.add("rotated");
  });
}

function startGame() {
  resetVariables();
  showTimer();
  result.textContent = "";
  isPlaying = false;
}

function showTimer() {
  TimerWrapper.classList.remove("hide");
  let pastTime = 2;
  TimerContent.textContent = 3;
  let timerInterval = setInterval(() => {
    TimerContent.textContent = pastTime;
    if (pastTime == 0) {
      TimerWrapper.classList.add("hide");
      clearInterval(timerInterval);
      arrToRender = generateRandomUniqueNumsArr(NumOfTiles);
      renderDOMTiles(arrToRender);
      startBtn.textContent = "Restart The Game";
      runClearDomTimer();
    }

    --pastTime;
  }, 1000);
}
startBtn.addEventListener("click", (e) => {
  e.preventDefault;
  startGame();
});

prevLevelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  goToPrevLevel();
});

nextLevelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  goToNextLevel();
});

questionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalWrapper.classList.add("visible");
  modalContent.classList.add("visible");
});

modalContent.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});
modalWrapper.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  modalWrapper.classList.remove("visible");
  modalContent.classList.remove("visible");
});
allDOMTiles.forEach((DOMTile) => {
  DOMTile.addEventListener("click", (e) => {
    let isItemAlreadyClicked = clickedItemArr.find((item) => {
      return item == e.target.id;
    });

    if (isItemAlreadyClicked != null) return;

    if (isPlaying == false) return;
    ++clickedTiles;
    let clickedElId = e.target.id;
    clickedItemArr.push(clickedElId);

    let isRightItemClicked = randomNumArr.find((el) => {
      return el == clickedElId;
    });

    if (isRightItemClicked == null) {
      DOMTile.classList.add("wrongTile");
    } else {
      DOMTile.classList.add("rotated");
      currentScore = currentScore + 10;
      totalScore = totalScore + 10;
      renderCurrentLevelScore();
      renderHighLevelScore();
    }
    if (clickedTiles >= NumOfTiles) {
      showResult();
      isPlaying = false;
      return;
    }
  });
});

resetGameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  totalScore = 0;
  renderHighLevelScore();
});

function runClearDomTimer() {
  setTimeout(() => {
    clearDomTiles();
    isPlaying = true;
  }, 3000);
}

function clearDomTiles() {
  allDOMTiles.forEach((tile) => {
    tile.classList.remove("rotated");
    tile.classList.remove("wrongTile");
  });
}

function showResult() {
  result.textContent = "You finished the Game";
}

function renderCurrentState() {
  calculateLevelAndtiles();
  levelEl.textContent = currentLevel;
  hiddenTilesNumEl.textContent = NumOfTiles;
  currentScoreEl.textContent = currentScore;
  totalScoreEl.textContent = totalScore;
}

function renderCurrentLevelScore() {
  currentScoreEl.textContent = currentScore;
}

function renderHighLevelScore() {
  totalScoreEl.textContent = totalScore;
  localStorage.setItem("totalScore", JSON.stringify(totalScore));
}

function goToNextLevel() {
  if (currentLevel >= 8) return;
  ++currentLevel;
  renderCurrentState();
  clearDomTiles();
  resetVariables();
  result.textContent = "";
  isPlaying = false;
  startBtn.textContent = "Start Game";
}
function goToPrevLevel() {
  if (currentLevel <= 1) return;
  --currentLevel;
  renderCurrentState();
  clearDomTiles();
  resetVariables();
  result.textContent = "";
  isPlaying = false;
  startBtn.textContent = "Start Game";
}
