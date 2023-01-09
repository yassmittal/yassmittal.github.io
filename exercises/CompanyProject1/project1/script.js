let oledTriangle = document.querySelector('.oled-triangle');
let cryptoTriangle = document.querySelector('.crypto-triangle')
let hiddenElements = [...document.querySelectorAll('.hidden-row')];
// let shortDottedLine = document.querySelector('.short-dotted-line');
// let longDottedLine = document.querySelector('.long-dotted-line')
// let outerLineWithCircle = document.querySelector('.outer-line-with-circle');
// let outerLineOnly = document.querySelector('.outer-line-only');
let navChilds = document.querySelectorAll('.nav-div-child-wrapper');
let navSubChilds = document.querySelectorAll('.nav-div-child')
let rightSideHeader = document.querySelector('.right-side-header')
let leftSideHeader = document.querySelector('.left-side-header')
let navCollapsingBtn = document.querySelector('.navCollapsingTab')
let sideBar = document.querySelector('.side-bar')
let users = document.querySelector('.users')
let switchWorkspace = document.querySelector('.switch-workspace')
let personTreeSideAddEls = [...document.querySelectorAll('.person-tree-side-add')];
let mainPersonTrees = [...document.querySelectorAll('.main-person-tree')]
let collapsingTriangles = [...document.querySelectorAll('.triangle')]
let isAllHide;


collapsingTriangles.forEach(collapsingTriangle =>{
  collapsingTriangle.addEventListener('click', (e)=>{
    e.preventDefault();
    e.target.classList.toggle('rotated')
    e.target.parentNode.classList.toggle('active');
    e.target.parentNode.nextElementSibling.nextElementSibling.classList.toggle('hide')
  })
})




// mainPersonTrees.forEach(mainPersonTree => {
//   mainPersonTree.addEventListener('click', (e)=>{
//     e.preventDefault()
//     mainPersonTree.classList.toggle('active')
//   })
// })

// personTreeSideAddEls.forEach(personTreeSideAdd => {
//   personTreeSideAdd.addEventListener('click', (e)=>{


//     // let essentialsDiv = document.createElement('div')
//     // essentialsDiv.innerHTML = `<div class="person-tree-side-add-essentials absolute top-0 right-0 left-0 bottom-0" data-personTreeSideAdd-child>
//     // <div class="bg-gray-500 text-white">
//     //   hi this is yash
//     // </div>
//     // </div>`

//     // console.log(essentialsDiv);

//     personTreeSideAdd.nextElementSibling.classList.toggle('hide')

//   })
// })

document.addEventListener('click', (e)=>{

  if(e.target.matches('.person-tree-side-add')){
    let target = e.target;
    target.classList.toggle('active')
  }else{
    personTreeSideAddEls.forEach(item => {
      item.classList.remove('active')
    })
  }

})


switchWorkspace.addEventListener('click' , (e)=>{

  if(sideBar.classList.contains('collapsed-side-bar')){
    sideBar.classList.remove('collapsed-side-bar')
    leftSideHeader.classList.remove('collapsed-header')
   }

  switchWorkspace.classList.toggle('active')
  document.addEventListener('click' , (e)=>{
    if(!e.target.matches("[data-switchWorkspace]") && !e.target.matches("[data-swithcWorkspace-child]")){
      switchWorkspace.classList.remove('active')
    }
  })
  
})


users.addEventListener('click' , (e)=>{
  
  if(sideBar.classList.contains('collapsed-side-bar')){
    sideBar.classList.remove('collapsed-side-bar')
    leftSideHeader.classList.remove('collapsed-header')
   }

  users.classList.toggle('active')
  document.addEventListener('click' , (e)=>{
    if(!e.target.matches("[data-users]") && !e.target.matches("[data-users-child]")){
      users.classList.remove('active')
    }
  })
  
})

navCollapsingBtn.addEventListener('click' , ()=>{
  sideBar.classList.toggle('collapsed-side-bar');
  leftSideHeader.classList.toggle('collapsed-header')
  navCollapsingBtn.classList.toggle('rotated')
})

let sideBarEls = document.querySelectorAll('.nav-project-div');

rightSideHeader.addEventListener('click' , (e)=>{
  rightSideHeader.classList.toggle('active')
  document.addEventListener('click' , (e)=>{

    if(!e.target.matches("[data-edit-drop-down-button]")){
      rightSideHeader.classList.remove('active')
    }
  })
})

  sideBarEls.forEach(element => {
    element.addEventListener('click' , (e)=>{
      if(sideBar.classList.contains('collapsed-side-bar')){
       sideBar.classList.remove('collapsed-side-bar')
       leftSideHeader.classList.remove('collapsed-header')
       return
      }
    let nextSibling = e.target.nextElementSibling;
    nextSibling.classList.toggle('hide');

    let childrens =  [...nextSibling.children]

    childrens.forEach((child) =>{
      child.classList.remove('active')
    })
    
    })

  });

  navSubChilds.forEach(navChild => {
    navChild.addEventListener('click' , (e)=>{
      navChild.classList.toggle('active')
    })
  })


oledTriangle.addEventListener('click' , (e)=>{
  console.log('clicked');
  e.preventDefault()

  firstTriangleFunction()
  outerLineWithCircle.classList.toggle('hide')
  outerLineOnly.classList.add('decrease-height')
  outerLineWithCircle.classList.add('decrease-height')
  oledTriangle.classList.toggle('rotated');
  shortDottedLine.classList.add('hide')
  cryptoTriangle.classList.remove('rotated')

});

cryptoTriangle.addEventListener('click' , (e)=>{
  e.preventDefault()
  shortDottedLine.classList.toggle('hide')
  cryptoTriangle.classList.toggle('rotated')
  for(let i = 1; i < hiddenElements.length; i++){
    hiddenElements[i].classList.toggle('hide')
  }
  
  outerLineOnly.classList.toggle('decrease-height');
  outerLineWithCircle.classList.toggle('decrease-height')
})


function firstTriangleFunction(){

 isAllHide = hiddenElements.every((item) =>{
  return item.classList.contains('hide')
 })

 if(isAllHide === true){
  hiddenElements[0].classList.toggle('hide');
 }else{
  hiddenElements.forEach(item => {
    item.classList.add('hide')
  });

 }
}