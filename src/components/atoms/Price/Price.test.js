import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Price from './Price';

describe('<Price />', () => {
  test('it should mount', () => {
    render(<Price currency="$" amount={10000} decimals={11} />);

    const price = screen.getByTestId('Price');

    expect(price).toBeInTheDocument();
  });
});
