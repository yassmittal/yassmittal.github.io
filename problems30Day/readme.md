
 2. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'


let string = 'You cannot end a sentence with because because because is a conjunction';

console.log(string.substr())


3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

 var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

 sentence = sentence.replace(/@/gi , '');
 sentence = sentence.replace(/%/gi , '');
 sentence = sentence.replace(/&/gi , '');
 sentence = sentence.replace(/#/gi , '');
 sentence = sentence.replace(/!/gi , '');
 sentence = sentence.replace(/!/gi , '');
 sentence = sentence.replace(/;/gi , '');
   ****************************************************doubt doubt doubt doubt why replacing dollar sign is not working  below******************

 sentence = sentence.replace(/$/gi , '');

 console.log(sentence);


4.  console.log(NaN === NaN)        // false  **************doubt why/ **************_==============**********;

5.1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();

const minage = ages[1];
const maxage = ages[ages.length - 1];

const medianAge = (ages[4] + ages[5]) / 2;


var total = 0;
for( let i = 0; i < ages.length; i++){
   total  += ages[i]
}

const averageAge = total / ages.length;

const range = ages[ages.length - 1] - ages[0];

Compare the value of (min - average) and (max - average), use abs() method 

is it right

  if(Math.abs(minage - averageAge) === Math.abs(maxage - averageAge) ){
    console.log('equal');
  } else if(Math.abs(minage - averageAge) !== Math.abs(maxage - averageAge) ){
    console.log('not equal');
  } else{
    console.log('Error')
  }
  
console.log(ages) 


5. Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######





???????????????????????????????????????????????how how how how how how how how how how how how how ??????????????????????????????????????????????????????????///

let value = '#';

for( let i = 0; i < 8; i++){
  console.log()
}



6. Using loop print the following pattern

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



7. Use for loop to iterate from 0 to 100 and print only prime numbers

for(let i = 2; i <= 100; i++){
if( i % 1 )


}

structured clone at the end of object chapter 2 lesson 30 need more explaination



8.  Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


9. defination of closure:-
closer is when a function "remembers" its variables outside of it, even if you pass that function somewhere else;- need more explaination


freecodecamp. 

 question.

  Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

solution:- 

function confirmEnding(str, target) {
  let newstr = str.split(target);

  console.log(newstr)
  if (newstr[newstr.length - 1] == ''){
    return true;
  } else{
     return false
  }
  // return str;
}

console.log(confirmEnding("Bastian", "n"));

doubt*************** down*******


function booWho(bool) {
  if(bool === true || false){
    return true;
  } else{
    return false;
  }
}

console.log(booWho(false)); why this code return false;


*************************************************


question:- 


Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.


solution:

function titleCase(str) {
  let strArr = str.split(' ');
  let firstLetterArr = [];
  let restLetterArr = [];
  let lastArr = [];
  let result;
  for(let i = 0; i < strArr.length; i++){
     firstLetterArr.push(strArr[i].charAt(0).toUpperCase());
     restLetterArr.push((strArr[i].slice(1).toLowerCase()));
     lastArr.push((firstLetterArr[i] + restLetterArr[i]));
     result = lastArr.join(' ')
  }

  return result;
}

console.log(titleCase("I'm a little tEa pot"));







question: -



You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.



solution: -;


function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  let oneMoreArr = [];

  for(let i = 0 ; i < arr1.length; i++){
  oneMoreArr.unshift(arr1[i])
  }

  for(let i = 0; i < arr2.length; i++){
  newArr.push(arr2[i]);
  } 

  for(let i = 0; i < oneMoreArr.length; i++){
  newArr.splice(n , 0 , oneMoreArr[i])
  }


  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));





question: 
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


solution:-


function getIndexToIns(arr, num) {
  arr.sort((a , b) => a - b);
 let  newarr = []

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < num){
      newarr.push(i)
    }
  }

let result = newarr.length;
  arr.indexOf(num)
  

  console.log(arr)
  return result;
}

console.log(getIndexToIns([40, 60 ,90 , 9 , 10], 50));