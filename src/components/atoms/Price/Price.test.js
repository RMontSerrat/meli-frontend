import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Price from './Price';

describe('<Price />', () => {
  const priceProps = {
    currency: '$',
    amount: 10000,
    decimals: 11,
  };

  test('it should mount', () => {
    render(<Price {...priceProps} />);

    const price = screen.getByTestId('Price');

    expect(price).toBeInTheDocument();
  });

  test('snapshot with variatn default', () => {
    const { asFragment } = render(
      <Price {...priceProps} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('snapshot with variatn big', () => {
    const { asFragment } = render(
      <Price {...priceProps} variant="big" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
