const apiKey = '68093a2d457f3b7cb567d5682cce9ea5';
const city = 'Kyiv';

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('uk-UA', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

async function fetchWeather() {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`);
    const data = await res.json();

    document.getElementById('temp').textContent = data.main.temp.toFixed(1);
    document.getElementById('feels').textContent = data.main.feels_like.toFixed(1);
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('pressure').textContent = data.main.pressure;
    document.getElementById('wind').textContent = `${data.wind.speed} м/с`;
    document.getElementById('desc').textContent = data.weather[0].description;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (e) {
    alert('Помилка при отриманні погоди');
  }
}

setInterval(updateClock, 1000);
window.onload = () => {
  updateClock();
  fetchWeather();
}