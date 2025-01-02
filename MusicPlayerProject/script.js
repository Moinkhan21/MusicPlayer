// Select elements from the DOM for manipulation
let progress = document.getElementById("progress"); // Progress bar element
let song = document.getElementById("song"); // Audio element for song
let ctrlIcon = document.getElementById("ctrlIcon"); // Play/Pause button icon

// Event listener to set progress bar maximum and current values once the song's metadata is loaded
song.onloadedmetadata = function() {
    progress.max = song.duration; // Set max value of the progress bar to the song's total duration
    progress.value = song.currentTime; // Initialize progress bar to start at the current playback time (0)
}

// Function to toggle between play and pause states
function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) { // If the icon shows "pause"
        song.pause(); // Pause the song
        ctrlIcon.classList.remove("fa-pause"); // Change icon to "play"
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play(); // Play the song
        ctrlIcon.classList.add("fa-pause"); // Change icon to "pause"
        ctrlIcon.classList.remove("fa-play");
    }
}

// Checks if the song is currently playing, then updates the progress bar every 500 milliseconds
if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime; // Continuously update progress bar to reflect current song time
    }, 500);
}

// Update song playback time based on progress bar position change
progress.onchange = function() {
    song.play(); // Automatically play the song if progress is adjusted
    song.currentTime = progress.value; // Set current time of the song to the new progress bar value
    ctrlIcon.classList.add("fa-pause"); // Update icon to show "pause"
    ctrlIcon.classList.remove("fa-play");
}
