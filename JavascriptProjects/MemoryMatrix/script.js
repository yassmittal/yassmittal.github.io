const allDOMTiles = [...document.querySelectorAll(".game-container > div")];
const TimerWrapper = document.querySelector(".TimerWrapper");
const TimerContent = TimerWrapper.querySelector(".TimerContent");
const result = document.querySelector(".result");

const StartBtn = document.querySelector(".start-btn");
const allJSTiles = [];
let randomNumArr = [];
let isPlaying = false;
let clickedTiles = 0;

function generateRandomUniqueNumsArr(num) {
  let randomNum;

  function generateRandomNum() {
    randomNum = Math.floor(Math.random() * 16);
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
  let randomNumArr = generateRandomUniqueNumsArr(8);
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
  isPlaying = true;
  showTimer();
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
      let arrToRender = generateRandomUniqueNumsArr(8);
      renderDOMTiles(arrToRender);
      runClearDomTimer(arrToRender);
    }

    --pastTime;
  }, 1000);
}
StartBtn.addEventListener("click", (e) => {
  e.preventDefault;
  startGame();
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
    if (clickedTiles >= 8) {
      showResult();
      isPlaying = false;
      return;
    }
  });
});

function runClearDomTimer(arrToRender) {
  setTimeout(() => {
    clearDomTiles(arrToRender);
  }, 3000);
}

function clearDomTiles(tilePositionArr) {
  tilePositionArr.forEach((tileIndex) => {
    allDOMTiles[tileIndex].classList.remove("rotated");
  });
}

function showResult() {
  result.textContent = "You finished the Game";
}
