import './style.css';
import 'bootstrap';
import createWeatherDiv from './functions';

const button = document.querySelector('.btn');
const formControl = document.querySelector('.form-control');

button.addEventListener('click', createWeatherDiv);
formControl.addEventListener('keypress', handleKeypress);

function handleKeypress(e) {
  if (e.key === 'Enter') {
    createWeatherDiv();
  }
}
