var Minutos;
var Segundos;
function handleSetClock(Minutos){
    var x = setInterval(() => {


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
}