var Minutos = 25;
var Segundos = 00;
var breaker = 0;

function handleSetClock(Minutos){
    document.getElementById("Timer").innerHTML = Minutos + ":" + Segundos;
    this.Minutos = Minutos;
}

function handleStartClock(){
    if(Minutos + Segundos != 0 && breaker == 0){

        breaker = 1;

        var x = setInterval(() => {
            
            document.getElementById("startstop").innerHTML = "Stop";
            
            setTimer();

            document.getElementById("Title").innerHTML = Minutos + ":" + Segundos + " - Timer Pomodoro";
            
            if(Minutos + Segundos == 0){
                clearInterval(x);
            }

}, 1000);
}}

function setTimer(){

    if(Segundos > 0){
        Segundos -= 1;
    } else {
        Minutos -= 1;
        Segundos = 59;
    }

    if(Segundos > 9 && Minutos > 9){
        document.getElementById("Timer").innerHTML = Minutos + ":" + Segundos;
    }
    if(Segundos <= 9 && Minutos > 9){
        document.getElementById("Timer").innerHTML = Minutos + ":0" + Segundos;
    } 
    if(Segundos <= 9 && Minutos <= 9){
        document.getElementById("Timer").innerHTML ="0" + Minutos + ":0" + Segundos;
    }
    if(Segundos > 9 && Minutos <= 9){
        document.getElementById("Timer").innerHTML ="0" + Minutos + ":" + Segundos;
    }
}