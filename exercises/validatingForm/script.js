
const form = document.querySelector("#form");
// const firstName = document.querySelector("#first-name")
// const lastName = document.querySelector("#last-name")
// const email = document.querySelector("#email")
// const password = document.querySelector("#password")
const InputFirstName = document.querySelector("#first-name")
const firstName_err = document.querySelector(".firstName_err_msg")
const lastName_err = document.querySelector(".lastName_err_msg")
const email_err = document.querySelector(".email_err_msg")
const password_err = document.querySelector(".password_err_msg")
const bio_err = document.querySelector(".bio_err_msg")
const num_err = document.querySelector(".num_err_msg");



const regex = /\S+@\S+\.\S+/;
function email_validation(){
  return regex.test(email.value)
}
form.addEventListener("submit", function(e){
e.preventDefault()
  const form_data = new FormData(form)
  const entries = Object.fromEntries(form_data);
  const {firstName, lastName, email, password, bio, phoneNumber} = entries;
  console.log(firstName)
  firstName === "" ? firstName_err.innerText = "Please Enter First Name": firstName_err.innerText = "";
  lastName === "" ? lastName_err.innerText = "Please Enter Last Name"  : lastName_err.innerText = "";
  email_validation() === false ? email_err.innerText = "Please Enter valid Email" : email_err.innerText = "";
  password === "" ? password_err.innerText = "Please Enter valid Password" : password_err.innerText = "";
  phoneNumber === "" ? num_err.innerText = "Please enter valid Phone number" : num_err.innerText = "";
  bio === "" ? bio_err.innerText = "Please Enter bio" : bio_err.innerText = ""; 
})



