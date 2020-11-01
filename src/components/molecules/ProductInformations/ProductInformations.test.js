import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductInformations from './ProductInformations';

describe('<ProductInformations />', () => {
  test('it should mount', () => {
    const price = {
      currency: '$',
      amount: 10000,
      decimals: 11,
    };

    render(<ProductInformations name="Bateria P/ Note Dell Inspiron N4050 J1knd P22g" price={price} soldQuantity={122} condition="Novo" />);

    const productInformations = screen.getByTestId('ProductInformations');

    expect(productInformations).toBeInTheDocument();
  });
});
