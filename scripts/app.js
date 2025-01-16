let volumeControl = document.getElementById("volumeControl");
let gameModeSelectLoad = document.getElementById("gameModeSelectLoad")



// Sound effect volume slider

let setVolume = () => {
    let savedVolume = localStorage.getItem('audioVolume');
    if (savedVolume !== null)
    {
        if(gameModeSelectLoad)
        {
        gameModeSelectLoad.volume = parseFloat(savedVolume)}
        volumeControl.value = savedVolume;
    
    }
    else
    {
        gameModeSelectLoad.volume = 0.5;
    }
}

volumeControl.addEventListener('input', (event) =>{
    let volume = event.target.value;
    if(gameModeSelectLoad)
    {
    gameModeSelectLoad.volume = volume;
    }
    localStorage.setItem('audioVolume', volume);
})

setVolume()