import React from 'react';
import './WeatherCard.css';
import { WeeklyForecast } from '../../../App';
import cloudyWeather from '../../../assets/images/cloudy-weather.svg';
import rainyWeather from '../../../assets/images/rainy-weather.svg';
import clearWeather from '../../../assets/images/clear-weather.svg';

interface WeatherCardProps {
  cardData: WeeklyForecast
}

const WeatherCard = (props: WeatherCardProps) => {
  let weatherIcon;
  switch (props.cardData.condition) {
    case 'Clouds':
      weatherIcon = cloudyWeather;
      break;
    case 'Rain':
      weatherIcon = rainyWeather;
      break;
    default:
      weatherIcon = clearWeather;
      break;
  }
  return (
    <div className="card-container">
      <div className="card-info-container">
        <span className="card-info">{props.cardData.temp} K</span>
        <span className="card-info">Min {props.cardData.minTemp} K</span>
        <span className="card-info">Max {props.cardData.maxTemp} K</span>
        <span className="card-info">{props.cardData.date}</span>
      </div>
      <img src={weatherIcon} className="weather-image"/>
    </div>
  );
}

export default WeatherCard;
