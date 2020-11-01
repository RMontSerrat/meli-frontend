import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import { Price } from '~/components/atoms';

const ProductCard = ({
  imgUrl, price, cityName, name, freeShipping,
}) => (
  <div className={styles.ProductCard} data-testid="ProductCard">
    <img src={imgUrl} alt={name} title={name} />
    <div className={styles.informations}>
      <h2>{name}</h2>
      <Price {...price} />
      {freeShipping && (
        <div className={styles.freeShipping}>
          Frete Grátis
        </div>
      )}
    </div>
    <span className={styles.location}>
      {cityName}
    </span>
  </div>
);

ProductCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired,
    variant: PropTypes.oneOf(['default', 'big']),
  }).isRequired,
};

ProductCard.defaultProps = {
  freeShipping: false,
};

export default ProductCard;
