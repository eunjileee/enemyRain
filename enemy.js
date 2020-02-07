class EnemyGame {
    constructor () {
        //메서드 호출
        this.divTag = document.createElement('div')
        this.divTag.className = 'enemy';
        this.bg = document.querySelector('.bgAndHero')
        this.enemy = bg.appendChild(this.divTag); //enemy 생성
        this.position = this.enemy.offsetTop;
        this.enemyLeft = this.enemy.offsetLeft;
        this.front = document.querySelector('.hero_front');
        this.heroLeft = this.front.offsetLeft; // x값
        this.random();
        this.play();
    }
    
    /*           method               */

    random () { //랜덤 좌표 생성
        let randomPosition = Math.floor(Math.random() * 750);
        this.enemy.style.left = randomPosition + "px";
    }

    play() { setInterval(() => {
        if (this.position < 550) {
            this.position = this.position + 7;
            this.enemy.style.top = this.position + "px"; //enemy의 top위치에 저장
        }

    // 바닥에 닿았을 때 시체
    if ((546 <= this.position) && (this.position <= 550) && ((this.enemyLeft > (this.heroLeft - 45)) && (this.enemyLeft < (this.heroLeft + 45)))) {
        this.divTag.remove();
    }
    else if (this.position > 550) {
        this.enemy.style.backgroundPosition = "-35px 0px";
        var audio = new Audio('./audio/dying.wav');
        audio.play();   
        //clearInterval(this.play);
        setTimeout(() => {
            this.divTag.remove();
        }, 1000)
    } 
    }, 2000/60)  
    }
}

setInterval(() => {
    new EnemyGame();
}, 1000);





/*
    
function moveEnemy () {
    if (this.position > 600) {
        clearInterval(game);
    } else {
        this.enemyStyleTop = (this.position + 7) + "px"; //enemy의 top위치에 저장
    }

function으로 구현

function start() {
    let divTag = document.createElement('div')
    divTag.className = 'enemy';
    let bg = document.querySelector('.bgAndHero')
    let enemy = bg.appendChild(divTag); //enemy 생성

    // 랜덤 좌표 생성
    let randomPosition = Math.floor(Math.random() * 750);
    enemy.style.left = randomPosition + "px";


    let game = setInterval(moveEnemy, 2500 / 60); //아래로 내려오기 반복

    function moveEnemy () {
    const position = enemy.offsetTop;
    const enemyLeft = enemy.offsetLeft //enemy position
    const front = document.querySelector('.hero_front'); //hero
    const heroLeft = front.offsetLeft; // x값

        if (position > 600) {
            clearInterval(game);
        } else {
            let nPosition = (position + 7) + 'px'; // type 꼭 확인하기!
            enemy.style.top = nPosition; //enemy의 top위치에 저장
        }

        // 바닥에 닿았을 때 시체
        if (position > 550) {
            enemy.style.backgroundPosition = "-35px 0px";
            var audio = new Audio('./audio/dying.wav');
            audio.play();   
            clearInterval(game);
            setTimeout(function() {
                enemy.remove();
            }, 700)
        } else if ((546 <= position) && (position <= 550) && (enemyLeft > (heroLeft - 45)) && (enemyLeft < (heroLeft + 45))) {
            clearInterval(game);
            enemy.remove();
        }
    }
};


setInterval(
    start, 1000
);
*/