import React from 'react';
import { render, screen } from '@testing-library/react';
import TodaysForecastCard from './TodaysForecastCard';

describe("Today's Forecast Component", () => {

  it("renders 'No Data Found!' initially", () => {
    const mockForecastCard = {
      locationName: '',
      temp: 0,
      minTemp: 0,
      maxTemp: 0,
      condition: ''
    };
    render(<TodaysForecastCard forecastCard={mockForecastCard} loadingData={false}/>);
    expect(screen.getByTestId('todays-forecast-no-data-text')).toBeInTheDocument();
  });
});
