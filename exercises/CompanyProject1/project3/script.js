let editDeleteToggleBtns = document.querySelectorAll('.edit-delete-toggle-btn');

// editDeleteToggleBtn.addEventListener('click', e => {
//   e.preventDefault()
//   console.log('chala');
//   console.log(editDeleteToggleBtn);
//   editDeleteToggleBtn.classList.toggle('active')
// })



window.addEventListener('click', e => {

  console.log(editDeleteToggleBtns);

  if(e.target.matches('.edit-delete-toggle-btn')){
    if(!e.target.matches('.active')){
      closeAllButtons();
    }

    e.target.classList.toggle('active')
    console.log('matches');
    
  }else{
    closeAllButtons()
    console.log(' does not matches');
  }
})


function closeAllButtons(){
  editDeleteToggleBtns.forEach(button => {
    button.classList.remove('active')
  })
}