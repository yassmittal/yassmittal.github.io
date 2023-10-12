let inputForToDo = document.querySelector('#todo-text');
let toDoList = document.querySelector('.todo-list');

inputForToDo.addEventListener('keypress' , (event) => {
  
  if(event.key === 'Enter'){
    event.preventDefault();
    if(event.target.value){
      let li = document.createElement('li');
      li.classList.add('todo-element');
      toDoList.appendChild(li);
      li.textContent = event.target.value;
      inputForToDo.value = '';
      li.addEventListener('contextmenu' , (e)=>{
        e.preventDefault()
        li.remove()
      })
      
      li.addEventListener('click' , (e) =>{
        e.preventDefault()
        li.classList.toggle('completed')
      })
    }

    
  }
})