/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Price from './Price';

storiesOf('Price', module).add('default', () => {
  const decimals = 8;
  const variantProp = 'default';

  return <Price currency="$" amount={10000} decimals={decimals} variant={variantProp} />
});
