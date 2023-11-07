const tractDetails = [
    {
        title: 'Because He Lives',
        artist: 'Mass Anthem',
        album:'url (assets/images/mass.jpg)',
        duration:'2:15',
        audioSource: 'assets/audio/Because He Lives.mp3'
    },
    {
        title: 'I Speak Jesus',
        artist: 'Charity Gayle',
        album:'url (assets/images/charity.jpg)',
        duration:'4:48',
        audioSource: 'assets/audio/I Speak Jesus.mp3'
    },
    {
        title: 'Worthy',
        artist: 'Elevation Worship',
        album:'url (assets/images/elevation.jpg)',
        duration:'6:09',
        audioSource: 'assets/audio/Worthy Live Elevation.mp3'
    },
]
const bgTheme = document.getElementById('bg-theme');
const albumCover = document.getElementById('album-cover');
const trackTitle = document.getElementById('song-title');
const artistSinger = document.getElementById('artist-singer');
const audio = document.getElementById('audio');
const playPausebutton = document.getElementById('play-pause');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const previousButton = document.getElementById('previous-rewind');
const nextButton = document.getElementById('next-forward');
const durationCurrent = document.getElementById('current-time');
const durationTotal = document.getElementById('total-time');

let currentTrack = 0;
let paused = true;//when play is visible and pause is hidden
//Play/pause button click event
playPausebutton.addEventListener('click', function(){
    //to change button state
    if (audio.paused){
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    } else {
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }
    audioPaused = !audioPaused;
});

//update track details
audio.addEventListener('loadedmetadata', () => {
    trackTitle.innerText = trackDetails[currentTrack].title;
    artistSinger.innerText = trackDetails[currentTrack].artist;
    albumCover.innerHTML = trackDetails[currentTrack].album;
    durationTotal.innerText = trackDetails[currentTrack].duration;
    seekBar.max = audio.durationTotal
});

seekBar.addEventListener('change', () => {
    audio.durationCurrent = seekBar.value;
});

audio.addEventListener('change', () => {
    seekBar.value = audio.durationCurrent;
});

