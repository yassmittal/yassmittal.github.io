let buffer = "0";
let operator = null;
let result = null;

const screen = document.querySelector(".screen");
const calcButtons = document.querySelectorAll(".calc-button");

calcButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isNaN(parseInt(button.textContent))) {
      handleNumber(button.textContent);
    } else {
      handleSymbol(button.textContent);
    }
    screen.textContent = buffer;
  });
});

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(symbol) {
  if (symbol === "C") {
    buffer = "0";
    operator = null;
    result = null;
  } else if (symbol === "=") {
    handleEquals(symbol);
  } else if (symbol === "←") {
    console.log("delete the last number");
  } else {
    handleCalculations(symbol);
  }
}

function handleCalculations(symbol) {
  // console.log(operator)
  if (operator && result !== null) {
    const operand = parseFloat(buffer);

    if (operator === "+") {
      result += parseInt(buffer);
    } else if (operator === "×") {
      result *= parseInt(buffer);
    } else if (operator === "÷") {
      result /= parseInt(buffer);
    } else if (operator === "-") {
      result -= parseInt(buffer);
    }
  } else {
    operator = symbol;
    result = parseInt(buffer);
  }

  buffer = "0";
  console.log(result);

  // operator = symbol;
  // result = parseInt(buffer);
}

function handleEquals(symbol) {
  handleCalculations(symbol);
  console.log(result);
  screen.textContent = result;

  buffer = "0";
  operator = null;
  result = null;
}
