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
const alarmSound = new Audio('./assets/audio/alarm.mp3');

alarmSound.type = 'audio.mp3';
let aH = '';
let aM = '';

function setAlarm() {
    T = input.value.toString();
    let ah = T.substring(0, 2);
    let am = T.substring(3, 5);
    let time = new Date();
    let h = time.getHours().toString().padStart(2, '0');
    let m = time.getMinutes().toString().padStart(2, '0');
    if (ah > h || ah == h && am >= m) {
        output.innerText = input.value.toString();
        aH = ah;
        aM = am;
        return true;
    } else {
        output.innerText = `invalid time`;
        return false;
    }
}

function monitor() {
    let time = new Date();
    let h = time.getHours().toString().padStart(2, '0');
    let m = time.getMinutes().toString().padStart(2, '0');
        if (aH == h && aM == m) {
            alarmSound.play();
            output.innerText = `It's time`;
            input.value = '';
        } else {
            alarmSound.pause();
        }
}
setInterval('monitor()', 1000);

btn.addEventListener('click', () =>{
    setAlarm();
})