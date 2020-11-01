import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInformations.module.scss';
import { Price } from '~/components/atoms';

const ProductInformations = ({
  price, name, condition, soldQuantity,
}) => (
  <div className={styles.ProductInformations} data-testid="ProductInformations">
    <span className={styles.subtitle}>
      {condition}
      {' '}
      |
      {' '}
      {soldQuantity}
      {' '}
      vendidos
    </span>
    <h1 className={styles.title}>{name}</h1>
    <Price currency={price.currency} amount={price.amount} decimals={price.decimals} variant="big" />
  </div>
);

ProductInformations.propTypes = {
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  soldQuantity: PropTypes.number.isRequired,
};

export default ProductInformations;
