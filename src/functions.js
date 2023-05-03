// Get user location
function getLocation() {
  return document.querySelector('input').value;
}

async function getWeather() {
  const location = getLocation();
  try {
    // Fetch information & convert to JSON
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=282d06777efcb071746367bd7244932f`).then(res => res.json());

    // Create weather object
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

    // Get/Create DOM elements
    const mainContainer = document.querySelector('.main-container');
    const weatherDiv = document.createElement('div');
    const keys = document.createElement('div');
    const values = document.createElement('div');

    // Assign getWeather result to a variable
    const weather = await getWeather();

    // Remove old container if there is one
    if (document.querySelector('.key-value-parent')) {
      mainContainer.removeChild(document.querySelector('.key-value-parent'));
    }

    // Add weatherDiv styles
    weatherDiv.classList.add('key-value-parent');
    weatherDiv.style.display = 'flex';
    weatherDiv.style.justifyContent = 'center';

    // Get weather keys & make them into DOM elements
    const labels = Object.keys(weather);
    labels.forEach(key => {
      const span = document.createElement('span');
      span.textContent = `${key}: `;
      keys.appendChild(span);
    });

    // Add keys styles
    keys.classList.add('keys-parent');
    keys.style.margin = '20px';
    keys.style.display = 'flex';
    keys.style.flexDirection = 'column';

    // Get weather values & make them into DOM elements
    const data = Object.values(weather);
    data.forEach(value => {
      const span = document.createElement('span');
      span.textContent = value;
      values.appendChild(span);
    });

    // Add values styles
    values.classList.add('values-parent');
    values.style.margin = '20px';
    values.style.display = 'flex';
    values.style.flexDirection = 'column';
    values.style.alignItems = 'flex-end';

    // Append elements to their respective parent containers
    weatherDiv.appendChild(keys);
    weatherDiv.appendChild(values);
    mainContainer.appendChild(weatherDiv);

    return null;
  } catch (err) {
    console.error(err);
    return alert('Format is "City/State, Country"');
  }
}
