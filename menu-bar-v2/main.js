// document.documentElement.style.setProperty('--window-height', window.innerHeight);

const menu = document.querySelector("nav");
const menuBtn = document.querySelector("button#open");
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  document.body.classList.add("overhidden");
  document.documentElement.classList.add("overhidden");
});
const closeMenuBtn = document.querySelector("button#close");
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.classList.remove("overhidden");
  document.documentElement.classList.remove("overhidden");
});
