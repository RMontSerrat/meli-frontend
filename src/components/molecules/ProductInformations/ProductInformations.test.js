import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductInformations from './ProductInformations';

describe('<ProductInformations />', () => {
  const price = {
    currency: '$',
    amount: 10000,
    decimals: 11,
  };

  const productProps = {
    name: 'Bateria P/ Note Dell Inspiron N4050 J1knd P22g',
    price,
    soldQuantity: 122,
    condition: 'Novo',
  };

  test('it should mount', () => {
    render(<ProductInformations {...productProps} />);

    const productInformations = screen.getByTestId('ProductInformations');

    expect(productInformations).toBeInTheDocument();
  });

  test('snapshot', () => {
    const { asFragment } = render(
      <ProductInformations {...productProps} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
