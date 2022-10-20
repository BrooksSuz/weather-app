export default async function getWeather() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=282d06777efcb071746367bd7244932f');
  const weatherData = response.json();

  console.log(weatherData);
};