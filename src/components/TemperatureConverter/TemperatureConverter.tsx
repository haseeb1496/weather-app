import React, { Component } from 'react';
import './TemperatureConverter.css'
import rightArrow from '../../assets/images/right-arrow.svg'

class TemperatureConverter extends Component {

  state = {
    fahrenheitTemp: 32,
    celciusTemp: 0
  };

  /**
   * Function called when input field is blurred in celcius input field
   * @param evt - Event from Input field when blurred
   */
  onCelciusBlurHandler = (evt: any) => {
    this.setState({ celciusTemp: evt.target.value, fahrenheitTemp: (evt.target.value * 1.8) + 32 })
  };

  /**
   * Function called when input field is blurred in fahrenheit input field
   * @param evt - Event from Input field when blurred
   */
  onFahrenheitBlurHandler = (evt: any) => {
    this.setState({ celciusTemp: (evt.target.value - 32) / 1.8, fahrenheitTemp: evt.target.value })
  };

  render () {
    return (
      <div className="outer-card-container">
        <span className="card-title">Temperature Converter</span>
        <div className="inner-card-container">
          <div className="input-container">
            <input data-testid="celcius-input" type="number" onChange={this.onCelciusBlurHandler} value={this.state.celciusTemp}/>
            <span>C</span>
          </div>
          <img className="arrow-image" src={rightArrow}/>
          <div className="input-container">
            <input data-testid="fahrenheit-input" type="number" onChange={this.onFahrenheitBlurHandler} value={this.state.fahrenheitTemp}/>
            <span>K</span>
          </div>
        </div>
      </div>
    )
  }
};

export default TemperatureConverter;
