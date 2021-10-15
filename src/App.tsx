import React, { Component } from 'react';
import './App.css';
import WeatherService from './weather.service';
import SearchBar from './components/SearchBar/SearchBar'
import TodaysForecastCard from './components/TodaysForecastCard/TodaysForecastCard'
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter';
import WeeklyForecastContainerCard from './components/WeeklyForecastContainerCard/WeeklyForecastContainerCard';

export interface TodaysForecast {
  locationName: string,
  temp: number,
  minTemp: number,
  maxTemp: number,
  condition: string,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number
}

export interface WeeklyForecast {
  date: number,
  condition: string,
  temp: number,
  minTemp: number,
  maxTemp: number,
  locationName: string
}

class App extends Component {
  state = {
    searchString: '',
    todaysForecast: {} as TodaysForecast,
    weeklyForecast: [] as WeeklyForecast[],
    loadingTodaysWeather: false,
    loadingWeeklyForecast: false
  };

  /**
   * Function to get weather info when search string entered
   * @param value - Value of search string
   */
  handleSearchString = (value: string) => {
    if (value && value !== this.state.searchString) {
      this.setState({
        searchString: value,
        loadingTodaysWeather: true,
        loadingWeeklyForecast: true
      });
      let locationName = '';
      WeatherService.getWeatherByNameZipCode(value).then((res: any) => {
        locationName = res.data.name;
        let sunset = new Date(0);
        let sunrise = new Date(0);
        sunset.setUTCSeconds(res.data.sys.sunset);
        sunrise.setUTCSeconds(res.data.sys.sunrise);
        let newSunriseTime = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }).format(sunrise);
        let newSunsetTime = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }).format(sunset);
        this.setState({
          todaysForecast: {
            locationName: locationName,
            temp: res.data.main.temp,
            maxTemp: res.data.main.temp_max,
            minTemp: res.data.main.temp_min,
            condition: res.data.weather[0].main,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            sunset: newSunsetTime,
            sunrise: newSunriseTime
          },
          loadingTodaysWeather: false
        });
        WeatherService.getWeeklyForecastByCoordinates(res.data.coord.lat, res.data.coord.lon).then((res: any) => {
          const weeklyForecastArray = res.data.daily.map((data: any) => {
            let date = new Date(0);
            date.setUTCSeconds(data.dt);
            let newDate = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: '2-digit', month: '2-digit', year: '2-digit' }).format(date);
            return {
              locationName: locationName,
              date: newDate,
              condition: data.weather[0].main,
              temp: data.temp.day,
              maxTemp: data.temp.max,
              minTemp: data.temp.min
            }
          });
          weeklyForecastArray.shift();
          this.setState({ weeklyForecast: weeklyForecastArray, loadingWeeklyForecast: false });
        }, () => this.setState({ weeklyForecast: [], loadingWeeklyForecast: false }));
      }, () => this.setState({ todaysForecast: [], loadingTodaysWeather: false }));
    }
  };

  render() {
    return (
      <div className="App">
        <span className="title">The Weather App</span>
        <SearchBar onEnterSearch={this.handleSearchString}/>
        <div className="content-container">
          <div className="todays-forecast-container">
            <div className="todays-forecast-card-container">
              <TodaysForecastCard loadingData={this.state.loadingTodaysWeather} forecastCard={this.state.todaysForecast} ></TodaysForecastCard>
            </div>
            <div className="todays-forecast-card-container">
              <TemperatureConverter></TemperatureConverter>
            </div>
          </div>
          <div className="weekly-forecast-container">
            <div className="todays-forecast-card-container">
              <WeeklyForecastContainerCard loadingData={this.state.loadingWeeklyForecast} weeklyForecastCards={this.state.weeklyForecast}></WeeklyForecastContainerCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
