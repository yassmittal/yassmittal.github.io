const optionImages = document.querySelectorAll(".option_image");
const container = document.querySelector(".container");
const result = document.querySelector(".result");
const userResultImg = document.querySelector(".user_result img");
const computerImgUrl = document.querySelector(".cpu_result img");

let turns = [
  { turnName: "rock", turnImgUrl: "images/rock.png" },
  { turnName: "paper", turnImgUrl: "images/paper.png" },
  { turnName: "scissors", turnImgUrl: "images/scissors.png" },
];

let userSelection;

const combinations = [
  [{ combination: [0, 1] }, { winner: 1 }], // winner is 1
  [{ combination: [1, 0] }, { winner: 1 }], // winner is 1
  [{ combination: [1, 2] }, { winner: 2 }], // winner is 2
  [{ combination: [2, 1] }, { winner: 2 }], // winner is 2
  [{ combination: [2, 0] }, { winner: 0 }], // winner is 0
  [{ combination: [0, 2] }, { winner: 0 }], // winner is 0
];

optionImages.forEach((optionImg) => {
  optionImg.addEventListener("click", (e) => {
    e.preventDefault();
    startGame(optionImg);

    setTimeout(() => {
      endGame(optionImg);
    }, 300);
  });
});

function endGame(optionImg) {
  checkWinner();
  optionImg.classList.remove("active");
  container.classList.remove("start");
}

function checkWinner() {
  let computerSelection = Math.floor(Math.random() * 3);

  userResultImg.src = turns[userSelection].turnImgUrl;
  computerImgUrl.src = turns[computerSelection].turnImgUrl;

  if (computerSelection === userSelection) {
    result.textContent = "Game Draws";
    return;
  }

  let resultArr = [computerSelection, userSelection];
  let WinnerCombination = combinations.find((item) => {
    return JSON.stringify(item[0].combination) == JSON.stringify(resultArr);
  });

  let winnerIndex = WinnerCombination[1].winner;

  let resultSelection = resultArr.find((el) => el === winnerIndex);

  if (resultArr[0] === winnerIndex) {
    result.textContent = "computer wins";
  } else if (resultArr[1] === winnerIndex) {
    result.textContent = "you wins";
  } else {
  }
}

function startGame(optionImg) {
  optionImg.classList.add("active");
  container.classList.add("start");
  result.textContent = "wait...";

  userSelection = [...optionImages].findIndex((option) =>
    option.classList.contains("active")
  );
}
