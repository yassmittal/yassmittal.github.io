let toggles = document.querySelectorAll('.toggle-input')

for(let i = 0; i < toggles.length; i++){
  if(toggles[i].checked === false){
    toggles[i] = false;
  }
}