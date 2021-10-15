import React, { Component } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onEnterSearch: ((lang: string) => void)
}

class SearchBar extends Component<SearchBarProps> {

  /**
   * Function to handle key press event in search bar input
   * @param evt - Event from the input field
   */
  handleSearchString = (evt: any) => {
    if (evt.key === 'Enter') {
      this.props.onEnterSearch(evt.target.value);
    }
  };

  render() {
    return(
      <div className='search-bard-container'>
        <input data-testid="search-location-input" className="search-input" placeholder='Enter Location Name or Zip Code' onKeyUp={this.handleSearchString}/>
      </div>
    )
  }
}

export default SearchBar;
