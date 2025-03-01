let ats = document.querySelector(".ats")
let bwa = document.querySelector(".bwa")
let hero = document.querySelector(".hero")

window.addEventListener("scroll", () =>{
  let value = window.scrollY
  ats.style.top = value * -0.9 + "px"
  bwa.style.top = value * -0.9 + "px"
  hero.style.marginTop = value * -0.9 + "px"
})