import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('Weather App', () => {
  it("has search bar input rendered", () => {
    render(<App/>);
    const searchBarInput = screen.getByTestId('search-location-input');
    expect(searchBarInput).toBeInTheDocument();
  });

  it("shows 'Loading...' text in today's forecast", () => {
    render(<App/>);
    userEvent.type(screen.getByTestId('search-location-input'), 'London{enter}');
    expect(screen.getByTestId('todays-forecast-loading-text')).toBeInTheDocument();
  });

  it("shows 'Loading...' text in weekly forecast", () => {
    render(<App/>);
    userEvent.type(screen.getByTestId('search-location-input'), 'London{enter}');
    expect(screen.getByTestId('weekly-forecast-loading-text')).toBeInTheDocument();
  });
});
