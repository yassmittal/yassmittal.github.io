let oledTriangle = document.querySelector('.oled-triangle');
let cryptoTriangle = document.querySelector('.crypto-triangle')
let hiddenElements = [...document.querySelectorAll('.hidden-row')];
let navChilds = document.querySelectorAll('.nav-div-child-wrapper');
let navSubChilds = document.querySelectorAll('.nav-div-child')
let rightSideHeader = document.querySelector('.right-side-header')
let leftSideHeader = document.querySelector('.left-side-header')
let navCollapsingBtn = document.querySelector('.navCollapsingTab')
let sideBar = document.querySelector('.side-bar')
let users = document.querySelector('.users')
let addProjectBtn = document.querySelector('.add-project')
let addProjectFn = document.querySelector('.add-project-function')
let switchWorkspace = document.querySelector('.switch-workspace')
let personTreeSideAddEls = [...document.querySelectorAll('.person-tree-side-add')];
let mainPersonTrees = [...document.querySelectorAll('.main-person-tree')]
let collapsingTriangles = [...document.querySelectorAll('.triangle')]
let openModule = document.querySelector('.open-module')
let opneModuleBtn = document.querySelectorAll('.opne-module-btn')
let logoutBtn = document.querySelector('#logout-btn')
let isAllHide;

let threeDotIcons = [...document.querySelectorAll('.three-dot-icon')]

console.log(opneModuleBtn);


opneModuleBtn.forEach(button => {
  button.addEventListener('click', (e)=>{
    openModule.classList.add('active')
  })
})

document.addEventListener('click', (event)=>{

  if(event.target.matches('.activated')){
    event.target.classList.remove('activated')
    return
  }
  threeDotIcons.forEach(icon =>{
    icon.classList.remove('activated')
  })

  if(event.target.matches('.three-dot-icon')){
    event.target.classList.toggle('activated')
    return
  }

  threeDotIcons.forEach(icon =>{
    icon.classList.remove('activated')
  })


})

addProjectBtn.addEventListener('click', (e)=>{
    addProjectFn.classList.add('active')
})

collapsingTriangles.forEach(collapsingTriangle =>{
  collapsingTriangle.addEventListener('click', (e)=>{
    e.preventDefault();
    e.target.classList.toggle('rotated')
    e.target.parentNode.classList.toggle('active');
    e.target.parentNode.nextElementSibling.nextElementSibling.classList.toggle('hide')
  })
})

document.addEventListener('click', (e)=>{



  if(e.target.matches('.cross-sign')){
    addProjectFn.classList.remove('active')
    openModule.classList.remove('active')
    
  }


  if(!e.target.matches('.active')){
    personTreeSideAddEls.forEach(item =>{
      item.classList.remove('active')
    })
  }

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
  sideBar.parentElement.classList.remove('collapsed-side-bar')
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
    sideBar.parentElement.classList.remove('collapsed-side-bar')
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
  sideBar.parentElement.classList.toggle('collapsed-side-bar')
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

document.addEventListener('click', (e)=>{

  if(e.target.matches('.three-dot-icon')){
    console.log('3 dot icon clicked')
    return
  }
})


sideBarEls.forEach(element => {
  element.addEventListener('click' , (event)=>{
    

      if(sideBar.classList.contains('collapsed-side-bar')){
       sideBar.classList.remove('collapsed-side-bar')
       leftSideHeader.classList.remove('collapsed-header')
       return
      }

      if(event.target.matches('.nav-project-div')){

        let nextSibling = event.target.nextElementSibling;
        nextSibling.classList.toggle('hide');
    
        let childrens =  [...nextSibling.children]
    
        childrens.forEach((child) =>{
          child.classList.remove('active')
        })
      }




  })

});


  navSubChilds.forEach(navChild => {
    navChild.addEventListener('click' , (e)=>{

      if(e.target.matches('.three-dot-icon')){
        console.log('3 dot icon clicked')
        return
      }
      navChild.classList.toggle('active')
    })
  })