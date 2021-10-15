const apiKey = '46990f691718205a7325b47372d7163f';
export const constants = {
  api: {
    uri: {
      forecastByNameZipCode: `http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=${apiKey}`,
      weeklyForecastByNameZipCode: `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=${apiKey}`
    }
  }
};
