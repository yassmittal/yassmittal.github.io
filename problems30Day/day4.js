//================================================ Exercises: Level 1--------------------------------------------------------------**************

// *********************************  1...................======================================================================================


// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// let age = prompt('"Enter Your Age"');

// if (age >= 18){
//   alert('You are old enough to drive.')
// } else if (age < 18){
//   alert(`You are left with ${18 - age} years to drive`);
// } else{
//   alert(`${age} is not a correct input`)
// }


// ___________________________________complete question 1 _________________________________________________________________________________________






// ********************************* 2...................======================================================================================

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

// let myAge = 19;
// let yourAge = prompt('Enter your age', '');

// if (yourAge == myAge){
//   console.log('You are same age of me');
// } else if (yourAge > myAge){
//   console.log(`You are ${yourAge - myAge} years older than me`)
// } else if (yourAge < myAge){
//   console.log(`You are ${myAge - yourAge} years younger than me`)
// } else{
//   console.log('Please give the right type of input');
// }

// ___________________________________complete question 2 _________________________________________________________________________________________





// ******************************** 3.......................======================================================================================


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3

// let a = prompt('Write the value of a', '');
// let b = prompt('Write the value of b', '');

// if(a > b){
//   alert('a is greater than b');
// } else{
//   alert('a is less than b');
// }

//  a > b
//  ? alert('a is greater than b')
//  : alert('a is less than b');

//  a = 4;
//  b = 3;
 

// if(a > b){
//   alert('a is greater than b');
// } else{
//   alert('a is less than b');
// }


// ___________________________________complete question 3 _________________________________________________________________________________________








// ******************************** 4.......................======================================================================================

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.


// let number = prompt('Enter a number');

// if(number % 2 === 0){
//   alert(`${number} is an even number`);
// } else if(number % 2 !== 0){
//   alert(`${number} is an odd number`);
// } else {
//   alert(`Please recheck your input ${number}`);
// }

// ___________________________________complete question 4 _________________________________________________________________________________________







//  *********************************************Exercises: Level 2****************************************************************************************


// *************************************************** 5.......................======================================================================================

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F






//  let number = prompt('Please enter your score to calculate your grade');

// if(number >= 80 && number <= 100){
//   alert(` congratulations!! From your marks ${number} you are provided with grade A`)
// } else if( number >= 70 && number < 80){
//   alert(`From your score ${number} you are provided with grade B`)
// } else if( number >= 60 && number < 70){
//   alert(`From your score ${number} you are provided with grade C`)
// } else if( number >= 50 && number < 60 ){
//   alert(`From your  score ${number} you are provided with grade D`)
// } else if( number >= 0 && number < 50){
//   alert(`Oops! I think you should work more hard From your score ${number} you get the grade F`)
// } else{
//   alert('Please provide right input');
// } 


// ___________________________________complete question 1 _________________________________________________________________________________________




// *************************************************** 2.......................======================================================================================


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt('Please Enter Month Name');
// month = month.toLowerCase();
// if(month === 'september' || month === 'october' || month ==='november'){
//   alert(`the season is Autumn`);
// } else if( month ==='december' || month=== 'january' || month === 'february'){
//   alert('the season is Winter');
// } else if(month === 'march' || month ==='april' || month === 'may'){
//   alert('the season is Spring')
// } else if(month === 'june' || month === 'july' || month === 'august'){
//   alert('the season is Summer')
// } else {
//   alert('Please provide right input')
// }

// ___________________________________complete question 2 _________________________________________________________________________________________














// ******************************************************** 3.......................======================================================================================



// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.


// let day = prompt('What is the day today?');
// day = day.toLowerCase();
// if ( day === 'saturday' || day === 'sunday'){
//   alert(`${day} is  weekend`)
// } else if(day === 'monday' || day ==='tuesday' || day === 'wednesday' || day === 'thrusday' || day === 'friday' ){
//   alert(`${day} is a working day`)
// } else {
//   alert ('Please provide right input')
// }
// ___________________________________complete question 3 _________________________________________________________________________________________











//  ******************************************************Exercises: Level 3**********************************************************************************************


// ******************************************************** 1.......................======================================================================================


// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.


// let month = prompt('Enter a month')
// month = month.toLowerCase();
// if ( month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december' ){
//   alert(`${month} has 31 days`)
// } else if( month === 'april' || month === 'june' || month === 'september' || month === 'november'){
//   alert(`${month} has 30 days`)
// } else if( month === 'february'){
//   alert(`${month} has 28 days`  )
// } else{
//   alert('Pleas provide right input')
// }


// ___________________________________complete question 1_________________________________________________________________________________________











// ******************************************************** 2.......................======================================================================================


// Write a program which tells the number of days in a month, now consider leap year.


// let month = prompt('Enter a month')
// month = month.toLowerCase();
// if ( month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december' ){
//   alert(`${month} has 31 days`)
// } else if( month === 'april' || month === 'june' || month === 'september' || month === 'november'){
//   alert(`${month} has 30 days`)
// } else if( month === 'february'){
//      let year = prompt('Please provide year to calculate the days of february');
//       if(year % 4 === 0){
//         alert(`${month} of the ${year} has 29 days`)
//       } else if(year % 4 !== 0){
//         alert(`${month} of the ${year} has 28 days`)
//       } else{
//         alert('Please provide right input')
//       }
// } else{
//   alert('Pleas provide right input')
// }

// ___________________________________complete question 2_________________________________________________________________________________________



// ********************************COMPLETE ALL LEVEL OF DAY 4****************************************************************************************const eightEmptyValues = Array(8) // it creates eight empty values
