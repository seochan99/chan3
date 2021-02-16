const clockContainer = document.querySelector(".js-clock"),
     clockTitle = clockContainer.querySelector("h1");
     clockYear = clockContainer.querySelector("h4");

function getTime(){
const date = new Date();
const minutes=date.getMinutes();
const hours = date.getHours();
const sec = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();

clockTitle.innerText=`${hours <10 ? `0${hours}`: hours}:${minutes< 10 ? `0${minutes}`: minutes}:${sec < 10 ? `0${sec}` : sec}`
clockYear.innerText=`${year}년 ${month}월 ${day}일`


}


function init(){
getTime();
setInterval(getTime,1000);
}

init();