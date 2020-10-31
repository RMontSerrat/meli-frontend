import React from 'react';
import PropTypes from 'prop-types';
import AngleRight from '../../../assets/icons/angle-right.svg';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ items }) => (
  <ol className={styles.Breadcrumb} data-testid="Breadcrumb">
    {items.map((item, i) => (
      <>
        <li key={item}>
          {item}
        </li>
        {i < items.length - 1 && <AngleRight />}
      </>
    ))}
  </ol>
);

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumb;
