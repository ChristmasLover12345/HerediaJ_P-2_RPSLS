let volumeControl = document.getElementById("volumeControl");
let gameModeSelectLoad = document.getElementById("gameModeSelectLoad")



// Sound effect volume slider
let savedVolume = localStorage.getItem('audioVolume');
if (savedVolume !== null)
{
    gameModeSelectLoad.volume = parseFloat(savedVolume)
    volumeControl.value = savedVolume;
}
else
{
    gameModeSelectLoad.volume = 0.5;
}

volumeControl.addEventListener('input', (event) =>{
    let volume = event.target.value;
    gameModeSelectLoad.volume = volume;
    localStorage.setItem('audioVolume', volume);
})