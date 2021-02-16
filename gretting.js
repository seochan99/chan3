const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_CN="showing"




    function saveName(text)
{
localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
event.preventDefault();
const currentValue = input.value;
paintName(currentValue);
saveName(currentValue);
}

function askForName(){
form.classList.add(SHOWING_CN);
form.addEventListener("submit",handleSubmit);
}

function paintName(text){
    var date = new Date();
    var hours = date.getHours();
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    
    if(5<=hours&&hours<11)
    {
        greeting.innerText= `Good Morning ! ${text}`;
    }else if(11<hours&&hours<18){
        greeting.innerText= `Good afthernoon ! ${text}`;
    }else if(18<=hours&&hours<21){
        greeting.innerText= `Good evening ! ${text}`;
    }else{
        greeting.innerText= `Good Night ! ${text}`;
    }
}


function loadName(){
const currentUser = localStorage.getItem(USER_LS);
if(currentUser===null)
{
askForName();
}else{
    paintName(currentUser);
}
}

function init(){
loadName();
}

init();