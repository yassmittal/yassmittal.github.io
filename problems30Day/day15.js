// // Exercises Level 1
// // 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods


// class Animal{
//   constructor(name , age , color , legs){
//     this.name = name;
//     this.age = age;
//     this.color = color;
//     this.legs = legs;
//   }

//   bark(){
//     return 'bow bow bow bow bow'
//   }

//   getAnimalInfo(){
//     return `Hi I am ${this.name}. my age is ${this.age}. I am ${this.color} in color and i have ${this.legs} legs`
//   }

// }

// //


// //2.  Create a Dog and Cat child class from the Animal Class.

// let dog  = new Animal('yash' , 89 , 'black' , 4);
// let cat = new Animal('yassh' , 89, 'white' , 4);

// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.age)
// console.log(dog.bark())
// console.log(dog.getAnimalInfo())

// console.log(cat.legs)
// console.log(cat.color)
// console.log(cat.age)
// console.log(cat.bark())
// console.log(cat.getAnimalInfo())

// Exercises Level 2
// 1. Override the method you create in Animal class

// class Cat extends Animal(){
//   constructor(name , age , color , legs){
//     super(name, age , color , legs);
//   }

//   bark(){
//     console.log('brow, brow, brow')
//   }
// }


// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
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
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.



const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`
  const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue =
      typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
  })
  console.log(usersObj)
  