// Create a div container on HTML document and create 1 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

let div = document.createElement('div');
document.body.appendChild(div);


for(let i = 1; i <= 100; i++){
  let para = document.createElement('p');
  div.appendChild(para)
  para.textContent += i;
}

let numbers = document.querySelectorAll('p');

let numArray = []

for(let i = 0; i < numbers.length; i++){
  numArray.push(+numbers[i].textContent)
}
