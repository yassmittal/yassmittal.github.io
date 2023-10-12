let button  = document.querySelector('button');
let body = document.querySelector('body');
let colorName = document.querySelector('.color-name')


let colorsArray = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' , 'A' , 'B' , 'C' , 'D' , 'E' , 'F' ];

let color = ``;

addHexColor();

button.addEventListener('click' , addHexColor)

    function addHexColor(){

      for(let i = 1; i <= 6; i++){
        color += `${colorsArray[Math.floor(Math.random()*16)]}`;
      }
      
      body.style.background =  `#${color}`;
      colorName.textContent =  `#${color}`;
      console.log(color)
      color = '';
    }