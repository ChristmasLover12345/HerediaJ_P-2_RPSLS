// Sound effects
let volumeControl = document.getElementById("volumeControl");
let gameModeSelectLoad = document.getElementById("gameModeSelectLoad")
let singleEnterCombat = document.getElementById("singleEnterCombat")
let roundLostSound = document.getElementById("roundLostSound")
let roundDrawSound = document.getElementById("roundDrawSound")
let roundWonSound = document.getElementById("roundWonSound")
let gameWonSound = document.getElementById("gameWonSound")
let gameLostSound = document.getElementById("gameLostSound")


//Single player ID's
let roundsTittle = document.getElementById("roundsTittle")
let oneRoundBtn = document.getElementById("oneRoundBtn")
let fiveRoundBtn = document.getElementById("fiveRoundBtn")
let sevenRoundBtn = document.getElementById("sevenRoundBtn")

let scBtn = document.getElementById("scBtn")
let rkBtn = document.getElementById("rkBtn")
let ppBtn = document.getElementById("ppBtn")
let lzBtn = document.getElementById("lzBtn")
let spBtn = document.getElementById("spBtn")

let playerChoice = document.getElementById("playerChoice")
let playerScore = document.getElementById("playerScore")
let cpuChoice = document.getElementById("cpuChoice")
let cpuScore = document.getElementById("cpuScore")




let singleScore = 0;
let singleCPUScore = 0;
let victoryCondition = 0;

// Sound effect volume slider
let setVolume = () => {
    let savedVolume = localStorage.getItem('audioVolume');
    if (savedVolume !== null)
    {
        if(gameModeSelectLoad) {gameModeSelectLoad.volume = parseFloat(savedVolume)}
        if(singleEnterCombat) {singleEnterCombat.volume = parseFloat(savedVolume)}
        if(roundLostSound) {roundLostSound.volume = parseFloat(savedVolume)}
        if(roundDrawSound) {roundDrawSound.volume = parseFloat(savedVolume)}
        if(roundWonSound) {roundWonSound.volume = parseFloat(savedVolume)}
        if(gameWonSound) {gameWonSound.volume = parseFloat(savedVolume)}
        if(gameLostSound) {gameLostSound.volume = parseFloat(savedVolume)}
        

        volumeControl.value = savedVolume;
    
    }
    else
    {
        gameModeSelectLoad.volume = 0.5;
    }
}

volumeControl.addEventListener('input', (event) =>{
    let volume = event.target.value;
    if(gameModeSelectLoad) {gameModeSelectLoad.volume = volume;}
    if(singleEnterCombat) {singleEnterCombat.volume = volume}
    if(roundLostSound) {roundLostSound.volume = volume}
    if(roundDrawSound) {roundDrawSound.volume = volume}
    if(roundWonSound) {roundWonSound.volume = volume}
    if(gameWonSound) {gameWonSound.volume = volume}
    if(gameLostSound) {gameLostSound.volume = volume}

    localStorage.setItem('audioVolume', volume);
})

setVolume()

function oneRound()
{
    victoryCondition = 1
    
}