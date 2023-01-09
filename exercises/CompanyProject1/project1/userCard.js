let sideBarElements = document.querySelectorAll('.side-bar .hide')
let samsungEl = document.querySelector('.samsung-div');
// let samsungSideDiv = document.querySelector('.div');
let moreDotbuttons = [...document.querySelectorAll('.three-dots-icon')];
let editDeleteWrapperEls = [...document.querySelectorAll('.edit-delete-wrapper')]

samsungEl.addEventListener('click' ,(e)=>{
  e.preventDefault()
  sideBarElements.forEach((item) =>{
    item.classList.toggle('hide')
  })
})

    for(let i = 0; i < moreDotbuttons.length; i++){
      moreDotbuttons[i].addEventListener('click' , (e) => {
        let currentElement = editDeleteWrapperEls[i];
        editDeleteWrapperEls.forEach((item) =>{
          if (item !== currentElement) {
            item.classList.add('hide');
          }
        });
    
        if (currentElement.classList.contains('hide')) {
          currentElement.classList.remove('hide');
        } else {
          currentElement.classList.add('hide');
        }
      });
    }
    
    // document.addEventListener('click' , (e)=>{
    //   editDeleteWrapperEls.forEach((item) => {
    //     if(e.target !== item && moreDotbuttons.includes(e.target)){
    //       item.classList.add('hide');
    //     }
    //   });
    // });
