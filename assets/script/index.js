'use strick';

const hour = document.querySelector('.h');
const minute = document.querySelector('.m');
const second = document.querySelector('.s');

function getCurrentTime() {
    let time = new Date();
    let h = time.getHours().toString().padStart(2, '0');
    let m = time.getMinutes().toString().padStart(2, '0');
    let s = time.getSeconds().toString().padStart(2, '0');

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}
setInterval("getCurrentTime()", 1000);
getCurrentTime();


const output = document.querySelector('.output');
const input = document.querySelector('.text');
const btn = document.querySelector('.set');

function setAlarm() {
    T = input.value.toString();
    let ah = T.substring(0, 2);
    let am = T.substring(3, 5);
    let time = new Date();
    let ch = time.getHours().toString().padStart(2, '0');
    let cm = time.getMinutes().toString().padStart(2, '0');
    if (ah > ch || ah == ch && am >= cm) {
        output.innerText = input.value;
        aT = T;
    } else {
        output.innerText = `invalid time`;
    }
    input.value = '';
}

btn.addEventListener('click', () =>{
    setAlarm();
})
