import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ProductDescription.module.scss';

const ProductDescription = ({ description, classes }) => (
  <div className={classNames(styles.ProductDescription, classes.root)} data-testid="ProductDescription">
    <h2 className={classNames(styles.title, classes.title)}>
      Descrição do produto
    </h2>
    <p className={classNames(styles.content, classes.content)}>
      {description}
    </p>
  </div>
);

ProductDescription.propTypes = {
  description: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

ProductDescription.defaultProps = {
  classes: {},
};

export default ProductDescription;
