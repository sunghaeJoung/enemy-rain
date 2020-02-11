let button = document.querySelector("button"),
    startBtn = document.querySelector(".startBtn"),
    stopBtn = document.querySelector(".stopBtn"),
    gameover = document.querySelector(".gameOver");

    //귀신 죽는 소리 
var audio = new Audio("dying.wav") ;


class Enemy {
    constructor() { 
        this.ghost = document.createElement("span");
        this.ghost.classList.add("ghost");
        bg.appendChild(this.ghost)

        //귀신이 떨어지는 x축 랜덤
        this.ghost.style.left = Math.floor(Math.random() * 600)  + "px"

        //떨어지고 죽는 함수 0.1초마다 실행
        //setInterval을 멈추고 싶을 때(clearInterval), 변수에 저장한다. -> 변수가 카드 취소할 때, 영수증과 같은 역할
        //하지만 constructor안에 있기 때문에 drop이 실행이 안된다. -> this를 사용하면 접근 가능!
        this.movemonet = setInterval(() => { 
            this.drop();
        }, 100); 
    }

    //귀신 떨어지고 죽기
    drop = () => {
        this.ghost.style.top = this.ghost.offsetTop + 10 + "px"

        //영웅 바운더리 설정
        let right = hero.offsetLeft + 44
        let left = hero.offsetLeft - 44

        //귀신이 영웅이랑 닿았을 때 죽음
        if (this.ghost.offsetTop === 380 && this.ghost.offsetLeft <= right && this.ghost.offsetLeft >= left) {
            clearInterval(this.movemonet);
            this.ghost.classList.add("ghost-die")
            audio.play();
            setTimeout(() => {
                bg.removeChild(this.ghost);;
            }, 2000)

        // 바닥에 닿으면 죽고 사라짐
        } else if (this.ghost.offsetTop === 440) {
            clearInterval(this.movemonet);
            bg.removeChild(this.ghost);
        }
    }    
}

gameStart = () => {
    setInterval(() => {
        let goEnemy = new Enemy();
    }, 1000);
}

gameStop = () => {
    bg.style.opacity = 0.6;
    gameover.style.display = "block";
    clearInterval(gameStart); //stop 버튼을 작동안됨
}

startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameStop);