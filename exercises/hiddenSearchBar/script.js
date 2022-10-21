const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.fa-search');


searchIcon.addEventListener("click", function(){
  console.log("click");
  searchBar.classList.toggle("active");
})