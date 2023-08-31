let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  const timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
}

startTimer();
