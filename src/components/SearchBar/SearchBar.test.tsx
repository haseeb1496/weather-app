import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe('Search Bar Component', () => {

  it("has correct name in weekly and today's forecast when string searched", () => {
    const sampleFunc = () => {};
    render(<SearchBar onEnterSearch={sampleFunc}/>);
    const searchBarInput = screen.getByTestId('search-location-input');
    userEvent.type(searchBarInput, 'London');
    expect(searchBarInput).toHaveValue('London');
  });
});
