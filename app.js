var millisecond = document.getElementById("msec")
var minte = document.getElementById("min")
var second = document.getElementById("sec")
var Startbtn = document.getElementById("btn-start")
var Stopbtn = document.getElementById("btn-stop")
var Resetbtn = document.getElementById("btn-reset")

var millisec = 0
var sec1 = 0
var mint = 0
var interval; 
Startbtn.disabled= false
Stopbtn.disabled= true
Resetbtn.disabled= true

function timer(){
    millisec++
    millisecond.innerHTML = millisec
    if(millisec == 99){
        sec1++
        second.innerHTML = sec1
        millisec = 0
    }

    if(sec1 == 59){
        mint++
        minte.innerHTML=mint
        sec1 =0
        millisec = 0
    }
}

function start(){
interval = setInterval(timer ,10)
Startbtn.disabled= true
Stopbtn.disabled= false
Resetbtn.disabled= false
}
 
function stop(){
    clearInterval(interval)
Startbtn.disabled=false 
Stopbtn.disabled= true
Resetbtn.disabled= false
}

function reset(){
stop()
millisec = 0
sec1 = 0
mint = 0
millisecond.innerHTML = millisec
minte.innerHTML = mint
second.innerHTML = sec1

}