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

let currentLevel = 1;
let totalTiles = 16;
let NumOfTiles = currentLevel + 3;
let allJSTiles = [];
let randomNumArr = [];
let isPlaying = false;
let clickedTiles = 0;
let arrToRender;
renderCurrentLevel();

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
  allJSTiles = [];
  randomNumArr = [];
  clickedTiles = 0;
  clearDomTiles();
  arrToRender = [];
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
    if (isPlaying == false) return;

    ++clickedTiles;
    let clickedElId = e.target.id;

    let isRightItemClicked = randomNumArr.find((el) => {
      return el == clickedElId;
    });

    if (isRightItemClicked == null) {
      DOMTile.classList.add("wrongTile");
    } else {
      DOMTile.classList.add("rotated");
    }
    if (clickedTiles >= NumOfTiles) {
      showResult();
      isPlaying = false;
      return;
    }
  });
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

function renderCurrentLevel() {
  calculateLevelAndtiles();
  levelEl.textContent = currentLevel;
  hiddenTilesNumEl.textContent = NumOfTiles;
}

function goToNextLevel() {
  ++currentLevel;
  renderCurrentLevel();
  clearDomTiles();
}
function goToPrevLevel() {
  --currentLevel;
  renderCurrentLevel();
  clearDomTiles();
}
