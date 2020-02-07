const front = document.querySelector('.hero_front');
const backImage = document.querySelector('.bgAndHero');
const divX = front.offsetLeft; //좌표값


window.addEventListener('keydown', function(event) {
    const divX = front.offsetLeft; //좌표값

    if (event.code === 'ArrowLeft' && divX > 0) { //왼쪽 이동
        front.style.backgroundPosition = "-70px 0px";
        let result = (divX - 15) + "px" // 왼쪽으로 한 칸 이동 (style.left 타입 주의!!!!)
        front.style.left = result; //style.left값에 넣어주어야 저장되며 움직인다.

    } else if (event.code === 'ArrowRight' && divX < 764) { //오른쪽 이동
        front.style.backgroundPosition = "-105px 0px";
        let result = (divX + 15) + "px" // 오른쪽으로 한 칸 이동
        front.style.left = result;
    }
});

// keyup 일 때, 정면보기
window.addEventListener('keyup', function() {
    front.style.backgroundPosition = "0px 0px";
})


//class 함수로 작성
/*
class Hero {


}
*/