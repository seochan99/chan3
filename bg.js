const body = document.querySelector("body");

const IMG_NUMBER =4;


function paintImage(imgNumber){
const image = new Image();
image.src= "https://source.unsplash.com/user/chan123123312/likes/1600x900" //`image/${imgNumber +1}.jpg`;랜덤 이미지 가지고있는 파일 중 ㅇㅇ
image.classList.add("bgImage");
body.prepend(image);
}

function genRandom(){
    const number =Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
const randomNumber = genRandom();
paintImage(randomNumber);
}
init();