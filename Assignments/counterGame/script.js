var sBtn = document.querySelector("#sBtn");
var box = document.querySelector(".box");
var timer = document.querySelector("#timer");
var score = document.querySelector("#score");

var time = 0;
var interval;
var timeout;
var isRunning = false;

var ranBox = () => {
  time += 1;
  timer.textContent = time;

  var rY = Math.random() * 100;
  var rX = Math.random() * 100;
  box.style.top = `${rY}%`;
  box.style.left = `${rX}%`;
};
sBtn.addEventListener("click", () => {
  clearInterval(interval);
  clearTimeout(timeout);

  if (isRunning) {
    time = 0;
    timer.textContent = time;
    sBtn.textContent = "Start";
    isRunning = false;
    return;
  }
  time = 0;
  timer.textContent = time;
  sBtn.textContent = "Reset";
  isRunning = true;

  interval = setInterval(ranBox, 100);

  timeout = setTimeout(() => {
    clearInterval(interval);
    sBtn.textContent = "Start"
    isRunning = false;
  }, 1000);
});
