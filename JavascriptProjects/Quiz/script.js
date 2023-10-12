const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["java", "c", "Python", "JavaScript"],
    correct: "4",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: "2",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: "1",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    correct: "2",
  },
  {
    question: "When is the birthday of Yash Mittal?",
    options: ["1 Oct", "2 Oct", "1 Aug", "2 Aug"],
    correct: "1",
  },
];

const question = document.querySelector(".Question");
const OptionsArr = [...document.querySelectorAll(".optionContent")];
const submitButton = document.querySelector(".cardV1FooterButton");
const OptionsInputs = [...document.querySelectorAll(".optionInput")];
const themeChangeCheckbox = document.querySelector(".themeChangeCheckbox");
const MainBodyBackground = document.querySelector(".MainBodyBackground");
const cardV1 = document.querySelector(".cardV1");
const CheckboxOuter = document.querySelector(".checkbox-v1-outer");

// console.log(OptionsInputs)

const [option1, option2, option3, option4] = [...OptionsArr];
const [optionInput1, optionInput2, optionInput3, optionInput4] = [
  ...OptionsInputs,
];

themeChangeCheckbox.addEventListener("change", (e) => {
  if (MainBodyBackground.classList.contains("bg-slate-700")) {
    MainBodyBackground.classList.remove("bg-slate-700");
    MainBodyBackground.classList.add("bg-gradient1");
    cardV1.classList.remove("bg-gray-600");
    cardV1.classList.add("bg-white");
    MainBodyBackground.classList.add("text-black");
    MainBodyBackground.classList.remove("text-white");
    CheckboxOuter.style.boxShadow = "rgba(0 , 0 , 0 , 0.4) 0px 48px 100px 0px";
  } else {
    MainBodyBackground.classList.remove("bg-gradient1");
    MainBodyBackground.classList.add("bg-slate-700");
    MainBodyBackground.classList.remove("text-black");
    MainBodyBackground.classList.add("text-white");
    cardV1.classList.remove("bg-white");
    cardV1.classList.add("bg-gray-600");
    CheckboxOuter.style.boxShadow =
      "rgba(255 , 255 , 255 , 0.4) 0px 48px 100px 0px";
  }
});

// console.log(optionInput1.checked);
// console.log(optionInput2);
// console.log(optionInput3);
// console.log(optionInput4);

// console.log(option1)
// console.log(option2)
// console.log(option3)
// console.log(option4.textContent)

let CurrentQuestion = "";
let TotalCorrect = 0;
CurrentQuestion = 0;
RenderData();
OnButton();

// function setOptions() {
//   OptionsArr.map(option => {
//     quizData[CurrentQuestion].options.forEach(option => {
//       option.textContent = option;
//     });
//   } )
// }

function setOptions() {
  quizData[CurrentQuestion].options.forEach((optionData, index) => {
    const optionElement = OptionsArr[index];
    optionElement.textContent = optionData;
  });
}

function validation() {
  return OptionsInputs.some((optionInput) => {
    return optionInput.checked;
  });
}

function OnButton() {
  OptionsInputs.forEach((inputOption) => {
    inputOption.addEventListener("change", (e) => {
      if (!validation()) {
        console.log("not validate");
      } else {
        submitButton.disabled = false;
      }
    });
  });

  calculateResult();
}

function ClearAllOptions(OptionsInputArr) {
  submitButton.disabled = true;
  OptionsInputArr.forEach((optionInput) => {
    optionInput.checked = false;
  });
}

function SetResulttoDOM() {
  OptionsArr.forEach((optionsContentEl) => {
    optionsContentEl.textContent = "";
  });

  OptionsInputs.forEach((optionInputEl) => {
    optionInputEl.classList.add("hidden");
  });

  question.textContent = `Game Finished Your  ${TotalCorrect} Answers Were Correct Among ${quizData.length}`;
  submitButton.textContent = "Restart Game";
  submitButton.disabled = false;
  RestartGame();
}

function RestartGame() {
  submitButton.addEventListener("click", (e) => {
    location.reload();
    // CurrentQuestion = 0;
    // OptionsInputs.forEach((optionInputEl) => {
    //   optionInputEl.classList.remove("hidden");
    // });
    // submitButton.textContent = "Submit";
    // RenderData();
    // OnButton();
  });
}

// console.log(validation());

function RenderData() {
  if (
    CurrentQuestion >= 0 &&
    CurrentQuestion < quizData.length &&
    !isNaN(CurrentQuestion)
  ) {
    question.textContent = quizData[CurrentQuestion].question;
    // console.log("if condition");
    setOptions();
  } else if ((CurrentQuestion = quizData.length)) {
    // CurrentQuestion = 0;
    // RenderData();
    // console.log("else if condition");
    console.log("finished");
    SetResulttoDOM();
  } else {
    // console.log("else condition");
  }
}

function calculateResult() {
  // CurrentQuestion

  OptionsInputs.forEach((optionInput, index) => {
    if (optionInput.checked === true) {
      // console.log(optionInput)
      let selectedradioButton = OptionsInputs.indexOf(optionInput) + 1;
      // console.log(selectedradioButton);
      if (selectedradioButton == quizData[CurrentQuestion].correct) {
        ++TotalCorrect;
        console.log("correct Answer");
      } else {
        console.log("wrong Answer");
      }
    }
  });
}

submitButton.addEventListener("click", function (e) {
  if (!validation()) {
    console.log("not validate condition of validation");
  } else {
    OnButton();
    ++CurrentQuestion;
    ClearAllOptions(OptionsInputs);
    RenderData();
    validation();
    console.log(TotalCorrect);
  }

  // console.log(optionInput1.checked);
});
