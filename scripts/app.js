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

let scBtnP1 = document.getElementById("scBtnP1")
let rkBtnP1 = document.getElementById("rkBtnP1")
let ppBtnP1 = document.getElementById("ppBtnP1")
let lzBtnP1 = document.getElementById("lzBtnP1")
let spBtnP1 = document.getElementById("spBtnP1")
let scBtnP2 = document.getElementById("scBtnP2")
let rkBtnP2 = document.getElementById("rkBtnP2")
let ppBtnP2 = document.getElementById("ppBtnP2")
let lzBtnP2 = document.getElementById("lzBtnP2")
let spBtnP2 = document.getElementById("spBtnP2")

let playerChoicesDisplay = document.getElementById("playerChoicesDisplay")
let playAgainBtnMulti = document.getElementById("playAgainBtnMulti")
let multiWinText = document.getElementById("multiWinText")

let playerOneScoreBoard = document.getElementById("playerOneScoreBoard")
let playerOneScore = document.getElementById("playerOneScore")
let playerOneChoiceDisplay = document.getElementById("playerOneChoiceDisplay")

let playerTwoScoreBoard = document.getElementById("playerTwoScoreBoard")
let playerTwoScore = document.getElementById("playerTwoScore")
let playerTwoChoiceDisplay = document.getElementById("playerTwoChoiceDisplay")



let singleScore = 0;
let singleCPUScore = 0;
let victoryCondition = 0;
let maxRounds = 0;
let currentRound = 0;
let userChoice = "";

let p1Picked = false;
let p2Picked = false;
let p1Choice = "";
let p2Choice = "";
let p1Score = 0;
let p2Score =0;


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


function oneRoundMulti()
{
    maxRounds = 1;
    victoryCondition = 1;

    roundsTittle.classList.toggle('hide')
    oneRoundBtnMulti.classList.toggle('hide')
    fiveRoundBtnMulti.classList.toggle('hide')
    sevenRoundBtnMulti.classList.toggle('hide')

    scBtnP1.classList.toggle('hide')
    rkBtnP1.classList.toggle('hide')
    ppBtnP1.classList.toggle('hide')
    lzBtnP1.classList.toggle('hide')
    spBtnP1.classList.toggle('hide')

    scBtnP2.classList.toggle('hide')
    rkBtnP2.classList.toggle('hide')
    ppBtnP2.classList.toggle('hide')
    lzBtnP2.classList.toggle('hide')
    spBtnP2.classList.toggle('hide')
  
    playerOneScoreBoard.classList.toggle('hide')
    playerTwoScoreBoard.classList.toggle('hide')
    playerChoicesDisplay.classList.toggle('hide')

}

function fiveRoundsMulti()
{
    maxRounds = 5;
    victoryCondition = 3;

    roundsTittle.classList.toggle('hide')
    oneRoundBtnMulti.classList.toggle('hide')
    fiveRoundBtnMulti.classList.toggle('hide')
    sevenRoundBtnMulti.classList.toggle('hide')

    scBtnP1.classList.toggle('hide')
    rkBtnP1.classList.toggle('hide')
    ppBtnP1.classList.toggle('hide')
    lzBtnP1.classList.toggle('hide')
    spBtnP1.classList.toggle('hide')

    scBtnP2.classList.toggle('hide')
    rkBtnP2.classList.toggle('hide')
    ppBtnP2.classList.toggle('hide')
    lzBtnP2.classList.toggle('hide')
    spBtnP2.classList.toggle('hide')

    playerOneScoreBoard.classList.toggle('hide')
    playerTwoScoreBoard.classList.toggle('hide')
    playerChoicesDisplay.classList.toggle('hide')
}

function sevenRoundsMulti()
{
    maxRounds = 7;
    victoryCondition = 4;

    roundsTittle.classList.toggle('hide')
    oneRoundBtnMulti.classList.toggle('hide')
    fiveRoundBtnMulti.classList.toggle('hide')
    sevenRoundBtnMulti.classList.toggle('hide')

    scBtnP1.classList.toggle('hide')
    rkBtnP1.classList.toggle('hide')
    ppBtnP1.classList.toggle('hide')
    lzBtnP1.classList.toggle('hide')
    spBtnP1.classList.toggle('hide')

    scBtnP2.classList.toggle('hide')
    rkBtnP2.classList.toggle('hide')
    ppBtnP2.classList.toggle('hide')
    lzBtnP2.classList.toggle('hide')
    spBtnP2.classList.toggle('hide')

    playerOneScoreBoard.classList.toggle('hide')
    playerTwoScoreBoard.classList.toggle('hide')
    playerChoicesDisplay.classList.toggle('hide')

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
    if(gameModeSelectLoad) {gameModeSelectLoad.play()}
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
    if(gameModeSelectLoad) {gameModeSelectLoad.play()}
})

// chose a round limit for multi player
oneRoundBtnMulti.addEventListener('click', () => {
    oneRoundMulti();
    singleEnterCombat.play();
})

fiveRoundBtnMulti.addEventListener('click', () => {
    fiveRoundsMulti();
    singleEnterCombat.play();
})

sevenRoundBtnMulti.addEventListener('click', () => {
    sevenRoundsMulti();
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
    if (currentRound == 1) { winLossDescSingle.textContent = `${currentRound} round has passed..`}
    else { winLossDescSingle.textContent = `${currentRound} rounds has passed..`}
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
// Single Player buttons
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


// MultiPlayer Logic
async function pvpBattle(p1Choice, p2Choice)
{

    
    // Checks if the round limit has been reached
    if(currentRound >= maxRounds)
    {
        if(p1Score == p2Score)
        {
            multiWinText.textContent = "DRAW!"
            playAgainBtnMulti.classList.toggle('hide')
        }
        else if (p1Score > p2Score) 
        {
            multiWinText.textContent = "PLAYER 1 ESCAPED THE DEPTHS!";
            gameWonSound.play();
        }
        else 
        {
            multiWinText.textContent = "PLAYER 2 ESCAPED THE DEPTHS!";
            gameWonSound.play();
        }

        return;
    }


    // Checks for round outcome
    if (p1Choice == "SCISSORS")
    {

        if (p2Choice == "PAPER" || p2Choice == "LIZARD")
        {
            roundWonSound.play();
            p1Score++;
            playerOneScore.textContent = p1Score;
        }
        else if (p1Choice == p2Choice)
        {
            roundDrawSound.play();
        }
        else
        {
            roundWonSound.play();
            p2Score++;
            playerTwoScore.textContent = p2Score;
        }

    }
    else if (p1Choice == "ROCK")
    {

        if (p2Choice == "LIZARD" || p2Choice == "SCISSORS")
        {
            roundWonSound.play();
            p1Score++;
            playerOneScore.textContent = p1Score;
        }
        else if (p1Choice == p2Choice)
        {
            roundDrawSound.play();
        }
        else
        {
            roundWonSound.play();
            p2Score++;
            playerTwoScore.textContent = p2Score;
        }

    }
    else if (p1Choice == "PAPER")
    {
        if (p2Choice == "SPOCK" || p2Choice == "ROCK")
            {
                roundWonSound.play();
                p1Score++;
                playerOneScore.textContent = p1Score;
            }
            else if (p1Choice == p2Choice)
            {
                roundDrawSound.play();
            }
            else
            {
                roundWonSound.play();
                p2Score++;
                playerTwoScore.textContent = p2Score;
            }

    }
    else if (p1Choice == "LIZARD")
    {

        if (p2Choice == "SPOCK" || p2Choice == "PAPER")
            {
                roundWonSound.play();
                p1Score++;
                playerOneScore.textContent = p1Score;
            }
            else if (p1Choice == p2Choice)
            {
                roundDrawSound.play();
            }
            else
            {
                roundWonSound.play();
                p2Score++;
                playerTwoScore.textContent = p2Score;
            }

    }
    else if (p1Choice == "SPOCK")
    {

        if (p2Choice == "SCISSORS" || p2Choice == "ROCK")
            {
                roundWonSound.play();
                p1Score++;
                playerOneScore.textContent = p1Score;
            }
            else if (p1Choice == p2Choice)
            {
                roundDrawSound.play();
            }
            else
            {
                roundWonSound.play();
                p2Score++;
                playerTwoScore.textContent = p2Score;
            }

    }

    playerOneChoiceDisplay.textContent = p1Choice;
    playerTwoChoiceDisplay.textContent = p2Choice;

    // checks if either player has reached the win condition
    if (p1Score == victoryCondition)
    {
        multiWinText.textContent = "PLAYER 1 HAS ESCAPED THE DEPTHS!"
        gameWonSound.play()
        playAgainBtnMulti.classList.toggle('hide')
        return;
    }
    else if (p2Score == victoryCondition)
    {
        multiWinText.textContent = "PLAYER 2 HAS ESCAPED THE DEPTHS!"
        gameWonSound.play()
        playAgainBtnMulti.classList.toggle('hide')
        return;
    }

    
    currentRound++;
    if (currentRound == 1) { multiWinText.textContent = `${currentRound} round has passed..`}
    else { multiWinText.textContent = `${currentRound} rounds has passed..`}
    
    // Checks again if the round limit is reached
    if (currentRound == maxRounds)
    {

        if(p1Score > p2Score)
        {
            multiWinText.textContent = "PLAYER 1 HAS ESCAPED THE DEPTHS!"
            gameWonSound.play()
            playAgainBtnMulti.classList.toggle('hide')
            
        }
        else if (p2Score > p1Score)
        {
            multiWinText.textContent = "PLAYER 2 HAS ESCAPED THE DEPTHS!"
            gameWonSound.play()
            playAgainBtnMulti.classList.toggle('hide')
        
        }
        else
        {
        multiWinText.textContent = "DRAW!"
        playAgainBtnMulti.classList.toggle('hide')
        
        }

    }

    p1Choice = "";
    p2Choice = "";
    p1Picked = false;
    p2Picked = false;
}

// Player 1 buttons
scBtnP1.addEventListener('click', () => {
    p1Choice = "SCISSORS"
    p1Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

rkBtnP1.addEventListener('click', () => {
    p1Choice = "ROCK"
    p1Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

ppBtnP1.addEventListener('click', () => {
    p1Choice = "PAPER"
    p1Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

lzBtnP1.addEventListener('click', () => {
    p1Choice = "LIZARD"
    p1Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

spBtnP1.addEventListener('click', () => {
    p1Choice = "SPOCK"
    p1Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

// Player 2 buttons

scBtnP2.addEventListener('click', () => {
    p2Choice = "SCISSORS"
    p2Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

rkBtnP2.addEventListener('click', () => {
    p2Choice = "ROCK"
    p2Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

ppBtnP2.addEventListener('click', () => {
    p2Choice = "PAPER"
    p2Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

lzBtnP2.addEventListener('click', () => {
    p2Choice = "LIZARD"
    p2Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})

spBtnP2.addEventListener('click', () => {
    p2Choice = "SPOCK"
    p2Picked = true

    if (p1Picked && p2Picked)
    {pvpBattle(p1Choice, p2Choice);}
})