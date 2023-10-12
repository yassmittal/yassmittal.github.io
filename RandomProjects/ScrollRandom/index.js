var container = document.querySelector('.container');
var content = document.querySelector('.content');

// Check if the content overflows vertically
function checkOverflow() {
  if (content.offsetHeight > container.offsetHeight) {
    container.classList.add('show-scrollbar');
  } else {
    container.classList.remove('show-scrollbar');
  }
}

// Run the check initially and on window resize
checkOverflow();
window.addEventListener('resize', checkOverflow);