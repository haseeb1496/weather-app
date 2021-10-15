import axios from 'axios';
import { constants } from "./App.constants";

const WeatherService = {

  /**
   * Get Weather data in on the basis of location name
   * @param locationNameZipCode - Name of location or zip code to get weather data
   */
  getWeatherByNameZipCode(locationName: string) {
    return axios.get(constants.api.uri.forecastByNameZipCode.replace('{cityName}', locationName));
  },

  /**
   * Get weekly forecast by coordinates of location
   * @param latitude - Latitude of location
   * @param longitude - Longitude of location
   */
  getWeeklyForecastByCoordinates(latitude: string, longitude: string) {
    return axios.get(constants.api.uri.weeklyForecastByNameZipCode.replace('{lat}', latitude).replace('{lon}', longitude));
  }
};

export default WeatherService;
