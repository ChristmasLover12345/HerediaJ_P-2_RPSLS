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
let cpuChoiceDisplay = document.getElementById("cpuChoiceDisplay")
let cpuScore = document.getElementById("cpuScore")

// Multi player ID's
let oneRoundBtnMulti = document.getElementById("oneRoundBtnMulti")
let fiveRoundBtnMulti = document.getElementById("fiveRoundBtnMulti")
let sevenRoundBtnMulti = document.getElementById("sevenRoundBtnMulti")





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

function fiveRounds()
{
    maxRounds = 5;
    victoryCondition = 3;

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

function sevenRounds()
{
    maxRounds = 7;
    victoryCondition = 4;

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

function multiPlayer()
{

    headerChoseGameMode.classList.toggle('doNotShow')
    multiBtn.classList.toggle('doNotShow')
    singleBtn.classList.toggle('doNotShow')

    oneRoundBtnMulti.classList.toggle('doNotShow')
    fiveRoundBtnMulti.classList.toggle('doNotShow')
    sevenRoundBtnMulti.classList.toggle('doNotShow')
    roundsTittle.classList.toggle('doNotShow')

}

// chose single player
singleBtn.addEventListener('click', () => {
    singlePlayer();
})

// chose a round limit for single player
oneRoundBtn.addEventListener('click', () => {
    oneRound();
    singleEnterCombat.play();
})

fiveRoundBtn.addEventListener('click', () => {
    fiveRounds();
    singleEnterCombat.play();
})

sevenRoundBtn.addEventListener('click', () => {
    sevenRounds();
    singleEnterCombat.play();
})



// Chose multiplayer

multiBtn.addEventListener('click', () => {
    multiPlayer();
})

// chose a round limit for single player
oneRoundBtnMulti.addEventListener('click', () => {
    oneRound();
    singleEnterCombat.play();
})

fiveRoundBtnMulti.addEventListener('click', () => {
    fiveRounds();
    singleEnterCombat.play();
})

sevenRoundBtnMulti.addEventListener('click', () => {
    sevenRounds();
    singleEnterCombat.play();
})


// chose a round limit for multi player

// Fetch CPU play
async function cpuHandFetch()
{
    const promise = await fetch("https://jherediarpslsendpoint-dyfvhue2d9b2hvh4.westus-01.azurewebsites.net/DeepGame/ThrowHand");
    const data = await promise.text()
    return data;
}

// Single player Logic
async function pveBattle(userChoice)
{

    let cpuChoice = await cpuHandFetch()
    console.log(cpuChoice)

    cpuChoiceDisplay.textContent = cpuChoice

    // Checks if the round limit has been reached
    if(currentRound >= maxRounds)
    {
        if(singleCPUScore == singleScore)
        {
            winLossTextSingle.textContent = "DRAW!"
            winLossDescSingle.textContent = "And the fight must go on..."
            playAgainBtnSingle.classList.toggle('hide')
        }
        else if (singleScore > singleCPUScore) 
        {
            winLossTextSingle.textContent = "YOU WIN!";
            winLossDescSingle.textContent = "You escaped the depths!";
            gameWonSound.play();
        }
        else 
        {
            winLossTextSingle.textContent = "YOU LOSE...";
            winLossDescSingle.textContent = "Rapidly dragged deeper into the depths, your soul is destroyed...";
            gameLostSound.play();
        }

        return;
    }

    // Checks for round outcome
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
        else
        {
            roundLostSound.play();
            singleCPUScore++;
            cpuScore.textContent = singleCPUScore;
        }

    }
    else if (userChoice == "PAPER")
    {
        if (cpuChoice == "SPOCK" || cpuChoice == "ROCK")
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
    else if (userChoice == "LIZARD")
    {

        if (cpuChoice == "SPOCK" || cpuChoice == "PAPER")
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
    else if (userChoice == "SPOCK")
    {

        if (cpuChoice == "SCISSORS" || cpuChoice == "ROCK")
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

    // checks if either player has reached the win condition
    if (singleScore == victoryCondition)
    {
        winLossTextSingle.textContent = "YOU WIN!"
        winLossDescSingle.textContent = "You escaped the depths!"
        gameWonSound.play()
        playAgainBtnSingle.classList.toggle('hide')
        return;
    }
    else if (singleCPUScore == victoryCondition)
    {
        winLossTextSingle.textContent = "YOU LOSE..."
        winLossDescSingle.textContent = "Rapidly dragged deeper into the depths, your soul is destroyed.."
        gameLostSound.play()
        playAgainBtnSingle.classList.toggle('hide')
        return;
    }

    
    currentRound++;
    // Checks again if the round limit is reached
    if (currentRound == maxRounds)
    {

        if(singleScore > singleCPUScore)
        {
            winLossTextSingle.textContent = "YOU WIN!"
            winLossDescSingle.textContent = "You escaped the depths!"
            gameWonSound.play()
            playAgainBtnSingle.classList.toggle('hide')
            
        }
        else if (singleCPUScore > singleScore)
        {
        winLossTextSingle.textContent = "YOU LOSE..."
        winLossDescSingle.textContent = "Rapidly dragged deeper into the depths, your soul is destroyed.."
        gameLostSound.play()
        playAgainBtnSingle.classList.toggle('hide')
        
        }
        else
        {
        winLossTextSingle.textContent = "DRAW!"
        winLossDescSingle.textContent = "And the fight must go on..."
        playAgainBtnSingle.classList.toggle('hide')
        
        }

    }

}

scBtn.addEventListener('click', () => {
    playerChoice.textContent = "SCISSORS";
    pveBattle("SCISSORS");
})

rkBtn.addEventListener('click', () => {
    playerChoice.textContent = "ROCK";
    pveBattle("ROCK");
})

ppBtn.addEventListener('click', () => {
    playerChoice.textContent = "PAPER";
    pveBattle("PAPER");
})

lzBtn.addEventListener('click', () => {
    playerChoice.textContent = "LIZARD";
    pveBattle("LIZARD");
})

spBtn.addEventListener('click', () => {
    playerChoice.textContent = "SPOCK";
    pveBattle("SPOCK");
})