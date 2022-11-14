const API_KEY = "274c1845d97be8c3940ee59c276d28fa";
const API_URL = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

const weatherContainer = document.getElementById("weather-result");

export async function getData() {
  const res = await fetch(API_URL(24.713552, 46.675296));

  try {
    const weatherData = await res.json();

    createWeatherResult(weatherData);
  } catch (e) {
    console.log(e);
  }
}

function createWeatherResult(data) {
  const cityName = document.createElement("h3");
  const cityTemp = document.createElement("h3");

  cityName.innerHTML = `City name: ${data.name}\n`;
  cityTemp.innerHTML = `City Temperature: ${Math.round(data.main.temp)}°`;

  weatherContainer.append(cityName, cityTemp);
}
