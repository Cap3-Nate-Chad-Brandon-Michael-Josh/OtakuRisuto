import React from 'react';
import { render, queryByTestId, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import DashNav from './DashNav';
import OtakuContext from '../../contexts/OtakuContext';

describe('<DashNav />', () => {
  it('should render without crashing', () => {     
    render(
      <OtakuContext.Provider value={{
        clearError: () => { },
        currentList: {},
      }}>
        <DashNav />
      </OtakuContext.Provider>);
      const element = screen.getByTestId('dashNav')
      expect(element).toBeTruthy();
  })
})

