let hamburgur = document.querySelector('.hamburger')
let cross = document.querySelector('.cross')
let mainSection = document.querySelector('main');
let sideNavBar = document.querySelector('.side-navbar-wrapper')

  hamburgur.addEventListener('click' , ()=>{
    mainSection.classList.toggle('rotate');
    sideNavBar.classList.toggle('hide');
    hamburgur.classList.toggle('hide');
    cross.classList.toggle('hide');
  })