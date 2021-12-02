const darkmodes = document.querySelectorAll(".moveFrame")
const toggleDark = document.querySelector(".white")
const toggleBefores = document.querySelectorAll(".nav-content")



darkmodes.forEach((darkmode) => {
  darkmode.addEventListener('click', function() {
    toggleDark.classList.replace('white', 'dark')
  })
})

function hasClass() {
  toggleBefores.forEach((has) => {
    if (has.classList.contains('currentPage') === true) {
      has.classList.remove('currentPage')
    }
  })
}

toggleBefores.forEach((before)=> {
  before.addEventListener('click', function() {
    hasClass()
    before.classList.add('currentPage')
  })
})