// Get the viewport height and multiply it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then set the custom --vh value to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
    // Update the element's size
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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
