var Minutos = 0;
var Segundos = 0;
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

            if(Segundos > 0){
                Segundos -= 1;
            } else {
                Minutos -= 1;
                Segundos = 59;
            }

            document.getElementById("Timer").innerHTML = Minutos + ":" + Segundos;

            if(Minutos + Segundos == 0){
                clearInterval(x);
            }

}, 1000);
}}

