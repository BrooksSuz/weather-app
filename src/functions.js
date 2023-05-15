import changeIconShown from './icons';
import fadeInAnimation from './fadeInAnimation';
import changeBackgroundColor from './temp-colors';

// Get user location
function getLocation() {
  return document.querySelector('input').value;
}

async function getWeather() {
  const location = getLocation();
  
  try {
    // Fetch information & convert to JSON
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=282d06777efcb071746367bd7244932f`).then(res => res.json());

    // Store current temperature separately
    const temperature = Math.round((weatherData.main.temp - 273.15) * 9/5 + 32);

    // Create weather object
    const weather = {
      Location: `${weatherData.name}`,
      Country: `${weatherData.sys.country}`,
      Temperature: `${temperature}°F`,
      'Feels Like': `${Math.round((weatherData.main.feels_like - 273.15) * 9/5 + 32)}°F`,
      'Description': `${weatherData.weather[0].description}`.replace(/\b\w/g, letter => letter.toUpperCase()),
      Humidity: `${weatherData.main.humidity}`,
      'Wind Speed': `${Math.round(weatherData.wind.speed * 2.237)} mph`,
    };

    changeIconShown(weatherData);

    return { weather, temperature };
  } catch (err) {
    console.error(err);
    return;
  }
};

export default async function createWeatherDiv() {
  try {
    // Get/Create DOM elements
    const mainContainer = document.querySelector('.main-container');
    const weatherDiv = document.createElement('div');

    // Assign getWeather result to a variable
    const { weather, temperature } = await getWeather();

    // Remove old container if there is one
    if (document.querySelector('.key-value-parent')) {
      mainContainer.removeChild(document.querySelector('.key-value-parent'));
    }

    // Add key-value-parent class to weatherDiv
    weatherDiv.classList.add('key-value-parent');

    for (let key in weather) {
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      const container = document.createElement('div');

      // Add text to p elements
      p1.textContent = key;
      p2.textContent = weather[key];

      // Add keys-values class to container
      container.classList.add('keys-values');

      // Append elements to parent elements
      container.appendChild(p1);
      container.appendChild(p2);
      weatherDiv.appendChild(container);
    }

    // Append weatherDiv to mainContainer
    mainContainer.appendChild(weatherDiv);

    // Add fade-in-weather class
    fadeInAnimation();

    // Change the background color
    changeBackgroundColor(temperature);

    return;
  } catch (err) {
    console.error(err);

    // TODO: Create modal
    return alert('Format is "City/State, Country"');
  }
}
