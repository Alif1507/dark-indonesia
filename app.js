let ats = document.querySelector(".ats")
let bwa = document.querySelector(".bwa")
let hero = document.querySelector(".hero")

window.addEventListener("scroll", () =>{
  let value = window.scrollY
  ats.style.top = value * -0.9 + "px"
  bwa.style.top = value * -0.9 + "px"
  hero.style.marginTop = value * -0.9 + "px"
  
});

let panahKanan = document.querySelector(".panah-kanan")
let panahkiri = document.querySelector(".panah-kiri")

panahKanan.addEventListener("click", () => {
  document.querySelectorAll(".kabur").forEach((el) => {
    el.style.transform = "translateX(-588px)";
  });

  panahKanan.style.opacity = "0"
  panahKanan.style.pointerEvents = "none"
  panahkiri.style.opacity = "1"
  panahkiri.style.pointerEvents = "all"

  
});

panahkiri.addEventListener("click", () => {
  document.querySelectorAll(".kabur").forEach((el) => {
    el.style.transform = "translateX(0px)";
  });

  panahKanan.style.opacity = "1"
  panahKanan.style.pointerEvents = "all"
  panahkiri.style.opacity = "0"
  panahkiri.style.pointerEvents = "none"
  
});