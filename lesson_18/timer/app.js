let startTimeInSeconds = 85;

const timerElement = document.getElementById("timer");

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${secs}`;
}

function startCountdown(duration) {
  let remainingTime = duration;

  timerElement.textContent = formatTime(remainingTime);

  const intervalId = setInterval(() => {
    remainingTime--;

    timerElement.textContent = formatTime(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Запуск таймера
startCountdown(startTimeInSeconds);