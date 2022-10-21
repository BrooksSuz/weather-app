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
    const keysValuesParent = document.createElement('div');
    const keys = document.createElement('div');
    const values = document.createElement('div');

    if (document.querySelector('.key-value-parent')) {
      mainContainer.removeChild(document.querySelector('.key-value-parent'));
    }

    keysValuesParent.classList.add('key-value-parent');
    keysValuesParent.style.display = 'flex';
    keysValuesParent.style.justifyContent = 'center';

    const labels = Object.keys(weather);
    labels.forEach(key => {
      const span = document.createElement('span');
      span.textContent = `${key}: `;
      keys.appendChild(span);
    });

    keys.classList.add('keys-parent');
    keys.style.margin = '20px';
    keys.style.display = 'flex';
    keys.style.flexDirection = 'column';

    const data = Object.values(weather);
    data.forEach(value => {
      const span = document.createElement('span');
      span.textContent = value;
      values.appendChild(span);
    });

    values.classList.add('values-parent');
    values.style.margin = '20px';
    values.style.display = 'flex';
    values.style.flexDirection = 'column';
    values.style.alignItems = 'flex-end';

    keysValuesParent.appendChild(keys);
    keysValuesParent.appendChild(values);
    mainContainer.appendChild(keysValuesParent);
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
