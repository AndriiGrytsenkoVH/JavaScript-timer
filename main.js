// hash the DOM
var timer = document.getElementById("timer");
var startBtn = document.getElementById("start-button");
var stopBtn = document.getElementById("stop-button");
var resetBtn = document.getElementById("reset-button");

// declare variables
var clockInterval
var startTime
var currentTime = 0

const clock = () => {
    const time = new Date(Date.now() - startTime + currentTime)
    let min = time.getMinutes().toString().padStart(2,'0')
    let s = time.getSeconds().toString().padStart(2, '0')
    let ms = time.getMilliseconds().toString().padStart(3,'0')
    timer.textContent = `${min}:${s}:${ms}`
}

startBtn.addEventListener("click", () => {
    // start timer
    startTime = Date.now();
    clockInterval = setInterval(clock, 1)
    
    // disable start button
    startBtn.disabled = true
    // enable stop button 
    stopBtn.disabled = false
    // disable reset button
    resetBtn.disabled = true
}); 

stopBtn.addEventListener("click", () => {
    // stop timer
    currentTime += Date.now() - startTime
    clearInterval(clockInterval)

    // enable start button
    startBtn.disabled = false
    // enable stop button
    stopBtn.disabled = true
    // disable reset button 
    resetBtn.disabled = false
}); 

resetBtn.addEventListener("click", () => {
    // reset timer
    currentTime = 0
    timer.innerHTML = "00:00:000"

    // disable start button
    startBtn.disabled = false
    // enable stop button
    stopBtn.disabled = true
    // disable reset button 
    resetBtn.disabled = true
}); 