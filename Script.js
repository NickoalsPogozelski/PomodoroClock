var Minutos = 25;
var Segundos = 00;

var breaker = 0;
var lock = 0;

function handleSetClock(Minutos){
    if(Minutos === 25 || Minutos === 15){
        document.getElementById("Timer").innerHTML = Minutos + ":0" + Segundos;
    }else{
        document.getElementById("Timer").innerHTML ="0" + Minutos + ":0" + Segundos;
    }

    this.Minutos = Minutos;
}

function handleStartClock(){
    if(Minutos + Segundos != 0 && breaker == 0){
        document.body.style.backgroundColor = "rgb(235, 64, 52)";
        breaker = 1;
        lock = 1;
        var x = setInterval(() => {
            
            document.getElementById("startstop").innerHTML = "Stop";
            
            setTimer();
            handleButtons();

            document.getElementById("Title").innerHTML = Minutos + ":" + Segundos + " - Timer Pomodoro";
            
            if(Minutos + Segundos === 0){
                onTimerStop();
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

    console.log(Minutos + Segundos);

}

function handleStopTimer(){
    alert("function called");
    clearInterval(x)
    breaker = 0;
    document.body.style.backgroundColor = "rgb(59, 91, 196)";
}

function onTimerStop(){
    document.body.style.backgroundColor = "rgb(59, 91, 196)";
    document.getElementById("startstop").innerHTML = "Start";
    breaker = 0;
    lock = 0;
    handleButtons();
}

function handleButtons(){

    let pomButton = document.getElementById("pomodoro");
    let shortButton = document.getElementById("shortbreak");
    let longButton = document.getElementById("longbreak");

    if(lock === 1){
        pomButton.disabled = true;
        shortButton.disabled = true;
        longButton.disabled = true;
    }
    
    else if(lock === 0){
        pomButton.disabled = false;
        shortButton.disabled = false;
        longButton.disabled = false;
    }

}