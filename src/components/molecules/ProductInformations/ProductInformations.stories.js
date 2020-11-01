/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductInformations from './ProductInformations';

storiesOf('ProductInformations', module).add('default', () => {
  const price = {
    currency: "$",
    amount: 10000,
    decimals: 11,
  }
  return (
    <ProductInformations name="Bateria P/ Note Dell Inspiron N4050 J1knd P22g" price={price} soldQuantity={122} condition="Novo" />
  )
});
