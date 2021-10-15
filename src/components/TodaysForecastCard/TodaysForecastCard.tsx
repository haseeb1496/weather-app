import React, { Component } from 'react';
import './TodaysForecastCard.css'
import { TodaysForecast } from '../../App';
import cloudyWeather from '../../assets/images/cloudy-weather.svg';
import rainyWeather from '../../assets/images/rainy-weather.svg';
import clearWeather from '../../assets/images/clear-weather.svg';

interface TodaysForecastCardProps {
  forecastCard: TodaysForecast,
  loadingData: boolean
}

class TodaysForecastCard extends Component<TodaysForecastCardProps> {

  state = {
    showMore: false
  };

  /**
   * Function to toggle show more state variable
   */
  showMoreHandler = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    let weatherIcon;
    let weatherData;
    let additionalInfo;

    if (!this.state.showMore) {
      additionalInfo = <span onClick={this.showMoreHandler} className="show-more-text">Show More</span>;
    } else {
      additionalInfo =
        <div className="info-container">
          <span className="card-info">Humid: {this.props.forecastCard.humidity}</span>
          <span className="card-info">Pressure: {this.props.forecastCard.pressure}</span>
          <span className="card-info">Sunrise: {this.props.forecastCard.sunrise}</span>
          <span className="card-info">Sunset: {this.props.forecastCard.sunset}</span>
        </div>
    }

    switch (this.props.forecastCard.condition) {
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
    if (this.props.loadingData) {
      weatherData = <span data-testid="todays-forecast-loading-text" className="no-data-text">Loading...</span>;
    } else if (this.props.forecastCard.locationName) {
      weatherData =
        <div className="outer-card-container">
          <span data-testid="todays-forecast-location-name" className="card-title">Today's Forecast for {this.props.forecastCard.locationName}</span>
          <div className="inner-card-container">
            <div className="info-container">
              <span className="card-info">{this.props.forecastCard.temp} K</span>
              <span className="card-info">{this.props.forecastCard.condition}</span>
              <span className="card-info">Min {this.props.forecastCard.minTemp} K</span>
              <span className="card-info">Max {this.props.forecastCard.maxTemp} K</span>
            </div>
            {additionalInfo}
            <img className="weather-image" src={weatherIcon}/>
          </div>
        </div>
    } else {
      weatherData = <span data-testid="todays-forecast-no-data-text" className="no-data-text">No data found!</span>;
    }
    return (
      <div>
        {weatherData}
      </div>
    )
  }
};

export default TodaysForecastCard;
