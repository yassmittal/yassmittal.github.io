// let goodToggle = document.querySelector('#good-toggle')
// let cheapToggle = document.querySelector('#cheap-toggle')
// let fastToggle = document.querySelector('#fast-toggle');
let allToggles = [...document.querySelectorAll('input')]





for(let i = 0; i < allToggles.length; i++){
  allToggles[i].addEventListener('change', (e)=>{
    e.preventDefault()
  let isAllTrue = allToggles.every(item => {
    return item.checked ===  true;
  })

  if(isAllTrue === true){
    if(e.target.id === 'good-toggle'){
      allToggles[2].checked = false;
    }else if(e.target.id === 'cheap-toggle'){
      allToggles[0].checked = false;
    }else if(e.target.id === 'fast-toggle'){
      allToggles[1].checked = false;
    }
  }

  } )
}





// for(let i = 0; i < allToggles.length; i++){
//   if(allToggles[i].checked === true){
//     console.log('true');
//   }
// }

















// for(let i = 0; i < allToggles.length; i++){
//   allToggles[i].addEventListener('click', ()=>{
//     if(goodToggle.checked && cheapToggle.checked && fastToggle.checked){
//       if(i = 0){
//         allToggles[2].checked = false;
//       }else if(i = 1){
//         allToggles[0].checked = false;
//       }else if(i = 2){
//         allToggles[1].checked = false;
//       }
//     }

//   })
// }





// console.log(goodToggle.checked);
// console.log(cheapToggle.checked);
// console.log(fastToggle.checked);
// console.log(allToggles);


