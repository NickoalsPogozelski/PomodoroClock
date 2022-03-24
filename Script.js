var Minutos = 25;
var Segundos = 00;

var breaker = 0;
var lock = 0;

let pomodoroCount = 3;
let breakCount = 3;

function handleSetClock(Minutos){

    if(Minutos === 25 || Minutos === 15){

        document.getElementById("Timer").innerHTML = Minutos + ":0" + Segundos;

    }else if(Minutos === 5){

        document.getElementById("Timer").innerHTML ="0" + Minutos + ":0" + Segundos;

    }

    this.Minutos = Minutos;
}

function handleStartClock(){

    if(Minutos + Segundos != 0 && breaker === 0){

        document.body.style.backgroundColor = "rgb(235, 64, 52)";
        document.getElementById("startstop").style.color = "rgb(235, 64, 52)";

        breaker = 1;
        lock = 1;
        
        if(Minutos === 25){
            pomodoroCount++;
        }

        if(Minutos === 5 || Minutos === 15){
            breakCount++;
        }

        var x = setInterval(() => {
            
            console.log("pomodoro: " + pomodoroCount);
            console.log("breaks: " + breakCount);

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

function onTimerStop(){
    document.body.style.backgroundColor = "rgb(59, 91, 196)";
    document.getElementById("startstop").style.color = "rgb(59, 91, 196)";

    breaker = 0;
    lock = 0;

    handleButtons();

    if(pomodoroCount > breakCount){
        Minutos = 5;
        Segundos = 0;
        document.getElementById("Timer").innerHTML = "0" + Minutos + ":0" + Segundos;
    } else {
        Minutos = 25;
        Segundos = 0;
        document.getElementById("Timer").innerHTML = Minutos + ":0" + Segundos;
    }


    if(pomodoroCount % 4 === 0 && breakCount % 3 === 0){
        Minutos = 15;
        Segundos = 0;
        document.getElementById("Timer").innerHTML = Minutos + ":0" + Segundos;
    }

}

function handleButtons(){

    let pomButton = document.getElementById("pomodoro");
    let shortButton = document.getElementById("shortbreak");
    let longButton = document.getElementById("longbreak");
    let startButton = document.getElementById("startstop");

    if(lock === 1){
        pomButton.disabled = true;
        shortButton.disabled = true;
        longButton.disabled = true;
        startButton.disabled = true;
    }
    
    else if(lock === 0){
        pomButton.disabled = false;
        shortButton.disabled = false;
        longButton.disabled = false;
        startButton.disabled = false;
    }

}