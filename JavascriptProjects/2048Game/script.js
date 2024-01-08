//Initilize the varialbes
const gameContainer = document.querySelector("#game-container");
const tiles = [...document.querySelectorAll(".tile")];

const boardArr = [
  ["", "", "", ""],
  ["", "", "2", ""],
  ["", "", "", ""],
  ["", "", "", "7"],
];

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
