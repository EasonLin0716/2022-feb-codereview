const isIOS15Safari = function() {
    if (!window || !window.navigator || !window.navigator.userAgent) return false;
    return /Version\/15/.test(window.navigator.userAgent) && /Safari/.test(window.navigator.userAgent);
}

const scrollLocker =  {
    previousBodyPosition: null,
    lock: function() {
        window.requestAnimationFrame(() => {
            // If previousBodyPosition is already set, don't set it again.
            if (this.previousBodyPosition === null) {
                this.previousBodyPosition = {
                    position: document.body.style.position,
                    top: document.body.style.top,
                    left: document.body.style.left
                }
            }

            // Update the dom inside an animation frame
            const { scrollY, scrollX, innerHeight } = window;
            document.body.style.position = 'fixed';
            document.body.style.top = `${-scrollY}px`;
            document.body.style.left = `${-scrollX}px`;

            setTimeout(() => window.requestAnimationFrame(() => {
                // Attempt to check if the bottom bar appeared due to the position change
                const bottomBarHeight = innerHeight - window.innerHeight;
                if (bottomBarHeight && scrollY >= innerHeight) {
                    // Move the content further up so that the bottom bar doesn't hide it
                    document.body.style.top = -(scrollY + bottomBarHeight);
                }
            }), 300)
        })
    },
    unlock: function() {
        if (this.previousBodyPosition !== null) {
            // Convert the position from "px" to Int
            const y = -parseInt(document.body.style.top, 10);
            const x = -parseInt(document.body.style.left, 10);
        
            // Restore styles
            document.body.style.position = previousBodyPosition.position;
            document.body.style.top = previousBodyPosition.top;
            document.body.style.left = previousBodyPosition.left;
        
            // Restore scroll
            window.scrollTo(x, y);
        
            this.previousBodyPosition = null;
        }
    }
}


const menu = document.querySelector("nav");
const menuBtn = document.querySelector("button#open");
let scrollY = 0;
menuBtn.addEventListener("click", () => {
  scrollY = window.pageYOffset;
  menu.style.display = "block";
  if (isIOS15Safari()) {
    scrollLocker.lock();
  } else {
    document.body.classList.add("overhidden");
  }
});
const closeMenuBtn = document.querySelector("button#close");
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  if (isIOS15Safari()) {
    scrollLocker.unlock();
  } else {
    document.body.classList.remove("overhidden");
  }
  if (scrollY) {
      window.scrollTo(0, scrollY)
  }
});
