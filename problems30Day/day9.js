// Exercises: Level 1
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



// 1. Explain the difference between forEach, map, filter, and reduce.

// solution:-
//  Differnce betwen forEach Map Filter and reduce is exaplained by their uses on 'Array'

// foreach:-  foreach method takes an array and apply a function(which is provided as an argument of the foreach function also known as callback function) to all its elements line by line;

// map:- Map method actually applies on an array. it takes a  function paramter and do some operation on the every element of the array on which the map method is applied and the return statement of this function parameter is stored in a new array;

// filter:- filter also applies on array but the Differnce is that it filters elements based on the condition passed in the return statement of the callback function of filter method. it return the array elements which met the condition and we can store the result array containing filtered elements in the new variable;

// reduce:- reduce function takes 4 parameters on the callback function which is one more than other methods of array.
//   different paremeter is the first parameter of callback function called accumulator;
//   reduce also takes an optional second second parameter called initial value 
//   first argument of filter is callback function and the second is initial value(optional);
//   if we didn't pass any initial value then reduce method makes the first parameter its initial value;
  
//   actually the operation in the callback function is first aplied on the initial value and the first element of the array then result of the operation is stored in accumulator then with accumulator same operation is repeated with the accumulator and the second element of array and so on untill the last element of array is reached;

//   if initial value is not passed then in first iteration accumulator becomes first element and the second Element becomes second parameter of the callback function due to which first step  does not happens;

  







//2.  Define a callback function before you use it in forEach, map, filter or reduce.

// callback function is the function which is used as a parameter in various array methods like foreach map filter or reduce;
// these methods work according to return statement of the callback function


//3.  Use forEach to console.log each country in the countries array.

// countries.forEach((item) => console.log(item))





// 4. Use forEach to console.log each name in the names array.

// names.forEach((item) => console.log(item))


//5.  Use forEach to console.log each number in the numbers array.

// numbers.forEach((number) => console.log(number))






// 6. Use map to create a new array by changing each country to uppercase in the countries array.



// const uppercaseCountries = countries.map((country) => country.toUpperCase())

// console.log(uppercaseCountries);






//7.  Use map to create an array of countries length from countries array.


// let countriesLength = countries.map((country) => country.length)
// console.log(countriesLength)




// 8. Use map to create a new array by changing each number to square in the numbers array


// const squareArray = numbers.map((number) => number * number)
// console.log(squareArray)






//9.  Use map to change to each name to uppercase in the names array

// const upperCaseNames = names.map((name) => name.toUpperCase());
// console.log(upperCaseNames)





//10. Use map to map the products array to its corresponding prices.




// const prices = products.map(product => product.price);
// console.log(prices)









// 11. Use filter to filter out countries containing land.

// const countriesContainingLand = countries.filter(country => country.includes('land') || country.includes('Land') )

// console.log(countriesContainingLand)




//12.  Use filter to filter out countries having six character.


// let sixCharacterCountries = countries.filter(country => country.length === 6)
// console.log(sixCharacterCountries);


//13.  Use filter to filter out countries containing six letters and more in the country array.

// let morethanSixLetterCountry = countries.filter(country => country.length >= 6)

// console.log(morethanSixLetterCountry)







//14.  Use filter to filter out country start with 'E';


// let countryStartWithE = countries.filter(country => country.startsWith('E'))

// console.log(countryStartWithE);





//15.  Use filter to filter out only prices with values.


//  let productsPriceHavingValue = products.filter(product => product.price != ' ' && product.price != '');
//   console.log(productsPriceHavingValue);












//16.  Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// function getOnlyStrings(array){
//   return array.filter(item => typeof(item) === 'string')
// }

// console.log(getOnlyStrings([98 , 'yash' , true , {yash: 78} , undefined , null , 'nextString' , 'oneMoreString']))












//17. Use reduce to sum all the numbers in the numbers array.


// let sumOfElementOfArray = numbers.reduce((accumulaltor , sum) => sum + accumulaltor , 0)
// console.log(sumOfElementOfArray)









//18.  Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries ********not completed need help


// let sentence = countries.reduce((accumulator, country , index , array) => {
//   accumulator + country;
// });

// console.log(sentence);















// 19. Explain the difference between some and every


//some check if any of the item meet the condition given in the return of fallback function whereas every checks if all of the elements of array meet the condition;
//key difference is 'some return true if any of the element meet condition whereas every returns true if and only if all of the elements meet condition'







//20.  Use some to check if some names' length greater than seven in names array

// console.log(names.some(name => name.length > 7));






//21.  Use every to check if all the countries contain the word land

// console.log([countries].every(country => country.includes('land')));








//22.  Explain the difference between find and findIndex.

// Find returns the  first whole whole element which meet condition provided in the return statement of fallback function whereas findIndex returns the index of element which meet the condition provided in the return statement of fallback function;







// 23. Use find to find the first country containing only six letters in the countries array


// console.log(countries.find(country => country.length === 6));























// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

// console.log(countries.findIndex(country => country.length === 6));








//25.  Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

// let GetPosition = countries.findIndex(country => country === 'Norway')
// console.log(GetPosition)




// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.


// console.log(countries.findIndex(country => country === 'Russia'))







// Exercises: Level 2


// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))


// let totalPrice = products.filter(product => product.price != '' && product.price != ' ').map(product => product.price).reduce((accumulaltor , price) => accumulaltor + price )

// console.log(totalPrice)








//2.  Find the sum of price of products using only reduce reduce(callback))


// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]


// const sumOfPrice = products.reduce((acc , product) => {
//   if(typeof(product.price) === 'number'){
//     return acc + product.price;
//   }else return acc;
// } , 0 )


// console.log(sumOfPrice);





const countries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://restcountries.eu/data/dza.svg',
    currency: 'Algerian dinar'
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://restcountries.eu/data/asm.svg',
    currency: 'United State Dollar'
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://restcountries.eu/data/and.svg',
    currency: 'Euro'
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://restcountries.eu/data/ago.svg',
    currency: 'Angolan kwanza'
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    languages: ['English'],
    population: 13452,
    flag: 'https://restcountries.eu/data/aia.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Antarctica',
    capital: '',
    languages: ['English', 'Russian'],
    population: 1000,
    flag: 'https://restcountries.eu/data/ata.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    languages: ['English'],
    population: 86295,
    flag: 'https://restcountries.eu/data/atg.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    languages: ['Spanish', 'Guaraní'],
    population: 43590400,
    flag: 'https://restcountries.eu/data/arg.svg',
    currency: 'Argentine peso'
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    languages: ['Armenian', 'Russian'],
    population: 2994400,
    flag: 'https://restcountries.eu/data/arm.svg',
    currency: 'Armenian dram'
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    languages: ['Dutch', '(Eastern) Punjabi'],
    population: 107394,
    flag: 'https://restcountries.eu/data/abw.svg',
    currency: 'Aruban florin'
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    languages: ['English'],
    population: 24117360,
    flag: 'https://restcountries.eu/data/aus.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    languages: ['German'],
    population: 8725931,
    flag: 'https://restcountries.eu/data/aut.svg',
    currency: 'Euro'
  },
  {
    name: 'Azerbaijan',
    capital: 'Baku',
    languages: ['Azerbaijani'],
    population: 9730500,
    flag: 'https://restcountries.eu/data/aze.svg',
    currency: 'Azerbaijani manat'
  },
  {
    name: 'Bahamas',
    capital: 'Nassau',
    languages: ['English'],
    population: 378040,
    flag: 'https://restcountries.eu/data/bhs.svg',
    currency: 'Bahamian dollar'
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    languages: ['Arabic'],
    population: 1404900,
    flag: 'https://restcountries.eu/data/bhr.svg',
    currency: 'Bahraini dinar'
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    languages: ['Bengali'],
    population: 161006790,
    flag: 'https://restcountries.eu/data/bgd.svg',
    currency: 'Bangladeshi taka'
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    languages: ['English'],
    population: 285000,
    flag: 'https://restcountries.eu/data/brb.svg',
    currency: 'Barbadian dollar'
  }]
  
  // 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).



//4.  Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.



// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array



// function getFirstTenCountries(coutriesArray ){
//   let TenCountriesArray = []
//   for(let i = 0; i < 10 ; i++){
//   TenCountriesArray.push(countries[i])
//   }
//  return TenCountriesArray.map((country) => country.name)
// }

// console.log(getFirstTenCountries(countries));




//6.  Declare a getLastTenCountries function which which returns the last ten countries in the countries array.


// function getLastTenCountries(countriesArray){
//   let countriesArrayOFfTen = []
//   for(let i = countriesArray.length - 1; i > countriesArray.length - 11; i-- ){
//     countriesArrayOFfTen.push(countriesArray[i])
//   }

//  return countriesArrayOFfTen.map(country => country.name)
// }


// console.log(getLastTenCountries(countries))





// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// Exercises: Level 3
// Use the countries information, in the data folder. Sort countries by name, by capital, by population

// *** Find the 10 most spoken languages:

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```
// *** Use countries_data.js file create a function which create the ten most populated countries

// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```
// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38),



let arr = [
  {name: 'yash', age: 89 , isMarried: false},
  {name: 'sakshi' , age: 21, isMarried : false},
  {name: 'john' , age: 90, isMarried : true}
]

let result = arr.reduce((acc , item) => {
  return [...acc , item.name]
} , [])

// console.log(result)


const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (let company of companies) {
  setOfCompanies.add(company)
}

console.log(setOfCompanies)

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}