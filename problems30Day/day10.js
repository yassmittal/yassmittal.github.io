// Exercises:Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// 1. create an empty set

// let set1 = new Set();
// console.log(set1);





// 2. Create a set containing 0 to 10 using loop



// let set1 = new Set();

// for(let i = 0; i <= 10; i++){
//   set1.add(i)
// }

// console.log(set1)








//3.  Remove an element from a set
// let set1 = new Set();

// for(let i = 0; i <= 10; i++){
//   set1.add(i)
// }

// set1.delete(1)
// console.log(set1)





// 4. Clear a set



// let set1 = new Set();

// for(let i = 0; i <= 10; i++){
//   set1.add(i)
// }

// console.log(set1);

// set1.clear();
// console.log(set1)

// 5. Create a set of 5 string elements from array



// let newArr = ['yash' , 'Is' , 'very' , 'Good' , 'boy' , 'Good'];

// let set1 = new Set(newArr);
// console.log(set1)













// 6. Create a map of countries and number of characters of a country


// let countriesArr = [
//   ['India' , 5],
//   ['Australia' , 9],
//   ['Russia' , 6],
//   ['Arab' , 4]
// ]

// let map1 = new Map(countriesArr);
// console.log(map1)





// Exercises:Level 2

// 1. Find a union b


// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]

// let c = [...a , ...b];

// let C = new Set(c);
// console.log(C)


//2.  Find a intersection b

// let c = [];

// a.forEach(number => {
//   if(b.includes(number)){
//     c.push(number)
//   }
// });

// let B = new Set(b);
// let A = new Set(a)

// c = a.filter(num => B.has(num))

// let C = new Set(c)
// console.log(C)



// 3. Find a with b ???????????????????????????????







// Exercises:Level 3



const countriess = [
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

// 1. How many languages are there in the countries object file.

  let repeatedLanguages = countriess.map(country => country.languages);

  let totalLanguages = [];

  // console.log(repeatedLanguages.length)

  repeatedLanguages.forEach(language => {
    language.forEach(lang => {
      totalLanguages.push(lang)
    })
  });

 let nonRepeatdLanguages = new Set(totalLanguages)

// console.log(nonRepeatdLanguages.length);





// *** Use the countriess data to find the 10 most spoken languages:



//  const mostSpokenLanguages = [];

// function mostSpokenLanguagess(){

//   for(let i in nonRepeatdLanguages){
//    let sameLangArr =  repeatedLanguages.filter(language => language === i);
//    mostSpokenLanguages.push({ i : sameLangArr.length})
//   }
//  return mostSpokenLanguages;
// }

// console.log(mostSpokenLanguagess())


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]






