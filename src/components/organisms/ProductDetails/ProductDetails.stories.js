/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductDetails from './ProductDetails';

storiesOf('ProductDetails', module).add('default', () => {
  const price = {
    currency: "$",
    amount: 10000,
    decimals: 11,
  }

  return (
    <ProductDetails
      name="Bateria P/ Note Dell Inspiron N4050 J1knd P22g" 
      price={price}
      imgUrl="https://http2.mlstatic.com/D_NQ_NP_2X_710407-MLB32192839961_092019-F.webp"
      onSubmit={() => { console.log('Submit')}}
      soldQuantity={122}
      condition="Novo"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum 
      gravida turpis ut auctor. Curabitur rhoncus fringilla ultrices. Aenean dapibus rutrum 
      mauris, in venenatis nunc ornare nec. Maecenas at dui vulputate neque pulvinar suscipit. 
      Mauris eros ipsum, aliquet vel laoreet nec, sollicitudin vel ante. Curabitur eu cursus turpis. Suspendisse"
    />
  )
});
