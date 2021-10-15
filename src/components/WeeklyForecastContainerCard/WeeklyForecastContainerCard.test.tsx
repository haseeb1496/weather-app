import React from 'react';
import { render, screen } from '@testing-library/react';
import WeeklyForecastContainerCard from './WeeklyForecastContainerCard';

describe("Today's Forecast Component", () => {

  it("renders 'No Data Found!' initially", () => {
    const mockForecastCard = [
      {
        date: 0,
        condition: '',
        temp: 0,
        minTemp: 0,
        maxTemp: 0,
        locationName: ''
      }
    ];
    render(<WeeklyForecastContainerCard weeklyForecastCards={mockForecastCard} loadingData={false}/>);
    expect(screen.getByTestId('weekly-forecast-no-data-text')).toBeInTheDocument();
  });
});
