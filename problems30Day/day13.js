// Exercises:Level 1
// Display the countries array as a table


// const countriess = [
//   {
//     name: 'Afghanistan',
//     capital: 'Kabul',
//     languages: ['Pashto', 'Uzbek', 'Turkmen'],
//     population: 27657145,
//     flag: 'https://restcountries.eu/data/afg.svg',
//     currency: 'Afghan afghani'
//   },
//   {
//     name: 'Åland Islands',
//     capital: 'Mariehamn',
//     languages: ['Swedish'],
//     population: 28875,
//     flag: 'https://restcountries.eu/data/ala.svg',
//     currency: 'Euro'
//   },
//   {
//     name: 'Albania',
//     capital: 'Tirana',
//     languages: ['Albanian'],
//     population: 2886026,
//     flag: 'https://restcountries.eu/data/alb.svg',
//     currency: 'Albanian lek'
//   },
//   {
//     name: 'Algeria',
//     capital: 'Algiers',
//     languages: ['Arabic'],
//     population: 40400000,
//     flag: 'https://restcountries.eu/data/dza.svg',
//     currency: 'Algerian dinar'
//   },
//   {
//     name: 'American Samoa',
//     capital: 'Pago Pago',
//     languages: ['English', 'Samoan'],
//     population: 57100,
//     flag: 'https://restcountries.eu/data/asm.svg',
//     currency: 'United State Dollar'
//   },
//   {
//     name: 'Andorra',
//     capital: 'Andorra la Vella',
//     languages: ['Catalan'],
//     population: 78014,
//     flag: 'https://restcountries.eu/data/and.svg',
//     currency: 'Euro'
//   },
//   {
//     name: 'Angola',
//     capital: 'Luanda',
//     languages: ['Portuguese'],
//     population: 25868000,
//     flag: 'https://restcountries.eu/data/ago.svg',
//     currency: 'Angolan kwanza'
//   },
//   {
//     name: 'Anguilla',
//     capital: 'The Valley',
//     languages: ['English'],
//     population: 13452,
//     flag: 'https://restcountries.eu/data/aia.svg',
//     currency: 'East Caribbean dollar'
//   },
//   {
//     name: 'Antarctica',
//     capital: '',
//     languages: ['English', 'Russian'],
//     population: 1000,
//     flag: 'https://restcountries.eu/data/ata.svg',
//     currency: 'Australian dollar'
//   },
//   {
//     name: 'Antigua and Barbuda',
//     capital: "Saint John's",
//     languages: ['English'],
//     population: 86295,
//     flag: 'https://restcountries.eu/data/atg.svg',
//     currency: 'East Caribbean dollar'
//   },
//   {
//     name: 'Argentina',
//     capital: 'Buenos Aires',
//     languages: ['Spanish', 'Guaraní'],
//     population: 43590400,
//     flag: 'https://restcountries.eu/data/arg.svg',
//     currency: 'Argentine peso'
//   },
//   {
//     name: 'Armenia',
//     capital: 'Yerevan',
//     languages: ['Armenian', 'Russian'],
//     population: 2994400,
//     flag: 'https://restcountries.eu/data/arm.svg',
//     currency: 'Armenian dram'
//   },
//   {
//     name: 'Aruba',
//     capital: 'Oranjestad',
//     languages: ['Dutch', '(Eastern) Punjabi'],
//     population: 107394,
//     flag: 'https://restcountries.eu/data/abw.svg',
//     currency: 'Aruban florin'
//   },
//   {
//     name: 'Australia',
//     capital: 'Canberra',
//     languages: ['English'],
//     population: 24117360,
//     flag: 'https://restcountries.eu/data/aus.svg',
//     currency: 'Australian dollar'
//   },
//   {
//     name: 'Austria',
//     capital: 'Vienna',
//     languages: ['German'],
//     population: 8725931,
//     flag: 'https://restcountries.eu/data/aut.svg',
//     currency: 'Euro'
//   },
//   {
//     name: 'Azerbaijan',
//     capital: 'Baku',
//     languages: ['Azerbaijani'],
//     population: 9730500,
//     flag: 'https://restcountries.eu/data/aze.svg',
//     currency: 'Azerbaijani manat'
//   },
//   {
//     name: 'Bahamas',
//     capital: 'Nassau',
//     languages: ['English'],
//     population: 378040,
//     flag: 'https://restcountries.eu/data/bhs.svg',
//     currency: 'Bahamian dollar'
//   },
//   {
//     name: 'Bahrain',
//     capital: 'Manama',
//     languages: ['Arabic'],
//     population: 1404900,
//     flag: 'https://restcountries.eu/data/bhr.svg',
//     currency: 'Bahraini dinar'
//   },
//   {
//     name: 'Bangladesh',
//     capital: 'Dhaka',
//     languages: ['Bengali'],
//     population: 161006790,
//     flag: 'https://restcountries.eu/data/bgd.svg',
//     currency: 'Bangladeshi taka'
//   },
//   {
//     name: 'Barbados',
//     capital: 'Bridgetown',
//     languages: ['English'],
//     population: 285000,
//     flag: 'https://restcountries.eu/data/brb.svg',
//     currency: 'Barbadian dollar'
//   }]

  // console.table(countriess)

//2.  Display the countries object as a table

// 1. Use console.group() to group logs

// console.group();
// console.log('this is the first element of groping logs')
// console.log('this is the second element of groping logs')
// console.log('this is the third element of groping logs')
// console.log('this is the fourth element of groping logs')
// console.groupEnd();
// Exercises:Level 2
// 1. 10 > 2 * 10 use console.assert()

// console.assert( 10 > 2 * 10  , 'ten is not greater than 10 * 2')

//2.  Write a warning message using console.warn()

// console.warn('this is the warning message that can not be differentiated with console.log() in vs console but can be clearly differentiated in browser console');

// 3. Write an error message using console.error()

// console.error('this is the error message that can not be differentiated with console.log() in vs console but can be clearly differentiated in browser console')

// Exercises:Level 3
// 1. Check the speed difference among the following loops: while, for, for of, forEach

//  const names = ['yash' , 'sakshi' , 'piyush' , 'raman'];

//  console.time();
//  let i = 0;
//  while ( i < names.length) {
//   console.log(names[i]);
//   i++;
//  }

//  console.timeEnd();

//  console.time();

//  for (let index = 0; index < names.length; index++) {
//   console.log(names[index]);
//  }

//  console.timeEnd()

//  console.time();

//  for (const name of names) {
//   console.log(name)
//  }

//  console.timeEnd()

//  console.time();


//  names.forEach(element => {
//   console.log(element)
//  });

//  console.timeEnd()


