import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Screen from './Screen';

describe('<Screen />', () => {
  test('it should mount', () => {
    render(
      <Screen title="Screen title">
        <div />
      </Screen>,
    );

    const screenComponent = screen.getByTestId('Screen');

    expect(screenComponent).toBeInTheDocument();
  });
});
