const time = document.getElementById('time');
const container = document.getElementById('container');
const second_container = document.getElementById('second-container');

// 開始時間
let startTime;
// タイムアウトID
let timeoutID;

function displayTime(){
    const currentTime = new Date(180000 - (Date.now() - startTime));
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
    time.textContent = `${m}:${s}.${ms}`;
    if (m == "59") {
        showResult();
    } else {
        timeoutID = setTimeout(displayTime, 10);
    }
}

function showResult(){
    clearTimeout(timeoutID);
    container.setAttribute("style","display:none");
    second_container.setAttribute("style","display:flex");
}

startTime = Date.now();
displayTime();