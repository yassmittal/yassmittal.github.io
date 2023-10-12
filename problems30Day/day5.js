// 💻 Exercise
// Exercise: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
//  1.->  Declare an empty array;

// let myArray = Array();
// let ourArray = [];


// console.log(myArray);
// console.log(ourArray);






// 2.->  Declare an array with more than 5 number of elements

// const technologies = ['HTML', 'CSS' , 'JavaScript', 'React', 'Redux', 'Node'];

// console.log(technologies);
// console.log(technologies[0])
// console.log(technologies[1])
// console.log(technologies[2])
// console.log(technologies[3])
// console.log(technologies[4])
// console.log(technologies[5])







// 3. Find the length of your array

// const technologies = ['HTML', 'CSS' , 'JavaScript', 'React', 'Redux', 'Node'];

// console.log(technologies.length);




// 4. Get the first item, the middle item and the last item of the array


// const technologies = ['HTML', 'CSS' , 'JavaScript', 'React', 'Redux', 'Node'];

// console.log(technologies[1])
// console.log(technologies[2])
// console.log(technologies[3])
// console.log(technologies[technologies.length - 1])



// 5.   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// const mixedDataTypes = ['mango', 89, true , false, null, undefined]
// console.log(mixedDataTypes);
// console.log(mixedDataTypes.length);







// 6.  Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon


// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


// 7.  Print the array using console.log()

// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies);


// 8.  Print the number of companies in the array
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies.length);


// 9. Print the first company, middle and last company

// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies[0])
// console.log(itCompanies[3])
// console.log(itCompanies[itCompanies.length - 1])


// 10. Print out each company

// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies[0])
// console.log(itCompanies[1])
// console.log(itCompanies[2])
// console.log(itCompanies[3])
// console.log(itCompanies[4])
// console.log(itCompanies[5])
// console.log(itCompanies[6])


// 11. Change each company name to uppercase one by one and print them out

// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies[1].toUpperCase());
// console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies[3].toUpperCase());
// console.log(itCompanies[4].toUpperCase());
// console.log(itCompanies[5].toUpperCase());
// console.log(itCompanies[6].toUpperCase());





// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies.toString())




// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found


// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];

// let companyName = prompt('Write the name of company' , '');
// companyName = companyName.toLowerCase();
// if(itCompanies.includes(companyName)){
//   alert(`Yes the company ${companyName} exists in our list`);
// } else {
//   alert(`company ${companyName} is not found`);
// }



// 14 . Filter out companies which have more than one 'o' without the filter method
// ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/??????

// kaise hoga ?????????????????????????????????????????????????????????????????????????????????????????/


let haan = 'yhi h';


//15.  Sort the array using sort() method

// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// itCompanies.sort();
// console.log(itCompanies)





//16. Reverse the array using reverse() method


// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];


// itCompanies.reverse();
// console.log(itCompanies);




//17.  Slice out the first 3 companies from the array

// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// console.log(itCompanies.slice(0 , 3));








//18.  Slice out the last 3 companies from the array


// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// console.log(itCompanies.slice(4 , itCompanies.length))







//19.  Slice out the middle IT company or companies from the array


// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// console.log(itCompanies.slice(3 , 4))






// 20. Remove the first IT company from the array


// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// console.log(itCompanies.shift())



//21.  Remove the middle IT company or companies from the array

// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// console.log(itCompanies.splice(3, 1))




//22.  Remove the last IT company from the array



// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// console.log(itCompanies.pop())







//23.  Remove all IT companies

// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];

// console.log(itCompanies.splice(0 , itCompanies.length))

// console.log(itCompanies);





// Exercise: Level 2


//1.  Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file








// 2..First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13


// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, python.';

// text = text.replace(/,/gi , '');
// text = text.replace(/\./gi , ''); //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>doubt<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// words = text.split(' ');
// console.log(words)

// console.log(words.length);











// 3. In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.unshift('Meat');

// shoppingCart.push('Sugar');

// shoppingCart.splice(4 , 1)

// shoppingCart.splice(3 , 1 , 'Greentea')


// console.log(shoppingCart);















// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// let countries = ['India' , 'Pakistan', 'Russia', 'Greenland', 'Maldives', 'Srilanka' , 'USA' , 'Australia', 'Newzeland'];

// if( countries.includes('ETHOPIA')){
//   console.log('ETHOPIA')
// } else{
//   countries.push('ETHOPIA');
// }

// console.log(countries);





//5.  In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   if(webTechs.includes('Sass')){
//     console.log('sass is a CSS preprocess')
//   } else{
//     webTechs.push('Sass');
//     console.log(webTechs)
//   }








//6.  Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack)















// Exercise: Level 3
// 1. The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort();

// const minage = ages[1];
// const maxage = ages[ages.length - 1];

// const medianAge = (ages[4] + ages[5]) / 2;


// var total = 0;
// for( let i = 0; i < ages.length; i++){
//    total  += ages[i]
// }

// const averageAge = total / ages.length;


// const range = ages[ages.length - 1] - ages[0];


// Compare the value of (min - average) and (max - average), use abs() method 

// is it right

//   if(Math.abs(minage - averageAge) === Math.abs(maxage - averageAge) ){
//     console.log('equal');
//   } else if(Math.abs(minage - averageAge) !== Math.abs(maxage - averageAge) ){
//     console.log('not equal');
//   } else{
//     console.log('Error')
//   }
  





// console.log(ages) 















// 2.Slice the first ten countries from the countries array

// let countries = ['India' , 'Pakistan', 'Russia', 'Greenland', 'Maldives', 'Srilanka' , 'USA' , 'Australia', 'Newzeland', 'zimbavbe', 'Bangladesh', 'kajakista' , 'Ukraine' , 'poland' , 'span', 'britain' , 'afghanishtan' , 'maurities'];

// console.log(countries.slice(0 , 10))


// 3.Find the middle country(ies) in the countries array



// let countries = ['India' , 'Pakistan', 'Russia', 'Greenland', 'Maldives', 'Srilanka' , 'USA' , 'Australia', 'Newzeland', 'zimbavbe', 'Bangladesh', 'kajakista' , 'Ukraine' , 'poland' , 'span', 'britain' , 'afghanishtan' , 'maurities' , 'china' ];

// if( countries.length % 2 === 0){
//    console.log( countries[Math.floor((countries.length - 1) / 2)]) ;
//    console.log(countries[countries.length / 2])
// } else if( countries.length % 2 !== 0){
//   console.log(countries[(countries.length - 1) / 2 ])
// }









//4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// let countries = ['India' , 'Pakistan', 'Russia', 'Greenland', 'Maldives', 'Srilanka' , 'USA' , 'Australia', 'Newzeland', /**/ 'zimbavbe', 'Bangladesh', 'kajakista' , 'Ukraine' , 'poland' , 'span', 'britain' , 'afghanishtan' , 'maurities' , 'china'] ;


// if( countries.length % 2 === 0){
//   part1 =  countries.splice(0 , countries.length / 2 )
//   part2 = countries;
//   console.log(part2)
// } else if( countries.length % 2 !== 0){
//   part1 = countries.splice(0 , (countries.length + 1) / 2);
//   part2 = countries;
//   console.log(part1)
//   console.log(part2)
// } else{
//   console.log('error')
// }





// 🎉 CONGRATULATIONS ! 🎉