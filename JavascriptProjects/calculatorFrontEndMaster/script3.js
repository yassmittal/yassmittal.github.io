let buttons = document.querySelectorAll(".calc-button");
let screen = document.querySelector(".screen");
let currentScreenValue = screen.textContent;
let buffer = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isNaN(parseInt(button.textContent))) {
      handleSymbol(button.textContent);
    } else {
      handleNumber(button.textContent);
    }

    screen.textContent = currentScreenValue;
    console.log(buffer);
  });
});

function handleSymbol(symbol) {
  if (buffer === 0) return;

  buffer = currentScreenValue;

  currentScreenValue = 0;



  console.log("not returned");
}

function handleNumber(number) {
  if (currentScreenValue === "0") {
    currentScreenValue = number;
  } else {
    currentScreenValue += number;
  }
}
