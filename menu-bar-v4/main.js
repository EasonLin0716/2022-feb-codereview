

const menu = document.querySelector("nav");
const menuBtn = document.querySelector("button#open");
let scrollY = 0;
menuBtn.addEventListener("click", () => {
  scrollY = window.pageYOffset;
  menu.style.display = "block";
  document.body.classList.add("overhidden");
  document.documentElement.classList.add("overhidden");
});
const closeMenuBtn = document.querySelector("button#close");
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.classList.remove("overhidden");
  document.documentElement.classList.remove("overhidden");
  if (scrollY) {
      window.scrollTo(0, scrollY)
  }
});
