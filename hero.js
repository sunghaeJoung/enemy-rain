let bg = document.querySelector("#bg"),
    bgImg = bg.querySelector("img"),
    hero = bg.querySelector(".hero");


function stopHero() {
    hero.classList.remove("hero-right")
    hero.classList.remove("hero-left")
}

//hero.style.left에 범위 지정이 안됬던 이유는 스트링이여서!
function moveHero(event) {
    if (event.keyCode === 39 && hero.offsetLeft <= 612) {   
          hero.classList.add("hero-right")
          hero.style.left = (hero.offsetLeft + 5) + "px"
    } else if (event.keyCode === 37 && hero.offsetLeft >= 2) {
           hero.classList.add("hero-left")
           hero.style.left = (hero.offsetLeft - 5) + "px"
        } 
};


window.addEventListener("keydown", moveHero) 
window.addEventListener("keyup", stopHero) 


