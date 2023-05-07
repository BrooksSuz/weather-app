import $ from 'jquery';
import './style.css';
import 'bootstrap';
import createWeatherDiv from './functions';

$('.btn').on('click', createWeatherDiv);
