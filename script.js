const video = document.getElementById("myVideo");
const playPauseButton = document.getElementById("playPauseButton");

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-circle-fill"></i>'; // Change to pause icon
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="bi bi-play-circle-fill"></i>'; // Change to play icon
    }
}

// Hide video initially until loaded
video.style.visibility = 'hidden';
video.addEventListener('loadeddata', () => {
    video.style.visibility = 'visible';
});

// Optional: Show play button when the video ends
video.onended = () => {
    playPauseButton.innerHTML = '<i class="bi bi-play-circle-fill"></i>'; // Reset to play icon
};