const videoPlayer = document.getElementById('videoPlayer');
const currentTimeDisplay = document.getElementById('currentTime');

videoPlayer.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});

videoPlayer.addEventListener('timeupdate', () => {
  const currentTime = videoPlayer.currentTime;
  currentTimeDisplay.textContent = formatTime(currentTime);
});

videoPlayer.addEventListener('ended', () => {
  videoPlayer.currentTime = 0;
  videoPlayer.pause();
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const milliseconds = Math.floor((time % 1) * 1000);
  return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds, 3)}`;
}

function padZero(number, length = 2) {
  return number.toString().padStart(length, '0');
}