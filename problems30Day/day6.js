// Exercises: Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];


//1. Iterate 0 to 10 using for loop, do the same using while and do while loop


// for( let i = 0; i <= 10; i++){
//   console.log(i);
// }

// let i = 0;
// while(i <= 10){
//   console.log(i);
//   i++;
// }

// let j = 0;
// do{
//   console.log(j);
//   j++;
// }while(j<= 10)


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for(let i = 10; i>= 0 ; i--){
//   console.log(i);
// }

// let i = 10;
// while(i>= 0){
//   console.log(i);
//   i--;
// }

// let j = 10;
// do{
//   console.log(j);
//   j--;
// } while(j >= 0)




// 3. Iterate 0 to n using for loop
// let n = 20;
// for(let i = 0; i <= n; i++){
//   console.log(i);
// }




// 4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// let value  = '';

// for( let i = 0; i < 7; i++){
//   value += '#';
//   console.log(value)
// }


// 5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100


// for( i = 0; i <= 10; i++){
//   console.log(`${i} * ${i} = ${i ** 2}`)
// }


//6.  Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// ???????????????????????????????????????????????how how how how how how how how how how how how how ??????????????????????????????????????????????????????????///

// console.log('i  i^2  i^3')


// for(let i = 0; i <= 10; i++){
//   console.log(`${i}  ${i**2}  ${i**3}`)
// }



// 7. Use for loop to iterate from 0 to 100 and print only even numbers

// for( let i = 0; i <= 100; i++){
//   if( i % 2 === 0){
//     console.log(i);
//   } 
// }





// 8 .Use for loop to iterate from 0 to 100 and print only odd numbers


// for( let i = 0; i <= 100; i++){
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }





// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

// for(let i = 2; i <= 100; i++){
// if( i % 1 )


// }


//10.  Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;
// for(let i = 0; i<= 100; i++){
//   sum = sum + i;
// }
// console.log(sum)

// The sum of all numbers from 0 to 100 is 5050.


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let arr = [];
// let sum = 0;
// let evenSum = 0;
// let oddSum = 0;
// for(let i = 0 ; i <= 100; i++){

//   if(i % 2 === 0){
//     evenSum += i;
//   }else if(i % 2 !== 0){
//     oddSum += i;
//   }
// }

// console.log(evenSum); 
// console.log(oddSum);


// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array


// let sumOfEvenOdd = [ 0 , 0 ];

// for(let i = 0; i <= 100; i++){
//   if( i % 2 === 0){
//     sumOfEvenOdd[0] += i;
//   }else{
//     sumOfEvenOdd[1] += i;
//   }
// }


// console.log(sumOfEvenOdd);


//   [2550, 2500]

// Develop a small script which generate array of 5 random numbers;


// function generateArrOfFiveRandomNum(){
//   let arr = [];

//   for(let i = 0; i < 5; i++){
//     arr.push(Math.floor(Math.random() * 999990))
//   }
//   return arr;
// }

// console.log(generateArrOfFiveRandomNum())


// Develop a small script which generate array of 5 random numbers and the numbers must be unique


function generateArrOfFiveUniqueRandomNum(){
  let arr = [];

  let firstNum = Math.floor(Math.random() * 9999999999);
  let secondNum = Math.floor((Math.random()) * 99999999 + 20 );
  let thirdNum = Math.floor((Math.random() * 99999999) + 40);
  let forthNum = Math.floor((Math.random() * 99999999) + 60);
  let fifthNum = Math.floor((Math.random() * 99999999) + 80);

  arr.push(firstNum)
  arr.push(secondNum)
  arr.push(thirdNum)
  arr.push(forthNum)
  arr.push(fifthNum)

  // for(let i = 0; i < 5; i++){
  //   let newnum = Math.floor(Math.random() * 10)
  //   if(arr.includes(newnum)){
  //     ++i;
  //   }else{
  //     arr.push(newnum)
  //   }
  // }

  return arr;

}
console.log(generateArrOfFiveUniqueRandomNum());


// Develop a small script which generate a six characters random id:

// 5j2khz
// Exercises: Level 2
// Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.

// '#ee33df'
// Write a script which generates a random rgb color number.

// rgb(240,180,80)
// Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// Exercises: Level 3
// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// Sort the webTechs array and mernStack array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array
// Reverse the countries array and capitalize each country and stored it as an array
// 🎉 CONGRATULATIONS ! 🎉


// console.log(NaN === NaN)  




// let object1 = {
//   key1: 'value1',
//   key2: 'valsdfkjds',
//   key3: 'value3',
//   key4: 'value4',
//   key5: 'value5',
//   key6: 'value6',
// }

// object2 = {};
// for( uaush in object1){
//   object2[uaush] = object1[uaush];
// }

// console.log(object2.key3)

// // object2[key2] = 'Yash mittal'; //why square brackets is not working in this example instead of this dot syntax is working fine
// console.log(object2.key2)
// console.log(object1.key2)

// function sayHi() {
//   console.log(this.name );
// }


// sayHi();


//  (function(radius)  {
//   console.log(Math.PI * radius * radius)
// })(20);


// const FindAreaOfCircle = (radius) => {
//   console.log(Math.PI * radius * radius)
// }

// FindAreaOfCircle(10)