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
let threeDotIcons = [...document.querySelectorAll('.three-dot-icon')]
let cardThreeDotIcons = [...document.querySelectorAll('.cards-More-icon')]
let moreDotbuttons = [...document.querySelectorAll('.three-dots-icon')];
let editDeleteWrapperEls = [...document.querySelectorAll('.edit-delete-wrapper')]


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




document.addEventListener('click', e => {


    if(e.target.matches('.active-btn')){

      cardThreeDotIcons.forEach(icon => {
        icon.classList.remove('active-btn')
      })
      return
    }

    if(e.target.matches('.cards-More-icon')){
      console.log('matched cards more icon');

      cardThreeDotIcons.forEach(icon => {
        icon.classList.remove('active-btn')
      })

      e.target.classList.toggle('active-btn')
      return
    }

    cardThreeDotIcons.forEach(icon => {
      icon.classList.remove('active-btn')
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

document.addEventListener('click', (e)=>{

  if(e.target.matches('.cross-sign')){
    addProjectFn.classList.remove('active')
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
  console.log('clicked');

  if(sideBar.classList.contains('collapsed-side-bar')){
    sideBar.classList.remove('collapsed-side-bar')
    sideBar.parentElement.classList.remove('collapsed-side-bar')
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