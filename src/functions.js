function getLocation() {
  const location = document.querySelector('input');
  return location.value;
}

async function getWeather() {
  const location = getLocation();
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=282d06777efcb071746367bd7244932f`);
    const weatherData = await response.json();

    const weather = {
      location: `${weatherData.name}`,
      country: `${weatherData.sys.country}`,
      temperature: `${weatherData.main.temp}`,
      feels_like: `${weatherData.main.feels_like}`,
      weather_description: `${weatherData.weather[0].description}`,
      humidity: `${weatherData.main.humidity}`,
      wind_speed: `${weatherData.wind.speed}`
    }

    return weather;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default async function createWeatherDiv() {
  try {
    const mainContainer = document.querySelector('.main-container');
    const promise = getWeather();
    const weather = await promise;
    const p = document.createElement('p');
    const form = document.querySelector('form');

    if (document.querySelector('p')) {
      mainContainer.removeChild(document.querySelector('p'));
    }
  
    p.style.display = 'flex';
    p.style.justifyContent = 'center';
    p.textContent = JSON.stringify(weather);
    mainContainer.appendChild(p, form);
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
