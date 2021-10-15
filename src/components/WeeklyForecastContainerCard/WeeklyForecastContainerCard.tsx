import React from 'react';
import './WeeklyForecastContainerCard.css'
import { WeeklyForecast } from '../../App';
import WeatherCard from './WeatherCard/WeatherCard'

interface weeklyForecastCardProps {
  weeklyForecastCards: WeeklyForecast[],
  loadingData: boolean
}

const WeeklyForecastContainerCard = (props: weeklyForecastCardProps) => {
  let weatherData;
  let weatherCards = props.weeklyForecastCards.map((cardData: WeeklyForecast, ind) => {
    return(<WeatherCard key={ind} cardData={cardData}></WeatherCard>)
  });
  if (props.weeklyForecastCards.length && props.weeklyForecastCards[0].locationName) {
    weatherData =
      <div className="outer-card-container">
        <span data-testid="weekly-forecast-location-name" className="card-title">Weekly Forecast for {props.weeklyForecastCards[0].locationName}</span>
        <div className="outer-weather-cards-container">
          <div className="weather-cards-container">{weatherCards}</div>
        </div>
      </div>
  } else if (props.loadingData) {
    weatherData = <span data-testid="weekly-forecast-loading-text" className="no-data-text">Loading...</span>;
  } else {
    weatherData = <span data-testid="weekly-forecast-no-data-text" className="no-data-text">No data found!</span>;
  }
  return (
    <div>
      {weatherData}
    </div>
  )
};

export default WeeklyForecastContainerCard;
