
// ercises: Level 1

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
//1.  Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.


// const [e , pi , gravity , humanBodyTemp , waterBoilingTemp] = constants;
// console.log(humanBodyTemp)


//2.  Destructure and assign the elements of countries array to fin, est, sw, den, nor




// let [fin , est , sw, den , nor] = countries;
// console.log(sw)
 









//3.  Destructure the rectangle object by its properties or keys.


let {width  , height ,area , perimeter} = rectangle;









// Exercises: Level 2
//1.  Iterate through the users array and get all the keys of the object using destructuring


  // users.forEach(user => {
  //   let{name , scores , skills , age} = user;
  //   console.log(name , scores , skills , age)
  // });






// 2. Find the persons who have less than two skills

// const users = [
//   {
//     name:'Brook',
//     scores:75,
//     skills:['HTM', 'CSS', 'JS'],
//     age:16
//   },
//   {
//     name:'Alex',
//     scores:80,
//     skills:['HTM', 'CSS', 'JS'],
//     age:18
//   },
//   {
//     name:'David',
//     scores:75,
//     skills:['HTM', 'CSS'],
//     age:22
//   },
//   {
//     name:'John',
//     scores:85,
//     skills:['HTML'],
//     age:25
//   },
//   {
//     name:'Sara',
//     scores:95,
//     skills:['HTM', 'CSS', 'JS'],
//     age: 26
//   },
//   {
//     name:'Martha',
//     scores:80,
//     skills:['HTM', 'CSS', 'JS'],
//     age:18
//   },
//   {
//     name:'Thomas',
//     scores:90,
//     skills:['HTM', 'CSS', 'JS'],
//     age:20
//   }
//   ]


// let result  = [];
// users.forEach(user => {
//   let{name , score , skills , age} = user;
//   if(skills.length < 2){
//     result.push(user)
//   }
// });
// console.log(result);








// Exercises: Level 3
// 1. Destructure the countries object print name, capital, population and languages of all countries

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

// countriess.forEach(country => {
//   let{name, capital  , languages , population} = country;
//   console.log(` name: ${name} , capital: ${capital} , languages: ${languages} , population: ${population}`)
// });








// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// // David (4) ["HTM", "CSS", "JS", "React"] 90 95
  
//   let[name , skills , scores] = student;
//   let[ , , jsScore , reactScore] = scores;

//   console.log(name, skills, jsScore, reactScore);















// // 3. Write a function called convertArrayToObject which can convert the array to a structure object.
//     const students = [
//         ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//         ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//       ]

//       [
//       {
//         name: 'David',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [85, 80,85,80]
//       }
//     ]
    
//     function convertArrayToObject(arr){
//       let result = [];
//       for(let i = 0; i < arr.length; i++){
//        let [name, skills ,scores] = arr[i];
//        result.push({
//         name : name,
//         skills : skills,
//         scores: scores
//       })
//     };
//     return result;
//   }
  
  
//   console.log(convertArrayToObject(students))










// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
//     const student = {
//       name: 'David',
//       age: 25,
//       skills: {
//         frontEnd: [
//           { skill: 'HTML', level: 10 },
//           { skill: 'CSS', level: 8 },
//           { skill: 'JS', level: 8 },
//           { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//           { skill: 'Node',level: 7 },
//           { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//           { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//       }
//     }
// The copied object output should look like this:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }

const pattern = /[a].*/g  //. any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']