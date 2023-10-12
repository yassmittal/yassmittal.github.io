const AllAlfabetsAndDigits = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "@",
  "#",
  "!",
  "%",
  "$",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "]",
  "}",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

let generatePasswordBtn = document.querySelector(".generatePasswordBtn");
const copyBtn = document.querySelector(".copyBtn");
const resultInput = document.querySelector(".GeneratedPasswordInput");

let randomPassword = Math.random();

let GeneratedPassword = "";
const GeneratePassword = (arr) => {
  for (let i = 0; i < 8; i++) {
    let randomWord =
      AllAlfabetsAndDigits[
        parseInt(Math.random() * AllAlfabetsAndDigits.length)
      ];
    GeneratedPassword = GeneratedPassword + randomWord;
  }
  console.log(GeneratedPassword);
};

resultInput.value = GeneratedPassword;

generatePasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resultInput.value = "";
  GeneratedPassword = "";
  GeneratePassword();
  resultInput.value = GeneratedPassword;
});

copyBtn.addEventListener("click", (e) => {
  if (resultInput.value == null || resultInput.value == '') {
    alert("Please Generate a Password");
  } else {
    resultInput.select();
    navigator.clipboard.writeText(resultInput.value);
    alert("Text " + resultInput.value + " Copied");
  }
});
