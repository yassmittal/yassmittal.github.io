let runningTotal = 0;
let buffer = "0";
let previousOperator;

let screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  screen.textContent = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "÷":
    case "×":
    case "-":
    case "+":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") return;

  const intBuffer = parseInt(buffer);

  if ((runningTotal = 0)) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }

  console.log(buffer + " buffer");
  console.log(previousOperator + " previousOperator");
  console.log(runningTotal + " runningTotal");
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer = buffer + numberString;
  }
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
  });
}

init();
