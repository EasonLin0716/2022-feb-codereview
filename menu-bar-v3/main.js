// document.documentElement.style.setProperty('--window-height', window.innerHeight);

const isIOS15Safari = function() {
    if (!window || !window.navigator || !window.navigator.userAgent) return false;
    return /Version\/15/.test(window.navigator.userAgent) && /Safari/.test(window.navigator.userAgent);
}

const scrollLocker =  {
    lock: function() {
        document.body.style.position = 'static';
        const x = window.scrollX;
        const y = window.scrollY;
        window.onscroll = function() {
            window.scrollTo(x, y);
        }
    },
    unlock: function() {
        window.onscroll = null;
    }
}

const menu = document.querySelector("nav");
const menuBtn = document.querySelector("button#open");
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  document.body.style.overflow = "hidden";
  if (isIOS15Safari()) {
    scrollLocker.lock();
  }
});
const closeMenuBtn = document.querySelector("button#close");
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.style.overflow = null;
  if (isIOS15Safari()) {
    scrollLocker.unlock();
  }
});
