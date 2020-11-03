import React from 'react';
import PropTypes from 'prop-types';
import imgShipping from '../../../assets/images/ic_shipping.png';
import styles from './ProductCard.module.scss';
import { Price } from '~/components/atoms';

const ProductCard = ({
  imgUrl, price, cityName, name, freeShipping, onClick,
}) => (
  <div
    className={styles.ProductCard}
    data-testid="ProductCard"
    onClick={onClick}
    role="button"
    onKeyDown={onClick}
    tabIndex={0}
  >
    <img src={imgUrl} alt={name} title={name} className={styles.imgProduct} />
    <div className={styles.informations}>
      <div className={styles.priceContainer}>
        <Price {...price} />
        {freeShipping && (
          <figure className={styles.freeShipping} data-testid="FreeShipping">
            <img src={imgShipping} alt="Mercado Livre - Frete Grátis" className={styles.imgShipping} />
          </figure>
        )}
      </div>
      <h2>{name}</h2>
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
  onClick: PropTypes.func,
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
  onClick: () => {},
};

export default ProductCard;
