// Exercises: Level 1
                // ********************* 1.*************************
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// let firstName = "yash";
// let lastName = "Mittal";
// let country = "India";
// let city = "Joura";
// let age = 19;
// let isMarried = false;
// let year = 2021;

// console.log(typeof(firstName));
// console.log(typeof(lastName));
// console.log(typeof(country));
// console.log(typeof(city));
// console.log(typeof(age));
// console.log(typeof(isMarried));
// console.log(typeof(year));

// ***************************************first question complete******************************************************


                // ********************* 2.*************************


// Check if type of '10' is equal to 10


// let stringnumber = '10';
// let number = 10;
// console.log(typeof(stringnumber) === typeof(number));



// ***************************************second question complete******************************************************


                // ********************* 3.*************************


// Check if parseInt('9.8') is equal to 10


// console.log( parseInt('9.8') === 10);



// ***************************************third question complete******************************************************



                // ********************* 4.*************************


// Boolean value is either true or false.

      // Write three JavaScript statement which provide truthy value.
      // Write three JavaScript statement which provide falsy value.


        // let valueT1 = 8 == '8';
        // let valueT2 = null == undefined;
        // let valueT3 = typeof(false) === typeof(true);
        // let valueT4 = 8 ** 8 == 8*8*8*8*8*8*8*8;





        // let valueF1 = ( 7 + 2) * 5 === 7 + 2 * 5;
        // let valueF2 =  null === undefined;
        // let valueF3 = 7 ==="7";
        // let valueF4 = true == false;

        // console.log(valueT1);
        // console.log(valueT2);
        // console.log(valueT3);
        // console.log(valueT4);
        // console.log(valueF1);
        // console.log(valueF2);
        // console.log(valueF3);
        // console.log(valueF4);




// ***************************************fourth question complete******************************************************



      
                // ********************* 5.*************************


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

        // 4 > 3
        // 4 >= 3
        // 4 < 3
        // 4 <= 3
        // 4 == 4
        // 4 === 4
        // 4 != 4
        // 4 !== 4
        // 4 != '4'
        // 4 == '4'
        // 4 === '4'
        // Find the length of python and jargon and make a falsy comparison statement.

          // console.log(4 > 3)// == true;
          // console.log(4 >= 3)// == true;
          // console.log(4 < 3)// == false;
          // console.log(4 <= 3) //== false;
          // console.log(4 == 4) //== true;
          // console.log(4 === 4)// == true;
          // console.log(4 != 4)// == false;
          // console.log(4 !== 4)// == false;
          // console.log(4 != 4) //== false;
          // console.log(4 == 4) //== true;
          // console.log(4 === 4) //= true;

        //   let length1 = 'python'.length;
        //   var length2 = 'jargon'.length;
          
        //  length2 = toString(length2);

        // console.log(length1 === length2);





// ***************************************fifth question complete******************************************************


                // ********************* 6.*************************




// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 answer = true;
// 4 > 3 && 10 > 12 answer = false;
// 4 > 3 || 10 < 12 answer = true;
// 4 > 3 || 10 > 12 answer = true;
// !(4 > 3)         answer = false;
// !(4 < 3)         answer = true;          
// !(false)         answer = true;    
// !(4 > 3 && 10 < 12) answer = false;
// !(4 > 3 && 10 > 12) answer = true;
// !(4 === '4') answer = true;
// There is no 'on' in both dragon and python *** answer = false;

// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log(4 > 3 || 10 > 12);
// console.log(!(4 > 3));
// console.log(!(4 < 3));
// console.log( !(false));
// console.log(!(4 > 3 && 10 < 12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === '4'));



// let string1 = 'dragon';
// let string2 = 'python';


// let on1 = string1.includes('on');
// let on2 = string2.includes('on');


// console.log(on1);
// console.log(on2);



// ***************************************sixth question complete******************************************************





                // ********************* 7........*************************




// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.


// let currenttime = new Date();
// console.log(currenttime);


// console.log(currenttime.getFullYear());
// console.log(currenttime.getMonth() + 1);
// console.log(currenttime.getDate());
// console.log(currenttime.getDay() + 1);
// console.log(currenttime.getHours());
// console.log(currenttime.getMinutes());
// console.log(currenttime.getTime());





// **********++++++++++++=======complete level 1 =======++++++++++********************************************************









//                                                       ===Exercises: Level 2===

                                           // ********************* 1........*************************



// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100


// let base = prompt('Write the base of your triangle', '');
// let height = prompt('Write the height of your triangle', '');


// let area = base * height;
// alert(area);




// ***************************************first question complete******************************************************


                                           // ********************* 2........*************************


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12



// let sideA = prompt('Enter side A', '' )
// let sideB = prompt('Enter side B', '' )
// let sideC = prompt('Enter side C', '' )
// alert( `The perimeter of the triangle is ${+sideA + +sideB + +sideC}`);


// ***************************************second question complete******************************************************


                                           // ********************* 3................*************************

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))



// let length = prompt('Give you length of rectangle' , '');
// let width = prompt('Give you width of rectangle' , '');

// alert(`Area of triangle is ${length * width}`);
// alert(`perimeter of triangle is${ 2 *( +length + +width)}`);


// ***************************************third question complete******************************************************


                                           // ********************* 4................*************************



// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


// let radius = prompt('Enter your radius of circle here!' , '');
// const pi = 3.14;

// alert(`Area of circle is ${ pi * radius **2}`);
// alert(`circumference of circle is ${2 * pi * radius}`);

// alert(`Area of circle is ${ Math.PI * radius **2}`);
// alert(`circumference of circle is ${2 * Math.PI * radius}`);





// ***************************************fourth question complete******************************************************



                                           // ********************* 5................*************************/////////////============+++++++++++++++++++++++++++++

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// let slope1 = 2;
// let x_intercept = (0 + 2)/2;
// let y_intercept = (2*0) - 2;
// console.log(slope1)
// console.log(x_intercept)
// console.log(y_intercept)




// ***************************************fifth question complete******************************************************


                                           // ********************* 6................*************************/////////////============+++++++++++++++++++++++++++++


// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)



// let slope2 = (10 - 2)/(6 - 2);
// console.log(slope2);



// ***************************************sixth question complete******************************************************






                                           // ********************* 7................*************************/////////////============+++++++++++++++++++++++++++++

// Compare the slope of above two questions.


// let compare = slope1 === slope2;

// console.log(compare);

// ***************************************seventh question complete******************************************************





                                           // ********************* 8................*************************/////////////============+++++++++++++++++++++++++++++


// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// ============================================doubt doubt doubt doubt doubt doubt doubt=========================================


// let y;
// // let x;
                                                                      
// function verify(x){
//  y = (x**2 + 6*x + 9);

//  console.log(y);
//   // console.log(0 === (x**2 + 6*x + 9)) 
// }

// verify(9);
// console.log(verify(3));





                                           // ********************* 9................*************************/////////////============+++++++++++++++++++++++++++++

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120



// let hours = prompt('Please enter hours taken by you' , '');
// let rate = prompt('please enter rate per hour', '');

// alert(`Your weekly earning is ${hours * rate}`);

// ***************************************ninth question complete******************************************************






                                           // ********************* 10................*************************/////////////============+++++++++++++++++++++++++++++

// If the length of your name is greater than 7 say, your name is long else say your name is short.


// let Name = prompt('Your Name Is');

// if(Name.length > 7){
//   alert('Your Name is long');
// } else{
//   alert('your name is short');
// }

// ***************************************tenth question complete******************************************************







                                           // ********************* 11................*************************/////////////============+++++++++++++++++++++++++++++

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh


// let firstName = 'Yashmita';
// let lastName = 'mittal';

// if (firstName.length > lastName.length){
//   alert(`Your First Name, ${firstName} is longer than you family name, ${lastName}`);
// } else {
//   alert(`Your First Name, ${firstName} is shorter than you family name, ${lastName}`);
// }

// ***************************************eleventh question complete******************************************************







                                           // ********************* 12................*************************/////////////============+++++++++++++++++++++++++++++

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

// let myAge = 250;
// let yourAge = 25;

// if(myAge > yourAge){
//   alert(` I am ${myAge - yourAge} years older than you.`)
// } else if (myAge = yourAge){
//   alert(`I aa equal to your age`)
// } else {
//   alert(`YOu are ${yourAge - myAge} years older than me`);
// };


// ***************************************twelth question complete******************************************************





                                           // ********************* 13................*************************/////////////============+++++++++++++++++++++++++++++


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.



// let yearOfBorn = prompt('In Which Year You Was born?');

// if (2021 - yearOfBorn >= 18){
//   alert(`You are ${2021 - yearOfBorn}. You are old enough to drive`);
// } else {
//   alert( `you are${2021 - yearOfBorn}. YOu will be allowed to drive after ${ 18 -(2021 - yearOfBorn)} years`);
// }


// ***************************************thirteenth question complete******************************************************







                                           // ********************* 14................*************************/////////////============+++++++++++++++++++++++++++++

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.


// let yearsLive = prompt('Enter Numbers Of Years You lived');
// alert(`You lived ${ yearsLive*365*24*60*60}`);



// ***************************************fourteen question complete******************************************************






                                           // ********************* 15................*************************/////////////============+++++++++++++++++++++++++++++


// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm



const time = new Date();

let currentYear = time.getFullYear();
let currentMonth = (time.getMonth() + 1);
let currentDate = time.getDate();
let currentHour = time.getHours();
let currentMinute = time.getMinutes();

let timeformat1 = `${currentYear}-${currentMonth}-${currentDate} ${currentHour}:${currentMinute}`;
let timeformat2 = `${currentDate}-${currentMonth}-${currentYear} ${currentHour}:${currentMinute}`;
let timeformat3 = `${currentDate}/${currentMonth}/${currentYear} ${currentHour}:${currentMinute}`;


// console.log(timeformat1);
// console.log(timeformat2);
// console.log(timeformat3);

// ***************************************fifteenth question complete******************************************************

// ===================================================new level 3=========================================================================


// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05








