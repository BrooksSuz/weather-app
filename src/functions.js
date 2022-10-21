function getLocation() {
  return document.querySelector('input').value;
}

async function getWeather() {
  const location = getLocation();
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=282d06777efcb071746367bd7244932f`);
    const weatherData = await response.json();

    const weather = {
      Location: `${weatherData.name}`,
      Country: `${weatherData.sys.country}`,
      Temperature: `${Math.round((weatherData.main.temp - 273.15) * 9/5 + 32)}°F`,
      'Feels Like': `${Math.round((weatherData.main.feels_like - 273.15) * 9/5 + 32)}°F`,
      'Weather Description': `${weatherData.weather[0].description}`,
      Humidity: `${weatherData.main.humidity}`,
      'Wind Speed': `${Math.round(weatherData.wind.speed * 2.237)}mph`
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
    const weather = await getWeather();
    const weatherDiv = document.createElement('div');
    const keys = document.createElement('div');
    const values = document.createElement('div');

    if (document.querySelector('.key-value-parent')) {
      mainContainer.removeChild(document.querySelector('.key-value-parent'));
    }

    weatherDiv.classList.add('key-value-parent');
    weatherDiv.style.display = 'flex';
    weatherDiv.style.justifyContent = 'center';

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

    weatherDiv.appendChild(keys);
    weatherDiv.appendChild(values);
    mainContainer.appendChild(weatherDiv);
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
