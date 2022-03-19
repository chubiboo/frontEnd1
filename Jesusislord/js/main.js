// menu toggler

const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const navUl = document.querySelector(".nav-ul")

hamburger.addEventListener("click", ()=>{
  navUl.classList.toggle("show")
  hamburger.classList.toggle("hide")
  //this is to change class names in a tag
})
close.addEventListener("click", ()=>{
  /*navUl.classList.toggle("hide")
  hamburger.classList.toggle("show")*/

  navUl.classList.toggle("show")
  hamburger.classList.toggle("hide")
})
