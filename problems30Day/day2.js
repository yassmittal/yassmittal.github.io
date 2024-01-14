// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

var challenge = "30 days of JavaScript";

// 2. Print the string on the browser console using console.log()

// console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()

// console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method

// challenge = challenge.toUpperCase();
// console.log(challenge);

// 5. Change all the string characters to lowercase letters using toLowerCase() method

// challenge = challenge.toLowerCase();
// console.log(challenge);

// 6. Cut (slice) out the first word of the string using substr() or substring() method

// challenge = challenge.substring(0, 1);
// console.log(challenge);

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

// challenge = challenge.substring(3 , challenge.length);
// console.log(challenge);

// 8. Check if the string contains a word Script using includes() method

// challenge = challenge.includes('Script');
// console.log(challenge);

// 9. Split the string into an array using split() method

// challenge = challenge.split();
// console.log(challenge);

// 10. Split the string 30 Days Of JavaScript at the space using split() method

// challenge = challenge.split(' ');
// console.log(challenge);

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// let challenge11 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// challenge11 = challenge11.split(',');
// console.log(challenge11);

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

// challenge = challenge.replace('JavaScript' , 'Python');
// console.log(challenge);

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

// challenge = challenge.charAt(15);
// console.log(challenge);

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

// challenge = challenge.charCodeAt('J');
// console.log(challenge);

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

// challenge = challenge.indexOf('a');
// console.log(challenge);

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

// challenge = challenge.lastIndexOf('a');
// console.log(challenge);

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// let challenge17 = 'You cannot end a sentence with because because because is a conjunction';
// challenge17 = challenge17.indexOf('because');
// console.log(challenge17);

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// let challenge18 = 'You cannot end a sentence with because because because is a conjunction';
// challenge18 = challenge18.lastIndexOf('because');
// console.log(challenge18);

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// challenge19 = 'You cannot end a sentence with because because because is a conjunction';
// challenge19 = challenge19.search('because');
// console.log(challenge19);

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

// challenge20 = ' 30 Days Of JavaScript ';
// challenge20 = challenge20.trim();
// console.log(challenge20);

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true

// challenge = challenge.startsWith('30 days of JavaScript');
// console.log(challenge);

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

// challenge = challenge.endsWith('ript');
// console.log(challenge);

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript

// challenge = challenge.match(/a/gi);
// console.log(challenge);

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

// var challenge24 = "30 days".concat(' JavaScrpt');// doubt not working this property
// console.log(challenge24);

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times

// challenge = challenge.repeat(2);
// console.log(challenge);

// !***************finish level 1*********************************************************************************!

// exercises level 2

// *****1.******

// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

// console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another")

// *****2.******

// Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

// console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

// *****3******

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// let num10 = 10;
// let string10 = '10';
//  console.log(typeof(num10) == typeof(string10));

// string10 = +string10;

// console.log(typeof(num10) == typeof(string10));

// *****4.******

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// let string = '9.8';

// let number = parseFloat('9.8');
// number =   Math.ceil(number)

// console.log(number)

// *****5.******

// Check if 'on' is found in both python and jargon

// let python = "python";
// let jargon = "jargon";

// *************way 1************

// let result = python.indexOf('on');
// let result2 = jargon.indexOf('on');
// console.log(result);
// console.log(result2);

//                       // *************way 2************

// result = python.search('on');
// result2 = jargon.search('on');

// console.log(result);
// console.log(result2);

// *****6.******

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// let variable = 'I hope this full course is not full of jargon';
// console.log(variable.search('jargon'));
// console.log(variable.indexOf('jargon'));

// *****7.******

// Generate a random number between 0 and 100 inclusively.

// console.log(Math.floor(Math.random() * 101));

// *****8.******

// Generate a random number between 50 and 100 inclusively.

// console.log(Math.floor(Math.random()*51) + 50);

// *****9.******

// Generate a random number between 0 and 255 inclusively.

// console.log(Math.floor(Math.random() * 256));

// *****10.******

// Access the 'JavaScript' string characters using a random number.

// let string = 'JavaScript';
// console.log(string[Math.floor(Math.random()* 10)]);
// console.log(string[Math.ceil(Math.random()* 9)]);

// *****11.******

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// console.log('1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// *****12.******

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// let string = 'You cannot end a sentence with because because because is a conjunction';

// console.log(string.substr())

// *******************************************level 3*********************************************************************************

// *****1.******

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// let level3a = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// console.log(level3a.match(/love/gi).length);

// *****2.******

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// let string2 ="You cannot end a sentence with because because because is a conjunction";

// console.log(string2.match(/because/gi).length);

// *****3.******

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

// //     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// sentence = sentence.replace(/@/gi , '');
// sentence = sentence.replace(/%/gi , '');
// sentence = sentence.replace(/&/gi , '');
// sentence = sentence.replace(/#/gi , '');
// sentence = sentence.replace(/!/gi , '');
// sentence = sentence.replace(/!/gi , '');
// sentence = sentence.replace(/;/gi , '');
// // // ****************************************************doubt doubt doubt doubt why replacing dollar sign is not working  below******************

// sentence = sentence.replace(/$/gi , '');

// console.log(sentence);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// let incomestring = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// let incomearray;
// incomearray = incomestring.match(/\d+/gi);

// let totalincome;
// totalincome = +incomearray[0] + +incomearray[1] + +incomearray[2];
// console.log(totalincome);

// console.log(NaN === NaN)        // false  **************doubt why/ **************_==============**********;

// const ysh = Date();
// console.log(ysh);

// let uasj = new  Date();
// console.log(uasj.getFullYear());

var isPalindrome = function (x) {
  let newX = String(x);
  let arrayOfWords = newX.split("");

  arrayOfWords.reverse();
  arrayOfWords = arrayOfWords.join("");

  if (Number(arrayOfWords) === x) {
    return `yes the provided worrd ${x} is a isPalindrome`;
  } else {
    return `no the provided worrd ${x} is  not a isPalindrome`;
  }
};

console.log(isPalindrome(101));
