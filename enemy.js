let button = document.querySelector("button"),
    startBtn = document.querySelector(".startBtn"),
    stopBtn = document.querySelector(".stopBtn"),
    gameover = document.querySelector(".gameOver");

    //귀신 죽는 소리 
var audio = new Audio("dying.wav") ;

function gameStop() {
    bg.style.opacity = 0.6;
    gameover.style.display = "block";
    // clearInterval(stop);
}

function gameStart() {
    bg.style.opacity = 1;
    gameover.style.display = "none";

    class Enemy {
        constructor() {
            const ghost = document.createElement("span");
            ghost.classList.add("ghost");
            bg.appendChild(ghost)
            this.dropPoint = Math.floor(Math.random() * 600) 
            let point = this.dropPoint
            ghost.style.left = point + "px"
        
        //귀신 떨구고 죽기
            let drop = setInterval(function(){
                let right = hero.offsetLeft + 44
                let left = hero.offsetLeft - 44
                if (ghost.offsetTop === 380 && 
                    ghost.offsetLeft <= right && ghost.offsetLeft >= left) {
                        ghost.classList.add("ghost-die")
                        audio.play();
                        setTimeout(function() {
                            ghost.classList.add("ghost-bye");
                        }, 3000)
                        clearInterval(drop);
                    
                } else if (ghost.offsetTop < 440) {
                    ghost.style.top = (ghost.offsetTop + 10) + "px"
                } else if (ghost.offsetTop === 440) {
                
                    //1초뒤 귀신 사라짐
                    setTimeout(function() {
                        ghost.classList.add("ghost-bye");
                    }, 1000)
                    clearInterval(drop);
                }
            }, 100)
        }
    }

    let stop = setInterval(function() {
        let goEnemy = new Enemy();
    }, 2000)

}

startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameStop);



    // const drop = () => {    
    //     let rrr = setInterval(function(){
    //         if (ghost.style.top !== "440px") {
    //            ghost.style.top = (ghost.offsetTop + 10) + "px"
    //         } 
    //     }, 1000)
    // }

    // const die = () => {
    //     if (ghost.style.top === "440px") {
    //         ghost.classList.add("ghost-die");
    //     }
    // }
    
