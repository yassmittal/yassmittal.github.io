const inputEl = document.querySelectorAll("input[name=feedback]");
const resultContainer = document.querySelector(".result-container");
const mainBox = document.querySelector(".main-box");

let input_value;
const btn = document.querySelector(".submit-btn button");

btn.addEventListener("click", function(){
  inputEl.forEach(function(yash){
    if(yash.checked){
      input_value = yash.value
      show_feedback_result();
    }
  })
})


function show_feedback_result(){
 mainBox.style.display = "none";
const result = document.createElement("div")
 result.innerHTML = `<h3 class="heart">❤️</h3><h4>Thanku</h4><p>Feedback: ${input_value}</p><p>We'll use your feedback to improve our customer support</p>`
resultContainer.appendChild(result)
}


