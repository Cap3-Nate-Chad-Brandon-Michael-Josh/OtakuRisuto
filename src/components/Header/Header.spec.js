import React from 'react';
import Header from './Header';
import OtakuContext from '../../contexts/OtakuContext';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('should render without crashing', () => {
    render(
      <BrowserRouter>
        <OtakuContext.Provider value={{
          clearError: () => {},
          user: {
            id: 2,
            username: 'test user'
          }
        }}>
          <Header />
        </OtakuContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('test user')).toBeInTheDocument();
  })
})
