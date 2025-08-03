var millisecond = document.getElementById("msec")
var minte = document.getElementById("min")
var second = document.getElementById("sec")
var Start = document.getElementById("btn-start")
var Stop = document.getElementById("btn-stop")
var Reset = document.getElementById("btn-reset")

var millisec = 0
var sec1 = 0
var mint = 0

function timer() {
    Number(millisec++)
    if (millisec == 99) {
        Number(sec1++)
        millisec=0
    }
     
    if(sec1 == 59){
        Number(mint++)
        sec1=0
        millisec=0
    }
}


function Start() {
    interval = setInterval(timer, 10)
    startbtn.disabled = true
}
function Stop() {
    clearInterval(interval)
    startbtn.disabled = false
    pausebtn.disabled = true
}
function Reset(){
    Pause()
    mint = "00"
    sec1 = "00"
    millisec = "00"
    millisecond.innerHTML= millisec
    second.innerHTML=sec1
    minte.innerHTML = mint
    Reset.disabled = true
    Stop.disabled = true
    Start.disabled = false
}