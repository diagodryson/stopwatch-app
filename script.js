let chrono = document.getElementById("chrono")
let resetBtn = document.getElementById("reset")
let stopBtn = document.getElementById("stop")
let startBtn = document.getElementById("start")

let heures = 0;
let minutes = 0;
let secondes = 0;

let timout;

let estArrrete = true;
//start the stopwatch
const demarrer = () => {
    if(estArrrete){
            estArrete = false;
            defilerTemps();
    }
};

//if the stopwatch is stopped
const arreter = () => {
    if(estArrete){
       estArrete = true;
       //clear timeout
    }
}
