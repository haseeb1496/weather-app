import React from 'react';
import { render, screen } from '@testing-library/react';
import TemperatureConverter from './TemperatureConverter';
import userEvent from "@testing-library/user-event";

describe('Temperature Converter Component', () => {

  it("renders celcius input", () => {
    render(<TemperatureConverter/>);
    const celciusInput = screen.getByTestId('celcius-input');
    expect(celciusInput).toBeInTheDocument();
  });

  it("renders fahrenheit input", () => {
    render(<TemperatureConverter/>);
    const fahrenheitInput = screen.getByTestId('fahrenheit-input');
    expect(fahrenheitInput).toBeInTheDocument();
  });

  it("converts from celcius to fahrenheit correctly", () => {
    render(<TemperatureConverter/>);
    const celciusInput = screen.getByTestId('celcius-input');
    userEvent.type(celciusInput, '10');
    const fahrenheitInput = screen.getByTestId('fahrenheit-input');
    expect(fahrenheitInput).toHaveValue(50);
  });

  it("converts from fahrenheit to celcius correctly", () => {
    render(<TemperatureConverter/>);
    const fahrenheitInput = screen.getByTestId('fahrenheit-input');
    userEvent.clear(fahrenheitInput);
    userEvent.type(fahrenheitInput, '14');
    const celciusInput = screen.getByTestId('celcius-input');
    expect(celciusInput).toHaveValue(-10);
  });
});
