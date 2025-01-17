// Sound effects
let volumeControl = document.getElementById("volumeControl");
let gameModeSelectLoad = document.getElementById("gameModeSelectLoad")
let singleEnterCombat = document.getElementById("singleEnterCombat")
let roundLostSound = document.getElementById("roundLostSound")
let roundDrawSound = document.getElementById("roundDrawSound")
let roundWonSound = document.getElementById("roundWonSound")
let gameWonSound = document.getElementById("gameWonSound")
let gameLostSound = document.getElementById("gameLostSound")

// GameMode ID's
let singleBtn = document.getElementById("singleBtn")
let multiBtn = document.getElementById("multiBtn")
let headerChoseGameMode = document.getElementById("headerChoseGameMode")

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

let winLossTextSingle = document.getElementById("winLossTextSingle")
let winLossDescSingle = document.getElementById("winLossDescSingle")
let playAgainBtnSingle = document.getElementById("playAgainBtnSingle")

let playerScoreBoard = document.getElementById("playerScoreBoard")
let playerChoice = document.getElementById("playerChoice")
let playerScore = document.getElementById("playerScore")
let cpuScoreBoard = document.getElementById("cpuScoreBoard")
let cpuChoice = document.getElementById("cpuChoice")
let cpuScore = document.getElementById("cpuScore")




let singleScore = 0;
let singleCPUScore = 0;
let victoryCondition = 0;
let maxRounds = 0;
let currentRound = 0;
let userChoice = "";


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
    maxRounds = 1;
    victoryCondition = 1;

    roundsTittle.classList.toggle('hide')
    oneRoundBtn.classList.toggle('hide')
    fiveRoundBtn.classList.toggle('hide')
    sevenRoundBtn.classList.toggle('hide')

    scBtn.classList.toggle('hide')
    rkBtn.classList.toggle('hide')
    ppBtn.classList.toggle('hide')
    lzBtn.classList.toggle('hide')
    spBtn.classList.toggle('hide')
    playerScoreBoard.classList.toggle('hide')
    cpuScoreBoard.classList.toggle('hide')
    winLossTextSingle.classList.toggle('hide')
    winLossDescSingle.classList.toggle('hide')
    

}

function singlePlayer()
{
    headerChoseGameMode.classList.toggle('doNotShow')
    multiBtn.classList.toggle('doNotShow')
    singleBtn.classList.toggle('doNotShow')

    oneRoundBtn.classList.toggle('doNotShow')
    fiveRoundBtn.classList.toggle('doNotShow')
    sevenRoundBtn.classList.toggle('doNotShow')
    roundsTittle.classList.toggle('doNotShow')

}

oneRoundBtn.addEventListener('click', () => {
    oneRound();
    singleEnterCombat.play();
})

singleBtn.addEventListener('click', () => {
    singlePlayer();
})

async function cpuHandFetch()
{
    const promise = await fetch("https://jherediarpslsendpoint-dyfvhue2d9b2hvh4.westus-01.azurewebsites.net/DeepGame/ThrowHand");
    const data = await promise.text()
    return data;
}

async function pveBattle(userChoice)
{

    if(currentRound >= maxRounds)
    {
        if(singleCPUScore == singleScore)
        {
        winLossTextSingle.textContent = "DRAW!"
        winLossDescSingle.textContent = "And the fight must go on..."
        }
        playAgainBtnSingle.classList.toggle('hide')
        return;
    }

    let cpuChoice = await cpuHandFetch()
    console.log(cpuChoice)

    if (userChoice == "SCISSORS")
    {

        if (cpuChoice == "PAPER" || cpuChoice == "LIZARD")
        {
            roundWonSound.play();
            singleScore++;
            playerScore.textContent = singleScore;
        }
        else if (cpuChoice == userChoice)
        {
            roundDrawSound.play();
        }
        else
        {
            roundLostSound.play();
            singleCPUScore++;
            cpuScore.textContent = singleCPUScore;
        }

    }
    else if (userChoice == "ROCK")
    {

        if (cpuChoice == "LIZARD" || cpuChoice == "SCISSORS")
        {
            roundWonSound.play();
            singleScore++;
            playerScore.textContent = singleScore;
        }
        else if (cpuChoice == userChoice)
        {
            roundDrawSound.play();
        }

    }

    if (singleScore == victoryCondition)
    {
        winLossTextSingle.textContent = "YOU WIN!"
        winLossDescSingle.textContent = "You escaped the depths!"
        gameWonSound.play()
        playAgainBtnSingle.classList.toggle('hide')
    }
    else if (singleCPUScore == victoryCondition)
    {
        winLossTextSingle.textContent = "YOU LOSE..."
        winLossDescSingle.textContent = "Rapidly dragged deeper into the depths, your soul is destroyed.."
        gameLostSound.play()
        playAgainBtnSingle.classList.toggle('hide')
    }


    currentRound++;

}