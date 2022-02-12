// document.documentElement.style.setProperty('--window-height', window.innerHeight);

const menu = document.querySelector("nav");
const menuBtn = document.querySelector("button#open");
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  document.body.style.overflow = "hidden";
});
const closeMenuBtn = document.querySelector("button#close");
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.style.overflow = null;
});
