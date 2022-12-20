let hamburgur = document.querySelector('.hamburger')
let cross = document.querySelector('.cross')
let mainSection = document.querySelector('main');
let sideNavBar = document.querySelector('.side-navbar-wrapper')
let sideBar = document.querySelector('.side-bar')

  sideBar.addEventListener('click' , ()=>{
    mainSection.classList.toggle('rotate');
    hamburgur.classList.toggle('hide');
    cross.classList.toggle('hide');
    sideNavBar.classList.toggle('hide');
  })