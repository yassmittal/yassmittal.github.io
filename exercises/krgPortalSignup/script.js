// const submit_btn = document.querySelector("#submit-btn");
// const first_name = document.querySelector("#first-name");
// const last_name = document.querySelector("#last-name");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const mobile_no = document.querySelector("#mobile-no");
// const bio = document.querySelector("#bio");

// submit_btn.addEventListener("click", function submit_form(event) {
//   // e.stopPropagation();
//   event.preventDefault();
//   console.log("click");
//   const first_name_value = first_name.value;
//   const last_name_value = last_name.value;
//   const password_value = password.value;
//   const mobile_no_value = mobile_no.value;
//   const email_value = email.value;
//   const bio_value = bio.value;
//   console.log("first name::", first_name_value);
//   console.log("last name::", last_name_value);
//   console.log("email::", email_value);
//   console.log("password::", password_value);
//   console.log("Bio::", bio_value);
//   console.log("mobile no::", mobile_no_value);
// });


const signUpBtn = document.querySelector('#signup');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

signUpBtn.addEventListener('click' , function doSignUp(event){
  event.preventDefault();
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log( 'Full Name::' ,  fullNameValue)
  console.log('Email::' ,  emailValue)
  console.log( 'Password::' ,  passwordValue)
});
