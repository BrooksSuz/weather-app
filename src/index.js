import './style.css';
import 'bootstrap';
import createWeatherDiv from './functions';

const button = document.querySelector('button');

button.addEventListener('click', createWeatherDiv);
