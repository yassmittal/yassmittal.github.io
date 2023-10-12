// Exercises: Level 1
//1. Create an empty object called dog

// let dog = {};



// 2. Print the the dog object on the console
// let dog = {};
// console.log(dog);




// 3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

// let dog = {};
// dog.name = 'yash';
// dog.legs = 4;
// dog.color = 'brown';
// dog.bark = function() {
//   return 'woof woof'
// }





//4.  Get name, legs, color, age and bark value from the dog object

// let dog = {};
// dog.name = 'yash';
// dog.legs = 4;
// dog.color = 'brown';
// dog.bark = function() {
//   return 'woof woof'
// }


// console.log(dog.name , dog.legs , dog['color'] , dog.bark())




//5.  Set new properties the dog object: breed, getDogInfo


// dog.breed = 'a special human type dog';
// dog.getDogInfo = `The name of this dog is ${dog.name} , 
//  this dog has ${dog.legs} legs , dog's color is ${dog.color} ,
//  dog's bark is ${dog.bark()} , And dog's breed is ${dog.breed}`;



//  console.log(dog.getDogInfo)



// Exercises: Level 2

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }



// 1. Find the person who has many skills in the users object.
// let skills = [];
// for (const user in users) {
//   skills.push(users[user]['skills'].length);
// }

// skills.sort((a,b) => a - b)
// console.log(skills[skills.length - 1]);


// 2. Count logged in users, count users having greater than equal to 50 points from the following object.

// let maxPointsUser = [];
// for (const user in users) {
//   if(users[user].points >= 50){
//     maxPointsUser.push(user)
//   }
//   }
// console.log(maxPointsUser.length)



// let loggedInUsers = [];
// for (const user in users) {
//   if(users[user].isLoggedIn === true){
//     loggedInUsers.push(user)
//   }
//   }


// console.log(loggedInUsers.length);








// 3. Find people who are MERN stack developer from the users object

// let MERNDeveloper = [];
// for (const user in users) {
//   if(users[user].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')){
//     MERNDeveloper.push(user)
//   }
//   }

// console.log(MERNDeveloper);







//4.  Set your name in the users object without modifying the original users object


// function setMyNameInObj(myName){
//   let newUsersObj = {...users};
//    newUsersObj.Yash = myName;
//   return newUsersObj;
// }


// let Yash = {
//   email: 'Yashmittalmm@gmail.com',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//   age: 19,
//   isLoggedIn: true,
//   points: 60
// }

// console.log(setMyNameInObj(Yash));



// 5. Get all keys or properties of users object

// console.log(Object.keys(users));

// for (const key in users) {
//   console.log(key)
// }



// Get all the values of users object

// console.log(Object.values(users))

// for (const key in users) {
//   console.log(users[key]);
// }




// 6. Use the countries object to print a country name, capital, populations and languages.


// const countries = [
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
//   }]

// let result = countries.map((item)=> {
//     return {Name: item.name ,
//             capital: item.capital,
//             languages: item.languages,
//             population: item.population}
//   })


// console.log(result);







// Exercises: Level 3
// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


// let personAccount = {
//   firstName: "yash",
//   lastName: 'mittal',
  
// }
















// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

//     const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]
// 2. Imagine you are getting the above users collection from a MongoDB database.


// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.


// function signUp(user){
// let isExist =  users.some((item) => {
//     return user._id === item._id;
//   });
//   if(isExist === false){
//     users.push(user);
//     return 'Account created successfully'
//   } else {
//     return 'You have already an account'
//   }
// }

// let Yash = {
//   _id: 'ab12ex',
//   username: 'Alex',
//   email: 'alex@alex.com',
//   password: '123123',
//   createdAt:'08/01/2020 9:00 AM',
//   isLoggedIn: false
// };

// let yash2  = {
//   _id: 'ab12ex8',
//   username: 'Alex',
//   email: 'alex@alex.com',
//   password: '123123',
//   createdAt:'08/01/2020 9:00 AM',
//   isLoggedIn: false
// }

// // console.log(signUp(yash2))
// // console.log(signUp(yash2))
// // console.log(signUp(Yash));
// // console.log(signUp(Yash));
// // console.log(signUp(Yash));




// // b. Create a function called signIn which allows user to sign in to the application

// function signIn(user){
//   let isExist = users.some((item)=> user._id === item._id);
//   if(isExist === true){
//     console.log(`Welcome back`)
//     return users.filter((item) => item._id === user._id);
//   } else{
//     return('first create an account by clicking signup button')
//   }
// }

// // signIn(Yash);
// // signIn(Yash);
// // signIn(yash2);
// console.log(signIn(yash2));
// console.log(Yash)


// 2. The products array has three elements and each of them has six properties.


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


// a. Create a function called rateProduct which rates the product *********not completed by me try it************

// sol: -


let yash ={
  _id: 'ghderc',
  username: 'Thomas',
  email: 'thomas@thomas.com',
  password: '123333',
  createdAt:'08/01/2020 10:00 AM',
  isLoggedIn: false
}


let smartTV =  {
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
};

// [
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [ [Object] ],
//     likes: [ 'fg12cy' ]
//   }
// ]

// function rateProduct(UserWhoRated , rating , productWhichRated){
// let product = products.filter((item) => {
//    return  productWhichRated._id === item._id;
//   });

//   // console.log(product)
//  let neww = product.map((item) => {
//     // item[0].ratings.push({userId : UserWhoRated._id,rating: rating});
//     return  item['ratings'] = item['ratings'].slice(item['ratings'].length - 1  , 0 , {userId : UserWhoRated._id,rating: rating});
//     console.log(item)

//   })
//   console.log(neww);

    // product.ratings.push({userId : UserWhoRated._id,rating: rating})     
// }


// rateProduct(yash , 8 , smartTV)
// console.log(products);









// b. Create a function called averageRating which calculate the average rating of a product ***not completed can you help****



// function averageRating(product){
//   let average = 0;
//   let product1;
//   let isExist = products.some((item) => {
//     return item._id === product._id;
//   })

//   if(isExist === true){
//    product1 =  products.filter((item) => {
//       return item._id === product._id;
//     })
//   }

//   for(let i = 0; i < product1[0].ratings ; i++){
//     average += product[0].ratings[i].rate;
//   }
//   console.log(average);
//   // console.log(product1[0].ratings[0].rate)

// //   rating = product1[0].ratings((average  , item) => {
// //      return average + item
// //   } , 0)
// }

// let product = {
//   _id: 'hedfcg',
//   name: 'TV',
//   description: 'Smart TV:Procaster',
//   price: 400,
//   ratings: [{ userId: 'fg12cy', rate: 5 }],
//   likes: ['fg12cy']
//   }


// console.log(averageRating(product));










// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

