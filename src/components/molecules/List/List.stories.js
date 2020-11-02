/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
import { ProductCard } from '~/components/molecules';

storiesOf('List', module).add('default', () => {
  const product = {
    imgUrl: "https://http2.mlstatic.com/D_NQ_NP_600943-MLB31871248861_082019-V.webp",
    price: {
      currency: 'R$',
      amount: 1000,
      decimals: 12,
    },
    cityName: "Rio de Janeiro",
    freeShipping: true,
    name: "Bateria Notebook - Dell Inspiron 14 3442 (14.8v) - Preta",
  };

  const productList =  [...Array(4)].map(() => product)

  return (
    <List>
      {productList.map(item => <ProductCard {...item} />)}
    </List>
  )
});
