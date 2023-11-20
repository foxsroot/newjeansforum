var video = document.getElementById("videoBackground");
var muteButton = document.getElementById("muteButton");
var moving = false;
var offsetX = 0;
var offsetY = 0;

muteButton.addEventListener("mousedown", function (e) {
  moving = true;
  offsetX = e.clientX - muteButton.offsetLeft;
  offsetY = e.clientY - muteButton.offsetTop;
  // muteButton.style.pointerEvents = 'none';
});

document.addEventListener("mousemove", function (e) {
  if (moving) {
    muteButton.style.left = e.clientX - offsetX + "px";
    muteButton.style.top = e.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", function () {
  moving = false;
  // muteButton.style.pointerEvents = 'none';
});

function toggleMute() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}
