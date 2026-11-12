// Select the video element and the text box

const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

const videoSources = [
    "video/truism.mp4",
    "video/truism2.mp4"
];

// Your HTML starts with truism2.mp4
let currentVideoIndex = 1;

const videoTimes = [0, 0];

function toggleVideo() {

    // Save current playback position
    videoTimes[currentVideoIndex] = videoPlayer.currentTime;

    // Switch video index
    currentVideoIndex = 1 - currentVideoIndex;

    // Change video source
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.load();

    // Restore playback position once loaded
    videoPlayer.addEventListener("loadedmetadata", function restoreTime() {

        videoPlayer.currentTime = Math.min(
            videoTimes[currentVideoIndex],
            videoPlayer.duration || 0
        );

        videoPlayer.play().catch(error => {
            console.error("Video playback failed:", error);
        });

    }, { once: true });
}

// Toggle when clicking the quote
textBox.addEventListener("click", toggleVideo);

// Report loading errors
videoPlayer.addEventListener("error", () => {
    console.error("Video failed to load:", videoPlayer.currentSrc);
});
