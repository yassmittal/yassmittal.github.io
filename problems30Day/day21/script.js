// 1. let firstParagraph = document.querySelector('p')

// 2.
// let firstParagraph  = document.querySelector('#firstPara')
// let secondParagraph  = document.querySelector('#secondPara')
// let thirdParagraph  = document.querySelector('#thirdPara')
// let fourthParagraph  = document.querySelector('#fourthPara')

3.
let paragraphElements = document.querySelectorAll('p')

// for(let i = 0; i < paragraphElements.length; i++){
//   console.log(paragraphElements[i].textContent)
// }

// paragraphElements[0].classList.add('firstClassAdded');//these  methods doesn't change the existing attriute
// paragraphElements[1].classList.add('secondClassAdded');
// paragraphElements[2].classList.add('thirdClassAdded');
// paragraphElements[3].classList.add('fourthClassAdded');

// paragraphElements[0].setAttribute('class' , 'bySetAttributefirst')//these  methods change the existing attriute
// paragraphElements[1].setAttribute('class' , 'bySetAttributeSecond')
// paragraphElements[2].setAttribute('class' , 'bySetAttributeThird')
// paragraphElements[3].setAttribute('class' , 'bySetAttributeFourth')

// paragraphElements[0].classList= 'byClassListFirst'//these  methods change the existing attriute
// paragraphElements[1].classList= 'byClassListSecond'
// paragraphElements[2].classList= 'byClassListThird'
// paragraphElements[3].classList= 'byClassListFourth'


// paragraphElements[0].id= 'byidFirst' //these  methods change the existing attriute
// paragraphElements[1].id= 'byidSecond'
// paragraphElements[2].id= 'byidThird'
// paragraphElements[3].id= 'byidFourth'


console.log(paragraphElements)


// for(let i = 0; i <paragraphElements.length; i++){
//   paragraphElements[i].style.color = '#162936';
//   paragraphElements[i].style.backgroundColor = '#683846';
//   paragraphElements[i].style.fontSize = '30px';
//   paragraphElements[i].style.fontWeight = 'bold';
//   paragraphElements[i].style.fontFamily = 'sans-serif';
//   paragraphElements[i].style.padding = '1em';
//   paragraphElements[i].style.margin = '2rem';
// }


// for(let i = 0; i < paragraphElements.length; i++){
//   if(i % 2 === 0){
//     paragraphElements[i].style.color  = 'green';
//   }else{
//     paragraphElements[i].style.color = 'red';
//   }
// }

// for(let i = 0; i < paragraphElements.length; i++){
//   paragraphElements[i].textContent = 'this is the text content set by using testcontent property of javascript by usin for loop it is set to all paragraphs of document';

//   paragraphElements[i].id = 'IdSetUsingJS';

//   paragraphElements[i].classList.add('classAddByJs')
// }

