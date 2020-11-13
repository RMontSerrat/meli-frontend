import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductDetails.module.scss';
import { ProductInformations, ProductDescription } from '~/components/molecules';
import Button from '~/components/atoms/Button/Button';
import { Card, ProgressiveImage } from '~/components/atoms';

const ProductDetails = ({
  imgUrl, name, condition, soldQuantity, price, onSubmit, description,
}) => (
  <Card>
    <div className={styles.ProductDetails} data-testid="ProductDetails">
      <ProgressiveImage src={imgUrl} alt={name} title={name} classes={{ root: styles.image }} />
      <div className={styles.actions}>
        <ProductInformations
          price={price}
          name={name}
          condition={condition}
          soldQuantity={soldQuantity}
        />
        <Button classes={{ root: styles.button }} onClick={onSubmit}>Comprar</Button>
      </div>
      <ProductDescription classes={{ root: styles.description }} description={description} />
    </div>
  </Card>
);

ProductDetails.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  soldQuantity: PropTypes.number.isRequired,
  onSubmit: PropTypes.func,
  description: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired,
  }).isRequired,
};

ProductDetails.defaultProps = {
  onSubmit: () => {},
};

export default ProductDetails;
