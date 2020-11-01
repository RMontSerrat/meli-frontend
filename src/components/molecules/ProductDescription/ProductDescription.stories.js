/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductDescription from './ProductDescription';

storiesOf('ProductDescription', module).add('default', () => 
  <ProductDescription 
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum 
    gravida turpis ut auctor. Curabitur rhoncus fringilla ultrices. Aenean dapibus rutrum 
    mauris, in venenatis nunc ornare nec. Maecenas at dui vulputate neque pulvinar suscipit. 
    Mauris eros ipsum, aliquet vel laoreet nec, sollicitudin vel ante. Curabitur eu cursus turpis. Suspendisse"
  />);
