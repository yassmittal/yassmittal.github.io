let createPostSection = document.querySelector('.create-post-section')
let createPostSectionClick = document.querySelector('.create-post-section-click')
let createPostSectionCrossBtn = document.querySelector('.create-post-section-cross-btn')

createPostSectionClick.addEventListener('click' , e => {
  createPostSection.classList.add('active')
  e.stopPropagation()
})

createPostSectionCrossBtn.addEventListener('click' , e => {
  createPostSection.classList.remove('active')
})