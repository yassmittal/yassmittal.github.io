// Exercises: Level 1
// 1. Store you first name, last name, age, country, city in your browser localStorage.


// localStorage.setItem(firstName  , 'yash')
// localStorage.setItem(lastName  , 'mittal')
// localStorage.setItem(country  , 'India')
// localStorage.setItem(city  , 'Gwalior')

// console.log(localStorage.getItem(city))



// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

// let student = {
//   firstName: 'Yash',
//   lastName: 'Mittal',
//   age: '20',
//   skills: ['HTML' , 'CSS' , 'Javascript'],
//   country: 'India',
// }



// let studentJson = JSON.stringify(student , undefined , 4);

// localStorage.setItem('students' , studentJson);





// Exercises: Level 3
//1,  Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


// let personAccount = {
//   firstName: 'Yash',
//   lastName: 'Mittal',
//   incomes: '$999',
//   expenses: ['rent' , 'emi' , 'tutionFees' , 'Grocerry and other stuff'],
//   totalIncome

// }

// let object1 = {
//   name: 'yash',
//   passion: 'coding',
//   work: 'web developer'
// }

// function objToStr(object){
//   let result = ''
//   for (const key in object) {
//       result += key + ', ';
//     }
//     return result
// }


// console.log(objToStr(object1));

// var multiplier = 9;
// for (var i = 0; i <= 10; i++) {
//     var result = multiplier * i;
//     console.log(multiplier + ' * ' + i + ' = ' + result);
// }


// for (var multiplier = 0; multiplier <= 10; multiplier++) {
//  for (var i = 0; i <= 10; i++) {
//    var result = multiplier * i;
//    console.log(multiplier + ' * ' + i + ' = ' + result);
//  }
// }


//closure

// function outer(){
//   let counter = 0;
//   function inner(){
//     counter++;
//     console.log(counter);
//   }

//   return inner;
// }

// let fn = outer();

// fn()
// fn()

// function frequencyOfElements(arr){
//   let count = 0;
//   let emptyarr = [];
//   let newarr = [...arr];
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < newarr.length; j++){
//       if(arr[i] = newarr[j]){
//         count++;
//       }
//     }
//   }

//   return  count;
// }





// function frequencyOfElements(arr){
//   let number = 3;
//   let arrr = []
//   for(let i = 0; i < arr.length; i++){
//     if(number === arr[i]){
//       arrr.push(3)
//     }
//   }
//   return arrr;
// }

// function frequencyOfElements(arr){
// let answer = [];
//   let count = 0;
//   for(let i = 0; i < arr.length;  i++){
//     let resultarr = []
//     let number = arr[i];
//     for(let j = 0; j < arr.length; j++){
//         // if(answer[i]){
//           // if(!answer[i].includes(number)){
//             if(arr[j] === number){
//               resultarr.push(number)
//             // }
//         // }
//        }
//     }
//     answer.push(resultarr)
//   } 
//   return answer;
// }

// console.log(frequencyOfElementss([3 , 4 , 8 , 3 , 8 , 2 , 8]));


// function frequencyOfElementss(arr){
//   let answer = [];
//     let count = 0;
//     for(let i = 0; i < arr.length;  i++){
//       let resultarr = [];
//       let number = arr[i];
//       for(let j = 0; j < arr.length; j++){
//         // for(let k = 0; k < answer.length; answer++){
//         //   if(!answer[k].includes(number)){
//         //     resultarr.push(number)
//         //     console.log(resultarr);
//         //   }
  
//         // }
  
//         for(let k = 0; k < answer.length; k++){
//           if(answer[k].includes(number)){
//             console.log('do nothing')
//           }else{
//            if(arr[k] === number){
//             resultarr.push(number)
//           }
//         }
//       };
//         //   if(answer[i]){
//           //     if(!answer[i].includes(number)){
//             //       if(arr[j] === number){
//               //       }
//               //   }
//               //  }
//             }
//       answer.push(resultarr)
//     } 
  
//     return answer;
//   }


  // You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

  // You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.
  
  // Your function must always return the entire record collection object.
  
  
  // Setup


// function greatestCommonDiviser(a , b){

//   let newarr = [];

//   for(let i = 1; i <= a; i++){

//     if(b % i === 0 && a % i === 0){
//       newarr.push(i)
//     }
//   }

//   return newarr[newarr.length - 1]
// }

// console.log(greatestCommonDiviser(4 , 6))
// console.log(greatestCommonDiviser(12 , 24))
// console.log(greatestCommonDiviser(3 , 33))
// 


// 
// 
// 
//
//
//

// function possibleBonus(a , b){
//   let result;
//   for(let i = 1; i <= 6; i++){
//     if(a + i === b){
//       result = true;
//       return result;
//     }else{
//       result = false;
//     }
//   }
//   return result;
// }

// console.log(possibleBonus(2 , 8));

// function canNest(arr1, arr2) {
//   arr1.sort((a , b )=> a - b)
//   arr2.sort((a , b )=> a - b)
//  if(arr1[0] > arr2[0] &&  arr1[arr1.length  -1] < arr2[arr2.length - 1]){
//   return true
//   }else{
//    return false
//   }
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]))
// console.log(canNest([3, 1], [4, 0]))
// console.log(canNest([9, 9, 8], [8, 9, 10]))
// console.log(canNest([9, 9, 8], [8, 9]))
// console.log(canNest([1, 2, 3, 4], [2, 3]))


// console.log(([2 , 3 ,4, 4,5 ,4 , 90 , 1].sort((a , b) => a - b)));

// function matchHouses(step) {
// 	if(step = 0){
//     return 0
//   }else if(step = 1){
//     return 6;
//   }else{
//     return 6 + ((step - 1) * 5)
//   }
// }


// function numberSquares(n) {
// 	if(n === 0){
//     console.log('0 condition');
// 		return 0
// 	}else if(n = 1){
//     console.log('1 condition');
//     return 1
// 	}else{
//     console.log('else condition');
// 		return (n * n) + numberSquares(n - 1)
// 	}
// }

// console.log(numberSquares(90));


function diffArray(arr1, arr2) {
  const newArr = [];
  let largerArr;
  let smallArr;
  if(arr1.length > arr2.length){
    largerArr = arr1;
    smallArr = arr2;
  }else{
    largerArr = arr2
    smallArr = arr1;
  }

  // for(let i = 0; i < smallArr.length; i++){
  //   if(!largerArr.contains(smallArr[i])){
  //     newArr.push(smallArr[i])
  //   }
  // }
  
  
  for (let i = 0; i < array.length; i++) {
    if (largerArr.in) {
      
    }
    
  }


  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

