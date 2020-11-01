import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from './ProductDetails';

describe('<ProductDetails />', () => {
  test('it should mount', () => {
    const price = {
      currency: '$',
      amount: 10000,
      decimals: 11,
    };

    const onSubmit = jest.fn();

    render(
      <ProductDetails
        name="Bateria P/ Note Dell Inspiron N4050 J1knd P22g"
        price={price}
        onSubmit={onSubmit}
        imgUrl="https://http2.mlstatic.com/D_NQ_NP_2X_710407-MLB32192839961_092019-F.webp"
        soldQuantity={122}
        condition="Novo"
        description="description text"
      />,
    );

    const productDetails = screen.getByTestId('ProductDetails');

    expect(productDetails).toBeInTheDocument();
  });
});
