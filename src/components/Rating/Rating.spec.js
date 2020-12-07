import React from 'react';
import Rating from './Rating';
import OtakuContext from '../../contexts/OtakuContext';
import { render, queryByTestId, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('<Rating />', () => {
  it('should render without crashing', () => {
    render(
      <OtakuContext.Provider value={{
        clearError: () => { },
      }}>
        <Rating />
      </OtakuContext.Provider>);
      const element = screen.getByTestId('rating')
      expect(element).toBeTruthy();
  })
})