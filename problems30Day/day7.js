// Exercises: Level 1
// 1 .Declare a function fullName and it print out your full name.


// function fullName(){
//   console.log('yash mittal')
// }

// fullName();



//2.  Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName , lastName){
//   return `${firstName} ${lastName} `
// } 

// console.log(fullName('yash' , 'mittal'))





//3.  Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers(num1 , num2){
//   return num1 + num2;
// }

// console.log(addNumbers(79 , 89))




//4.  An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.


// function calculateAreaOfTriangle(length , width){
//   return length * width;
// }

// console.log(calculateAreaOfTriangle(79 , 89))





// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// function calculatePerimeterOfRectangle(length , width){
//   return 2 * (length + width)
// }

// console.log(calculatePerimeterOfRectangle(3 , 4))



//6.  A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.


// function calculateVolumeOfPrism(length , width , height){
//   return length * width * height;
// }

// console.log(calculateVolumeOfPrism(10 , 2 , 7))




// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle



// function calculateAreaOfCircle(radius){
//   return Math.PI * radius * radius
// }

// console.log(calculateAreaOfCircle(7))





//8.  Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// function calculateCircumferenceOfCircle(radius){
//   return 2 * Math.PI * radius;
// }

// console.log(calculateCircumferenceOfCircle(2))







//9 . Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.


// function calculateDensity(mass , volume){
//   return mass / volume;
// }

// console.log(calculateDensity(88 , 4))






//10 .  Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.




// function calculateSpeed(distance  , time){
//   return distance / time;
// }



// console.log(calculateSpeed( 10 , 2))




//11.  Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.


// function calculateWeight(mass , gravity){
//   return mass * gravity;
// }

// console.log(calculateWeight( 28 , 4))


//12.  Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.



// function convertTemperaturefromoCtoOF(TemperatureInCelcius){
//   return (TemperatureInCelcius * 9 / 5) + 32
// } 

// console.log(convertTemperaturefromoCtoOF(5))






// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.


//14.  The same groups apply to both men and women.


// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more



// function calculateBMI(weight , height){
// return weight / (height * height)   + ' m2'
// }

// console.log(calculateBMI(72 , 1.7))













// 15. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.



// function printSeason(month){
// month = month.toLowerCase();
//   if(month === 'january' || month === 'february' || month === 'march'){
//     return 'Autumn'
//   }  else  if(month === 'april' || month === 'may' || month === 'june'){
//     return 'Winter'
//   } else  if(month === 'july' || month === 'august' || month === 'september'){
//     return 'Spring'
//   } else  if(month === 'october' || month === 'november' || month === 'december'){
//     return 'summer'
//   } 
// };

// console.log(printSeason('jaNuary'));
// console.log(printSeason('febRuary'));
// console.log(printSeason('March'));
// console.log(printSeason('aPril'));
// console.log(printSeason('mAy'));
// console.log(printSeason('jUne'));
// console.log(printSeason('juLy'));
// console.log(printSeason('augUst'));
// console.log(printSeason('septEmber'));
// console.log(printSeason('ocTober'));
// console.log(printSeason('nOvember'));
// console.log(printSeason('dEcember'));





//16.  Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// function findMax(a , b , c){
//   if(a > b  && b > c){
//     return a;
//   } else if( a < b  && c > b){
//     return c;
//   } else if( a < b && b  > c){
//     return b;
//   } else if( a > b && b < c){
//     if( a > c){
//       return a;
//     } else if( a < c){
//       return c
//     }
//   } else{
//     return 'error';
//   }
// }


// console.log(findMax( 5, 8, 7 ))


// console.log(findMax(0, 10, 5))
// // 10
// console.log(findMax(0, -10, -2))
// // 0



// Exercises: Level 2
//1.  Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


// function solveLinEquation(a , b , c){

// }

// console.log(solveLinEquation(1 , 2 , 3));














// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.


// function solveQuadEquation(a , b , c){

// }

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}




//3.  Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray(){
// // for( let item of arguments){
// //   return item;
// // }

// for( let i = 0; i < arguments.length; i++){
//   return arguments[i];
// }
// }

// console.log(printArray([2 , 'hjkd']))



//4.  Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// let showDateTime = function() {
//   return new Date()
// }


// showDateTime()
// 08/01/2020 04:08



//5.  Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// function swapValues(x , y){
//   // let numberX = x;
//   // let numY = y;
//   // y = numberX;
//   // x = numY;

//   [x , y] = [ y , x]

//   console.log(x , y);
// }

// swapValues(7 , 8)


// 6.  Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// //[5, 4, 3, 2, 1]
// console.log(reverseArray([1, 2, 3, 4, 5]))

// // ['C', 'B', 'A']
// console.log(reverseArray(['A', 'B', 'C']))

// function reverseArray(arr){
//   let result = [];
//   // for( let i = arr.length - 1; i >= 0 ; i--){
//   //   result.push(arr[i])
//   // }

//   for(let item of arr){
//     result.unshift(item)
//   }
  
//   return result;
// }

//7.  Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// function capitalizeArray(arr){
//   for(let i = 0; i < arr.length; i++){
//        arr[i] = arr[i].toUpperCase();
//   }

//   // for( let item in arr){
//   //   item = item.toUpperCase();
//   //   // arr.push(item)
//   // }

//   return arr;
// }

// console.log(capitalizeArray(['yash' , 'hdfkjhs' , 'imiEEDfdalhjs']))


// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// let arr = [];
// function addItem(item){
//     arr.push(item);
// }

// addItem('item1')
// addItem('item2')
// console.log(arr)












// 9.  Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// let arr = ['item1' , 'item2' , 'item3' , 'item4' , 'item5' , 'item6'];
// function removeItem(index){
//       arr.splice(index , 1)
// } 

// removeItem(5);
// console.log(arr)




//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// let sum = 0;
// function sumOfNumbeers(range){

//   for( let i = range[0]; i <= range[1]; i++ ){
//     sum += i;
//   }
//   return(sum);
//   }
// console.log(sumOfNumbeers([ 98, 100]))








// 11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// let sum = 0;
// function sumOfOdds(number){
//   for(let i = 0; i <= number ; i++){
//     if( i % 2 != 0){
//       sum += i;
//     } 
//   }
//   return sum;
// }





// console.log(sumOfOdds(7))








// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// let sum = 0;
// function sumOfEven(number){
//   for( let i = 0; i <= number ; i++){
//     if( i % 2 === 0){
//       sum += i;
//     }
//   }
//   return sum;
// }


// console.log(sumOfEven(10))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// let oddarr = []
// let evenarr = []
// let newarr;
// function evensAndOdds(posNumber){
//   // posNumber = toString(posNumber);
//   let newarr =  posNumber.split("");
//   for(let i = 0; i < newarr.length;  i++){
//     if(newarr[i] % 2 == 0){
//       oddarr.push(newarr[i])
//     }else if(i % 2 != 0){
//       evenarr.push(newarr[i]);
//     }
//   }
//     console.log(oddarr);
//     console.log(evenarr)
//     console.log(newarr)
// }
// evensAndOdds('677998');


// function evensAndOdds(number){
//   if(number % 2 === 0){
//     return `The number of odds are ${number / 2} 
// The number of evens are ${(number / 2)+ 1}`
//   } else if(number % 2 !== 0){
//     return `The number of odds are ${(number + 1) / 2}
// The number of evens are ${(number + 1) + 2}`
//   }
// }

// console.log(evensAndOdds(98))
// console.log(evensAndOdds(99))
// console.log(evensAndOdds(23))
// console.log(evensAndOdds(2))


// let evenArray = [];
// let oddArray = [];
// function evensAndOdds(number){
//   for(let i = 0; i<= number; i++){
//     if( i % 2 === 0){
//     evenArray.push(i);
//   } else if(i % 2 !== 0){
//     oddArray.push(i)
//   }
// }
// return `The number of odds are ${evenArray.length}
// The number of evens are ${oddArray.length}`
// }

// console.log(evensAndOdds(100))




// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.




// 13. Write a function which takes any number of arguments and return the sum of the arguments
// let result = 0;
// function sum(){
//   for( let item of arguments){
//     result += item;
//   }
//   return result;
// }

// console.log(sum(2 , 3, 4 ,4 , 10 , 100))




// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10





// 14. Writ a function which generates a randomUserIp.






// Write a function which generates a randomMacAddress






// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'







// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE



// Exercises: Level 3
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

// 🎉 CONGRATULATIONS ! 🎉


