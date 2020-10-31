import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Price.module.scss';
import { formatPrice, formatDecimals } from '~/utils';

const VARIANT_DEFAULT = 'default';
const VARIANT_BIG = 'big';
const variants = [VARIANT_DEFAULT, VARIANT_BIG];

const Price = ({
  currency, amount, decimals, variant,
}) => (
  <span className={classnames(styles.Price, styles[variants[variant]])}>
    <span className={styles.currency}>{currency}</span>
    <span className={styles.amount}>{`${formatPrice(amount)}`}</span>
    {decimals > 0 && (
    <span className={styles.decimals}>
      {formatDecimals(decimals)}
    </span>
    )}
  </span>
);

Price.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(variants),
};

Price.defaultProps = {
  variant: VARIANT_DEFAULT,
};

export default Price;
