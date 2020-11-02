import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './ProductCard';

const product = {
  imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_600943-MLB31871248861_082019-V.webp',
  price: {
    currency: 'R$',
    amount: 1000,
    decimals: 12,
  },
  cityName: 'Rio de Janeiro',
  name: 'Bateria Notebook - Dell Inspiron 14 3442 (14.8v) - Preta',
};

describe('<ProductCard />', () => {
  test('it should mount', () => {
    render(<ProductCard {...product} />);

    const productCard = screen.getByTestId('ProductCard');

    expect(productCard).toBeInTheDocument();
  });

  test('snapshot', () => {
    const { asFragment } = render(
      <ProductCard {...product} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('snapshot with freeShipping', () => {
    const { asFragment } = render(
      <ProductCard {...product} freeShipping />,
    );

    const freeShipping = screen.getByTestId('FreeShipping');

    expect(freeShipping).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
